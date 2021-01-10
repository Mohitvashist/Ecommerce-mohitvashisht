import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Components/Layout";
import Input from "../../Components/UI";

function Signin(props) {
  return (
    <div>
      <Layout />
      <Container>
        <Row style={{ margin: 50 }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                placeholder="Email"
                label="email"
                type="email"
                value=""
                onChange={() => {}}
              />
              <Input
                placeholder="Password"
                label="Password"
                type="password"
                value=""
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signin;
