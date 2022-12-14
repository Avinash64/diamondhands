import React, {useState, useEffect} from "react";
import Axios from "axios"
import "./trending.css"
import { useNavigate } from "react-router-dom";

import Sidebar from './sidebar';
const fetch = require("cross-fetch")



const Trending = () => {
    const [trends, setTrends] = useState("")
    const [loaded, setLoaded] = useState("")
    let url = 'https://api.coingecko.com/api/v3/search/trending';

let options = {method: 'GET'};


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
if(trends.coins){
    listItems = trends.coins.map((number) =>  
    <li className="row" >
    <img src={number.item.small}></img>
    <div>{number.item.id}</div>
    <div>{number.item.name}</div>
    <div>{number.item.price_btc}</div>
    {/* {JSON.stringify(number)} */}
                                            </li>);}
    return (
        <>
        <div className="page" >
        <div className="sb">
        <Sidebar />
        </div>
        <div className="trend">
        <h1>Trending</h1>
        {/* <p>{JSON.stringify(trending)}</p> */}
        <ul>{listItems}</ul>
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

export default Trending