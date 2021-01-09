 const express=require('express');
 const app=express();
 const env=require('dotenv');
 const bodyParser=require('body-parser');
 const mongoose=require('mongoose');
 env.config();
 mongoose.connect('mongodb://127.0.0.1:27017/flipkart-user', {useNewUrlParser: true,
 useUnifiedTopology: true,useCreateIndex:true}).then(()=>console.log('mongo database connected'));
 const userRoutes=require('./routes/user');
 const adminRoutes=require('./routes/admin/adminroute')
 
 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 
 
 
app.use('/api',userRoutes);
app.use('/api',adminRoutes)

app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`))