import React, {useState, useEffect} from "react";
import Axios from "axios"
import "./dash.css"
import { useNavigate } from "react-router-dom";

import Sidebar from './sidebar';
const fetch = require("cross-fetch")



const Trending = () => {
    const [trends, setTrends] = useState("")
    const [loaded, setLoaded] = useState("")
    let url = 'https://api.coingecko.com/api/v3/search/trending';

let options = {method: 'GET'};

if(trends == ""){
fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    console.log("bruh")
    setTrends(json)
})}
let listItems =""
if(trends.coins){
    listItems = trends.coins.map((number) =>  <li>{JSON.stringify(number)}</li>);}
    return (
        <>
        <div className="page" >
        <div className="sb">
        <Sidebar />
        </div>
        <div>
        <h1>Trending</h1>
        {/* <p>{JSON.stringify(trending)}</p> */}
        <ul>{listItems}</ul>
        </div>
        </div>
        </>
        )
}

export default Trending