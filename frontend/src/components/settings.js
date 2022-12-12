import React, {useState, useEffect} from "react";
import axios from "axios"
import "./dash.css"
import { useNavigate } from "react-router-dom";

import Sidebar from './sidebar';
const fetch = require("cross-fetch")

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const Settings = () => {
    const [user, setTrending] = useState("")
    const [loaded, setLoaded] = useState("")
    const [deposit, setDeposit] = useState("")
    const fetch = require('node-fetch');

    const onSubmit = () => {
      axios.post('http://localhost:3080/settings/reset',{
          id : user._id
      }).then(response => {
          console.log(response.data);

          })
      
      }

    var options = {
        method: 'GET',
        url: 'http://localhost:3080/login/loggedin',
        headers: {
          'Content-Type': 'application/json',
          token: getCookie("token")
        },
      };
      console.log(document.cookie)

      if(user === ""){
    axios.request(options).then(function (response) {
        console.log(response.data);
        setTrending(response.data);
      }).catch(function (error) {
        console.error(error);
        setTrending(error.response.data.error);
      });
    }
let listItems =""

    return (
        <>
        <div className="page" >
        <div className="sb">
        <Sidebar />
        </div>
        <div>
        <h1>Dashboard</h1>
        <h2>Welcome {user.username}</h2>
        <h2>Your current balance is {user.balance}</h2>
        <button onClick={onSubmit}>Reset</button>
        {/* <h2>You currently have {user.accounts.length} accounts</h2> */}
  

        {/* <p>{JSON.stringify(trending)}</p> */}
        <ul>{JSON.stringify(user)}</ul>
        </div>
        </div>
        </>
        )
}

export default Settings