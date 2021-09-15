import { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoginForm from "./components/login-form";
import "../../../stylesheets/login.scss";
import * as authService from "../../../services/auth.service";

const Login = () => {

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [fieldError, setFieldError] = useState("");

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      await authService.login(values);
      setLoading(false);
      setFieldError("");
      history.push("/devices");
      window.location.reload();
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setFieldError(error.response.data);
      } 
    }
  };

  return (
    <Container className="text-center bg-primary min-vh-100 d-flex align-items-center" fluid>
      <main className="form-login bg-white rounded-1 py-4">
        <h2>Login</h2>
        <LoginForm 
          loading={loading}
          handleLogin={handleLogin}
          fieldError={fieldError}
        />
      </main>
    </Container>
  );
}

export default Login;
