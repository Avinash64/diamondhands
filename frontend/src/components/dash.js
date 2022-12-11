import React, {useState, useEffect} from "react";
import Axios from "axios"
import "./dash.css"
import { useNavigate } from "react-router-dom";
const fetch = require("cross-fetch")



const Dash = () => {
    const [trending, setTrending] = useState("")
    const [loaded, setLoaded] = useState("")
    let url = 'https://api.coingecko.com/api/v3/search/trending';

let options = {method: 'GET'};

if(trending == ""){
fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    console.log("bruh")
    setTrending(json)
})}
let listItems =""
if(trending.coins){
    listItems = trending.coins.map((number) =>  <li>{JSON.stringify(number)}</li>);}
    return (
        <>
        <h1>Dashboard</h1>
        {/* <p>{JSON.stringify(trending)}</p> */}
        <ul>{listItems}</ul>
        </>
        )
}

export default Dash