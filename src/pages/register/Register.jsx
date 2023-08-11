import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        {
          username: username,
          password: password,
          email: email,
          post: post,
        }
      );

      navigate("/home");
    } catch (error) {
      // エラーハンドリング
      console.error("An error occurred:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        username: username,
        password: password,
      });
      navigate("/home");
    } catch (error) {
      // エラーハンドリング
      console.error("An error occurred:", error);
    }
  };
  return (
    <React.Fragment>
      <div className="title2">WeatherClothes</div>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  value={username} // ユーザー名の値をstateと結びつける
                  onChange={handleUsernameChange} // ユーザー名の変更をハンドルする関数を設定
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  value={password} // パスワードの値をstateと結びつける
                  onChange={handlePasswordChange} // パスワードの変更をハンドルする関数を設定
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign In"
                  onClick={handleSignIn}
                />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  data-type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="group">
                <label htmlFor="post" className="label">
                  Post number
                </label>
                <input
                  id="post"
                  type="text"
                  pattern="\d{3}-?\d{4}"
                  className="input"
                  placeholder="123-4567"
                  data-type="post"
                  value={post}
                  onChange={handlePostChange}
                />
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign Up"
                  onClick={handleSignUp}
                />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="back.png" className="back" />
      <script src="script.js"></script>
    </React.Fragment>
  );
}
