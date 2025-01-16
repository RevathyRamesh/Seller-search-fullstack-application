import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:4000/login", {
        username,
        password,
      });

      // Save the token in localStorage or sessionStorage
      localStorage.setItem("authToken", response.data.token);

      setSuccessMessage(response.data.message);
      setError(""); // Clear error
    } catch (err) {
      setSuccessMessage(""); // Clear success message
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

