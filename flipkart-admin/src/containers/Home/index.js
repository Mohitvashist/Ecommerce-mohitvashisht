import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "./../../Components/Layout";

function Home(props) {
  return (
    <div>
      <Layout />
      <Jumbotron
        style={{ margin: "Srem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
      </Jumbotron>
    </div>
  );
}

export default Home;
