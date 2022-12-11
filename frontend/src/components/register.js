import React, {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./login.css"



const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errmsg, setErrmsg] = useState("")

    const [loggedin, setLoggedin] = useState("")
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
        axios.post('http://localhost:3080/user',{
            username : username,
            password: password
        }).then(response => {
            console.log(response.status);
            if(response.status!==201){
                setErrmsg("Username already taken")
                console.log(document.cookie)
            }
            else{
                navigate("/login");
            }
        
        })
    }

 
   return (
        <div className="background">
        <div className="login">
            <h1>Register</h1>
            <div className="forms">
            <p className="err">{errmsg}</p>
            <input type="text"
                onChange={(e) => setUsername(e.target.value)}
             placeholder="Username"></input>
            <input type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"></input>
            </div>
            <div onClick={onSubmit} className="submit">Submit</div>
            <p>Already have an account?</p> <a href="/login" className="logre">Log in</a>
        </div>
        </div>
    )
}

export default Register