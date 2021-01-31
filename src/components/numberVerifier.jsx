import React, { useState } from "react";
import axios from "axios";
import firebase from "../firebase";
import SignUpFrom from "./signUpFrom";

const NumberVerifier = ({ mode, history }) => {
  const [number, setNumber] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
 
  const handleOtpVerify = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    const num = `+91${number}`;
    firebase
      .auth()
      .signInWithPhoneNumber(num, recaptcha)
      .then(function (confirmation) {
        const code = prompt("Enter otp", "");
        confirmation
          .confirm(code)
          .then((result) => {
            if (mode === "Sign Up") {
              setIsSignUp(true);
            } else {
              setIsSignUp(false);
              handleSignIn();
            }
          })
          .catch((error) => {
            alert("worng OTP", error);
          });
      });
  };

  const handleSignIn = async () => {
    const result = await axios.post("http://localhost:8000/signin", {
      number,
    });
    console.log(result);
    if (result.data.length === 1) {
      history.push("/success-signin");
    } else {
      history.push("/fail-signin");
    }
  };

  return (
    <>
      {isSignUp ? (
        <SignUpFrom number={number} history={history} />
      ) : (
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h3>{mode}</h3>
            <form>
              <div className="form-group p-2">
                <label htmlFor="_number">Mobile Number</label>
                <input
                  type="number"
                  id="_number"
                  value={number}
                  className="form-control p-2"
                  placeholder="Number..."
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div id="recaptcha-container" className="m-1"></div>
              <div className="p-2">
                <button
                  type="button"
                  disabled={number ? false : true}
                  className="btn btn-primary"
                  onClick={handleOtpVerify}
                >
                  {mode}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NumberVerifier;
