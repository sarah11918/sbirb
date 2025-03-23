import React from "react";
import { useState, useContext } from "react";
import NotableBirdList from "./NotableBirdList.jsx";
import LocationContext from './LocationContext.jsx';

export default function Notable() {
  const context = useContext(LocationContext);
  const [notableBirds, setNotableBirds] = useState([]);
  const [location, setLocation] = useState("");

  function changeLocationToDefaultLocation() {
    setLocation(context.defaultLocation);
    getLocationSightings(context.defaultLocation);
  }

  function changeLocationToToronto() {
    setLocation("CA-ON-TO");
    getLocationSightings("CA-ON-TO");
  }

  function changeLocationToPEI() {
    setNotableBirds([]);
    setLocation("CA-PE");
    getLocationSightings("CA-PE");
  }

  function changeLocationToMontreal() {
    setNotableBirds([]);
    setLocation("CA-QC-MR");
    getLocationSightings("CA-QC-MR");
  }

  function changeLocationToStockholm() {
    setNotableBirds([]);
    setLocation("SE-AB");
    getLocationSightings("SE-AB");
  }

  function changeLocationToReykjavik() {
    setNotableBirds([]);
    setLocation("IS-1");
    getLocationSightings("IS-1");
  }

  function changeLocationToMunich() {
    setNotableBirds([]);
    setLocation("DE-BY");
    getLocationSightings("DE-BY");
  }

  function changeLocationToBerlin() {
    setNotableBirds([]);
    setLocation("DE-BE");
    getLocationSightings("DE-BE");
  }

  function changeLocationToVienna() {
    setNotableBirds([]);
    setLocation("AT-9");
    getLocationSightings("AT-9");
  }

  function changeLocationToPrague() {
    setNotableBirds([]);
    setLocation("CZ-PL");
    getLocationSightings("CZ-PL");
  }

  function changeLocationToBratislava() {
    setNotableBirds([]);
    setLocation("SK-BL");
    getLocationSightings("SK-BL");
  }

  function changeLocationToRiga() {
    setNotableBirds([]);
    setLocation("LV-RIX");
    getLocationSightings("LV-RIX");
  }

  function changeLocationToVilnius() {
    setNotableBirds([]);
    setLocation("LT-VL");
    getLocationSightings("LT-VL");
  }

  function changeLocationToTallinn() {
    setNotableBirds([]);
    setLocation("EE-37");
    getLocationSightings("EE-37");
  }

  async function getLocationSightings(myLocation) {
    setNotableBirds([]);
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", `2ifbkhv7g8ct`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(
      `https://api.ebird.org/v2/data/obs/${myLocation}/recent/notable?detail=full&back=30`,
      requestOptions
    );
    const data = await response.json();
    setNotableBirds(data);
  }

  function changeLocation(event) {
    event.preventDefault();
    setNotableBirds([]);
    setLocation(event.target.elements.location.value.toUpperCase());
    getLocationSightings(event.target.elements.location.value.toUpperCase());
  }
  return (
    <div style={{ backgroundColor: "#eef9ed", padding:"0.5em", border: "1px solid green", borderRadius: "2px"}}>
      <h3>See recent reports of Rare or Unusual birds!</h3>
      <p>The birds below were observed in <span className="bold">unusual locations</span> or at <span className="bold">unexpected times</span> of the year.</p>
      <p>Unusual observations are "pending" until eBird manually reviews and confirms them.</p>
      <p>Birders are not notified when their observations are confirmed, <a href="/about/">which is why I built this site!</a></p>
     
      <button
        style = {{backgroundColor: "yellow"}}
          className="location-change quickLocation"
          onClick={changeLocationToDefaultLocation}
        >
          <span style={{fontWeight: "bold"}}>See observations in your default location: {context.defaultLocation}</span>
        </button>
      <div stlye={{ display: "flex" }}>
        <p>... or select a city to display observations:</p>
        
        <button
          className="location-change quickLocation"
          onClick={changeLocationToToronto}
        >
          Toronto
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToPEI}
        >
          PEI
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToMontreal}
        >
          Montreal
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToStockholm}
        >
          Stockholm
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToReykjavik}
        >
          Reykjavik
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToVienna}
        >
          Vienna
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToMunich}
        >
          Munich
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToBerlin}
        >
          Berlin
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToPrague}
        >
          Prague
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToBratislava}
        >
          Bratislava
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToRiga}
        >
          Riga
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToVilnius}
        >
          Vilnius
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToTallinn}
        >
          Tallinn
        </button>
      </div>
      <p>... or enter an eBird region manually:</p>
      <form onSubmit={changeLocation}>
        <input
          name="location"
          type="text"
          placeholder="eBird region ID eg. CA-PE-PR"
        
        />
        <button>Submit Location</button>
      </form>
      <h4 className="birdtab">Showing birds reported in: {location}</h4>
      <div className="image-container">
      <img src="https://lh3.googleusercontent.com/pw/AM-JKLXBCCGGYuLTL_j0cc_iOTzfwB6DGwY3unGiZy39RXWI-rn1kHMAYAPfzE2IoQaD-2yhzLrYyPCb8tbS_i9lsSjfheOJMU8Wj5Ev6RjVt3IZLol1tzNHaSLObFx2vOUW6zDAMhTXPyroEtASiAUynEr6UA=w566-h92-no?.jpg" alt=""/>
      </div>
      <NotableBirdList birdList={notableBirds} />
  
      
    </div>
  );
}