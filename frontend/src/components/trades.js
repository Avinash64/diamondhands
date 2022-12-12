import React, {useState, useEffect} from "react";
import axios from "axios"
import "./trades.css"
import { json, useNavigate } from "react-router-dom";

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



const Trades = () => {
    const [trends, setTrends] = useState("")
    const [loaded, setLoaded] = useState("")
    const [id, setId] = useState("")
    const [amount, setAmount] = useState("")
    const [user, setTrending] = useState("")
    const [data, setData] = useState("")
    const [value, setValue] = useState("")

if(data === ""){
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {method: 'GET'})
    .then(res => res.json())
    .then(json => {
      console.log(json)
      console.log("bruh")
      setData(json)
      setLoaded("loaded")
  })}
    
    var options2 = {
      method: 'GET',
      url: 'http://localhost:3080/login/loggedin',
      headers: {
        'Content-Type': 'application/json',
        token: getCookie("token")
      },
    };
    console.log(document.cookie)
    
    if(user === ""){
      axios.request(options2).then(function (response) {
        console.log(response.data);
        setTrending(response.data);
      }).catch(function (error) {
        console.error(error);
        setTrending(error.response.data.error);
      });
    }
    
    let url = 'localhost:3000/trades/';
    let options = {method: 'GET'};
if(data === ""){
fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    console.log("bruh")
    setData(json)
    setLoaded("loaded")
    var l = []
    json.forEach(element => {
      l.push(element.id)
    });
    setData(l)
    console.log(l)
})}
let listItems =""

const onSubmit = () => {
  priceCheck()
  if(!value){return}
  console.log("price",value*amount)
  if(value*amount > user.balance){
    alert("insufficient funds")
    return
  }
  var options = {
    method: 'POST',
    url: 'http://localhost:3080/trade',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {id2: id, id: user._id, amount: amount, value: value}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}
const priceCheck = () => {

var options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/simple/price',
  params: {ids: id, vs_currencies: 'usd'}
};

axios.request(options).then(function (response) {
  console.log(response.data[id].usd);
  setValue(response.data[id].usd)
}).catch(function (error) {
  console.error(error);
});
}
if(trends === "" && user.transactions){
    listItems = user.transactions.map((number) =>  
    <li className="row" >
    <div>{number.id}</div>
    <div>{number.amount}</div>
    <div>{number.value}</div>
    <div>


    </div>
    <div></div>
    {/* {JSON.stringify(number)} */}
                                            </li>);}
    return (
        <>
        <div className="page" >
        <div className="sb">
        <Sidebar />
        </div>
        <div className="container">
        <h1>Trade</h1>
        <div className="form">
        <div>
        Id:<input type="text" onChange={(e) => setId(e.target.value)}></input>
        </div>  
        <div>
        Amount:<input type="text" onChange={(e) => setAmount(e.target.value)}></input>
        </div> 
        <button onClick={onSubmit} className="submit2" >Submit</button>
        </div>
        <div>{listItems}</div>
        <div>{JSON.stringify(user.transactions)}</div>
        </div>
        </div>

        </>
        )
}

export default Trades