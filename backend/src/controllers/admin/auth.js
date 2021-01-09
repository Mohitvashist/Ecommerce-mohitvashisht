const User=require('../../models/user');
const jwt=require('jsonwebtoken');
exports.signup=(req,res)=>{
    
        User.findOne({email:req.body.email})
        .exec((err,user)=>{
            if(err) res.status(400).json({mesage:err})
    
            if(user){
                res.status(400).json({message:'admin already exits',status:'false'})
            }
            const {firstName,lastName,email,password}=req.body;
    
            const _user=new User({firstName,lastName,email,password,userName:Math.random().toString(),role:'admin'});
            _user.save((err,data)=>{
                if(err){ return res.status(400).json({message:'something went wrong'})}
                if(data){
                    return res.status(201).json({message:'admin created sucessfully'});
                }
    
            })
    
        })
    
    }

exports.signin=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((err,user)=>{
        if(err) res.status(400).json({err})
        if(user){
         if(user.authenticate(req.body.password) && user.role=='admin')
         {
             const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
             const {_id,firstName,lastName,email,role,fullName}=user;
             res.status(200).json({
                 token,
                 user:{_id,firstName,lastName,email,role,fullName}
             })
         }
         else{
             res.status(400).json({message:'Invalid email or password'})
         }

        }
        else res.status(400).json({message:'email id doesnot exist'})

    })
}

exports.authorized=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1];
    const user=jwt.verify(token,process.env.JWT_SECRET)
    req.user=user;
    next();
}