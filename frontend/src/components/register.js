import React, {useState} from "react";
import Axios from "axios"
import "./login.css"

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errmsg, setErrmsg] = useState("")
 
    const onSubmit = () => {
        Axios.post('http://localhost:3080/user',{
            username : username,
            password: password
        }).then(response => {
            console.log(response.status);
            if(response.status!==201){
                setErrmsg("Username already taken")
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
            <p>Already have an account?</p> <p className="logre">Log in</p>
        </div>
        </div>
    )
}

export default Register