import React from "react";
import { useState, useContext } from "react";
import LocationContext from './LocationContext.jsx';

export default function Recent() {
  const context = useContext(LocationContext);
  const [recentBirds, setRecentBirds] = useState([]);
  const [location, setLocation] = useState("");

  

  async function getBirdSightings(event) {
    event.preventDefault();
    setLocation(event.target.elements.location.value.toUpperCase())
    const queryLocation = event.target.elements.location.value.toUpperCase()
    const recentUrl = `https://api.ebird.org/v2/data/obs/${queryLocation}/recent?back=14`
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", `2ifbkhv7g8ct`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    const response = await fetch(
      recentUrl,
      requestOptions
    );
    const data = await response.json();
    setRecentBirds(data);
  }

  async function changeLocationToDefaultLocation() {
    setLocation(context.defaultLocation);
    const queryLocation = context.defaultLocation
    const recentUrl = `https://api.ebird.org/v2/data/obs/${queryLocation}/recent?back=30`
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", `2ifbkhv7g8ct`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    const response = await fetch(
      recentUrl,
      requestOptions
    );
    const data = await response.json();
    setRecentBirds(data);
  }
  

  return (
      <div style={{ backgroundColor: "#eef9ed", padding:"0.5em", border: "1px solid green", borderRadius: "2px"}}>
      <h3>When was each bird species last seen in your area?</h3>
      <p>I use this as a "gut check" when I think I've seen a certain bird that seems unusual for this time of year. If someone else has recently reported seeing that bird, then you know someone else saw it, too!</p>
      
      
      <div style={{textAlign:"center"}}>
        <button
          style = {{backgroundColor: "yellow"}}
            className="location-change quickLocation"
            onClick={changeLocationToDefaultLocation}
          >
            <span style={{fontWeight: "bold"}}>Use my Default Location: {context.defaultLocation}</span>
          </button>
        <p>or enter a different eBird region ID code</p>
        <form onSubmit={getBirdSightings}>
          <input
            name="location"
            type="text"
            placeholder="eBird region ID"
            style={{ textTransform: "uppercase" }}
          />
          <button> See the birds!</button>
        </form>
        <h4 className="birdtab">Showing birds reported in: {location} </h4>
        </div>
     
      <h3>Reported in the last 30 days...</h3>
      {recentBirds.map((bird) => (
        <p>{bird.comName} on {bird.obsDt.toString().slice(5,10)}</p>
      ))}
    </div>
  );
}