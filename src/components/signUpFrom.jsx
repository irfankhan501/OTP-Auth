import React, { useState } from "react";
import axios from "axios";

const api = "http://localhost:8000/signup";

const SignUpFrom = ({ number, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const { data } = await axios.post(api, {
      number,
      name,
      email,
    });
    if (data) {
      history.push("/success-signup");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h3>Sign Up</h3>
        <form>
          <div className="form-group p-2">
            <label htmlFor="_name">Name</label>
            <input
              type="text"
              id="_name"
              value={name}
              className="form-control p-2"
              placeholder="Name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group p-2">
            <label htmlFor="_name">Email</label>
            <input
              type="email"
              id="_email"
              className="form-control p-2"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-2">
            <button
              disabled={name ? (email ? false : true) : true}
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFrom;
