import React, {useState} from "react";
import Axios from "axios"
import "./login.css"
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios"

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errmsg, setErrmsg] = useState("")
    const [loggedin, setLoggedin] = useState("")
    var options = {
        method: 'GET',
        url: 'http://localhost:3080/login/loggedin',
        headers: {
          'Content-Type': 'application/json',
          token: getCookie("token")
        }
      };

      if(loggedin == ""){
    axios.request(options).then(function (response) {
        console.log(response.data);
        navigate("/dashboard");
      }).catch(function (error) {
        console.error(error);
      });
    }
 
    const onSubmit = () => {
        Axios.post('http://localhost:3080/login',{
            username : username,
            password: password
        }).then(response => {
            console.log(response.data.token);
            if(response.status!==200){
                setErrmsg("Username or password invalid")
            }
            else{
                document.cookie =
    `token=Bearer ${response.data.token}; SameSite=None; path=/`
                console.log(document.cookie)
                setErrmsg("")
                navigate("/dashboard");
            }
        
        })
    }

 
   return (
        <div className="background">
        <div className="login">
            <h1>Login</h1>
            <div className="forms">
            <p className="err">{errmsg}</p>
            <input className="field" type="text"
                onChange={(e) => setUsername(e.target.value)}
             placeholder="Username"></input>
            <input type="password" className="field"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"></input>
            </div>
            <div onClick={onSubmit} className="submit">Submit</div>
            <p>Don't have an account?</p> <a className="logre" href="/register">Register</a>
        </div>
        </div>
    )
}

export default Login