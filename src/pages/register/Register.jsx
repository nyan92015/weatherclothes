import axios from "axios";
import React, { useRef ,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";


export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
  return (
    <React.Fragment>
      <div className="title">WeatherClothes</div>
      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
          <label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input 
                    id="user" 
                    type="text" 
                    className="input"
                    value={username} // ユーザー名の値をstateと結びつける 
                    onChange={handleUsernameChange} // ユーザー名の変更をハンドルする関数を設定
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
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
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Repeat Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
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

      

