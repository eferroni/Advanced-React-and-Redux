import React, { useState } from "react";
import { signup } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage, isLoading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password }, () => navigate("/feature")));
  };

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px 0" }}>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ margin: "10px 0" }}>
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <div>{errorMessage}</div>}
          <div>
            <button>Sign Up</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;
