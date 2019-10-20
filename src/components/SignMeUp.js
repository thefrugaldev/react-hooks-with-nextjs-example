import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
//Components
import { ConfigContext } from "./App";
//Styles
import "react-toastify/dist/ReactToastify.css";

const SignMeUp = ({ signupCallback }) => {
  useEffect(() => {
    console.log(`SignMeUp: useEffect called`);
  });

  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [sendProcessing, setSendProcessing] = useState(false);

  const context = useContext(ConfigContext);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const notify = () => {
    toast.info(
      `You will be notified of upcoming releases at the following email: ${email}`
    );
  };

  function sendEmailToBackend() {
    setSendProcessing(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        setSendProcessing(false);
        setEmail("");
        resolve();
      }, 1000);
    }).then(() => {
      notify();
      signupCallback(email);
      setEmail("");
    });
  }

  const buttonText = sendProcessing ? "processing..." : "Get Updates";

  return context.showSignMeUp === false ? null : (
    <>
      <ToastContainer />
      <div className="content form-inline float-right">
        <input
          value={email}
          onChange={e => {
            setEmailValid(validateEmail(e.target.value));
            return setEmail(e.target.value);
          }}
          placeholder="Enter Email"
          type="email"
          name="email"
          required
          className="form-control mx-sm-2"
        />
        <button
          disabled={!emailValid || sendProcessing}
          className="btn btn-primary"
          onClick={sendEmailToBackend}
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default SignMeUp;
