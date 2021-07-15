import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          if (auth) {
            history.push("/");
          }
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginWrap>
      <Link to="/">
        <ImageLogo
          src={
            process.env.PUBLIC_URL +
            "/images/login_images/amazon_logo_transparent.png"
          }
          alt="Login pic"
        />
      </Link>
      <Container>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <SignInButton type="submit" onClick={signIn}>
            Sign In
          </SignInButton>

          <p>
            By signing in you agree to the AMAZON FAKE (Jason's E-Commerce Demo
            Project) Conditions of Use & Sale. Please see our Privacy Notice,
            and our Interest-Based Ads Notice.
          </p>
          <RegisterButton onClick={register}>
            Create your Amazon Account
          </RegisterButton>
        </form>
      </Container>
    </LoginWrap>
  );
}

export default Login;

const LoginWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Container = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;

  > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  > form > h5 {
    margin-bottom: 5px;
  }

  > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }

  > p {
    margin-top: 15px;
    font-size: 12px;
  }
`;

const ImageLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

const SignInButton = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid lightgray;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
`;

const RegisterButton = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
  cursor: pointer;
`;
