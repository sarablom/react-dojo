import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../../hooks/useLogin";
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email: </span>
        <input
          required
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </label>
      <label>
        <span>password: </span>
        <input
          required
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </label>
     
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login