import React, {useState, useEffect} from "react";
import axios from "axios"
import "./dash.css"
import { useNavigate } from "react-router-dom";

import Sidebar from './sidebar';


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

  const Dash = () => {
    const [user, setTrending] = useState("")
    const [loaded, setLoaded] = useState("")
    const [deposit, setDeposit] = useState("")
    const [trends, setTrends] = useState("")
    const [total, setTotal] = useState("")

    const fetch = require('cross-fetch');
if(trends === ""){
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {method: 'GET'})
    .then(res => res.json())
    .then(json => {
      console.log(json)
      console.log("bruh")
      setTrends(json)
      setLoaded("loaded")
  })}

    const onSubmit = () => {
      axios.post('http://localhost:3080/trade/balence',{
          add : deposit,
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

async function getPrice(id) {

var options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/simple/price',
  params: {ids: id, vs_currencies: 'usd'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
  return response.data
}).catch(function (error) {
  console.error(error);
});
}

if(user.transactions){
    var dat = {}
    let dat2= {}
    user.transactions.forEach(element => {
      if (dat[element.id]){
      dat[element.id] +=element.amount
    }
    else{
      dat[element.id] =element.amount
    }
    console.log(dat)
    Object.values(trends).forEach(element2 => {
      if(element2.id === element.id){
        console.log(element2.current_price)
        dat2[element.id] = element2.current_price
      }
    }
    
    )
  });

    listItems = Object.entries(dat).map((number) =>  
    <li className="row" >
    <div>{number[0]}</div>
    <div>{number[1]}</div>
    <div>{Math.round(dat2[number[0]] * number[1]* 100) / 100}</div>

                                            </li>);}
  
    return (
        <>
        <div className="page" >
        <div className="sb">
        <Sidebar />
        </div>
        <div>
        <h1>Dashboard</h1>
        <h2>Welcome {user.username}</h2>
        <h2>Your current balance is ${Math.round(user.balance * 100) / 100}</h2>
        {/* <h2>You currently have {user.accounts.length} accounts</h2> */}
  

        {/* <p>{JSON.stringify(trending)}</p> */}
        {/* <ul>{JSON.stringify(user)}</ul> */}
        {/* <div>{JSON.stringify(dat)}</div> */}
        <div>See your current holdings below</div>
        <div className="accounts">{listItems}</div>
        </div>
        </div>
        </>
        )
}

export default Dash