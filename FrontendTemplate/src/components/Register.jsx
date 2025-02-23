import React, { useState } from "react";
import { register } from "../AuthService";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  // const [validated, setValidated] = useState(false);
  // const [showError, setShowError] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;

  //   if (form.checkValidity() === false) {
  //     event.stopPropagation();
  //     setShowError(true);
  //   } else {
  //     setShowError(false);
  //     console.log('Form submitted successfully');
  //   }

  //   setValidated(true);
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      alert("Registration successful!");
    } catch (error) {
      setError("Failed to register: " + error.message);
    }
  };

  // Custom styles with blue and white theme
  const styles = {
    pageBackground: {
      minHeight: "100vh",
      background: "linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(1, 1, 1) 100%)",
      position: "relative",
      overflow: "hidden",
    },
    glassCard: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgb(255, 255, 255)",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    },
    buttonGlow: {
      background: "linear-gradient(45deg, #00f7ff, #0091ff)",
      border: "none",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "0 0 15px rgba(0, 247, 255, 0.5)",
      },
    },
  };

  return (
    <div style={styles.pageBackground} className="py-5">
      <style>
        {`
          @keyframes glow {
            from {
              text-shadow: 
                0 0 10px #00f7ff,
                0 0 20px #00f7ff,
                0 0 30px #00f7ff,
                0 0 40px #0091ff;
            }
            to {
              text-shadow: 
                0 0 20px #00f7ff,
                0 0 30px #00f7ff,
                0 0 40px #00f7ff,
                0 0 50px #0091ff,
                0 0 60px #0091ff;
            }
          }
          .glowing-heading {
            color: #ffffff;
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1.5rem;
            animation: glow 2s ease-in-out infinite alternate;
          }

          .form-control {
            background-color: transparent !important;
            color: white !important;
            border: 1px solid white;
          }

          .form-control::placeholder {
            color: white !important;
            opacity: 1;
          }
        `}
      </style>
      <div style={styles.circuitPattern} />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card style={styles.glassCard}>
              <Card.Body>
                <h2 className="glowing-heading">roadmapAI</h2>

                {/* {showError && (
                  <Alert
                    variant="danger"
                    onClose={() => setShowError(false)}
                    dismissible
                  >
                    Please check your input and try again.
                  </Alert>
                )} */}

                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your full name"
                      className="shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your full name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Email</Form.Label>
                    {/* added */}
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email"
                      className="shadow-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Password</Form.Label>
                    {/* added */}
                    <Form.Control
                      required
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your password.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Confirm Password"
                      className="shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please confirm your password.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      type="checkbox"
                      label="I agree to the Terms and Conditions"
                      className="text-white"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      type="submit"
                      style={styles.buttonGlow}
                      className="shadow btn-lg"
                    >
                      Register
                    </Button>
                  </div>

                  <div className="text-center mt-3">
                    <a
                      href="/login"
                      className="text-white text-decoration-none hover-glow"
                    >
                      Already have an account? Login
                    </a>
                  </div>
                </Form>
                {/* added */}
                {error && <p>{error}</p>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
