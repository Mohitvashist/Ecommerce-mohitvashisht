import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Components/Layout";
import Input from "../../Components/UI";
function Signup(props) {
  return (
    <div>
      <Layout />
      <Container>
        <Row style={{ margin: 50 }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    type="text"
                    label="Firstname"
                    placeholder="firstname"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    type="text"
                    label="Lastname"
                    placeholder="Lastname"
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                type="email"
                label="Email"
                placeholder="Email"
                onChange={() => {}}
              />

              <Input
                type="password"
                label="Password"
                placeholder="Password"
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

export default Signup;
