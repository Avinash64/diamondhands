import React, {useState, useEffect} from "react";
import xios from "axios"
import "./markets.css"
import { useNavigate } from "react-router-dom";

import Sidebar from './sidebar';
const fetch = require("cross-fetch")



const Market = () => {
    const [trends, setTrends] = useState("")
    const [loaded, setLoaded] = useState("")
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

let options = {method: 'GET'};

// const onSubmit = (id, amount,value) => {
//   var options = {
//     method: 'POST',
//     url: 'http://localhost:3080/trade',
//     headers: {
//       'Content-Type': 'application/json',
//       token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2N2I3ODIwMGZiMWQ5NzM3OGI3ZTciLCJpYXQiOjE2NzA4MjA2NjB9.cHsTWjPIxZ-O_ECyNqc1hEgBXcFDbh7ug4p1I16SKfQ'
//     },
//     data: {id2: id, id: '6397696c447eacdd8ee3ed1c', amount: amount, value: value}
//   };
  
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }

if(trends === ""){
fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    console.log("bruh")
    setTrends(json)
    setLoaded("loaded")
})}
let listItems =""
if(trends !== ""){
    listItems = trends.map((number) =>  
    <li className="row" >
    <img src={number.image.replace('large', 'small')}></img>
    <div>{number.id}</div>
    <div>{number.name}</div>
    <div>{number.current_price}</div>
    {/* <div>

  
    {/* {JSON.stringify(number)} */}
                                            </li>);}
    return (
        <>
        <div className="page" >
        <div className="sb">
        <Sidebar />
        </div>
        <div className="trend">
        <h1>Market</h1>
        {/* <p>{JSON.stringify(trending)}</p> */}
        {/* <ul>{JSON.stringify(trends)}</ul> */}
        <ul>
        <li className="row" >
          <div>Icon</div>
          <div>id</div>
          <div>Name</div>
          <div>Amount(USD)</div>
        </li>
          {listItems}
          </ul>
        {/* <ul>{
        trends.coins.map((val,key)=>{
      return (
      <li key={key} className="row" >
      <img src={val.item.small}></img>
      <div>{val.item.id}</div>
      <div>{val.item.name}</div>
      <div>{val.item.price_btc}</div>
      
      </li>
      );
    })}</ul> */}
        </div>
        </div>
        </>
        )
}

export default Market