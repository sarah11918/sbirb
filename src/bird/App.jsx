import React from 'react';
import {useState, useContext} from 'react';
import LocationContext from './LocationContext.jsx';
import Regions from './Regions.jsx';
import Notable from './Notable.jsx';
import Recent from './Recent.jsx';
import RegionDate from './RegionDate.jsx'

const App = () => {
  //This is the global state- captures the default location -Canada Prince-Edward Island-Prince County
  const [defaultLocation, setDefaultLocation] = useState("CA-PE-PR");

  function changeDefaultLocation(event) {
    event.preventDefault();
    setDefaultLocation(event.target.elements.defaultLocation.value.toUpperCase());
  }

  const onClick2recent = () => {
    window.location.href = "#recent";
  };

  const onClick2unusual = () => {
    window.location.href = "#unusual";
  };

  const onClick2region = () => {
    window.location.href = "#region";
  };

  return(
    <div>
    <LocationContext.Provider value={{ defaultLocation: defaultLocation, setDefaultLocation: setDefaultLocation}}>
    <h1>Welcome to my bird app!</h1>
    <p>These are some tools I built using the <a href="https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest">eBird API</a> to enrich my own birding experience.</p>
    <p>Enter any valid eBird region code to set a default location for observations.</p>
  
    
    
{/* 
    <button style={{backgroundColor: '#eef9ed'}} onClick={onClick2unusual}>See rare or unusual bird observations</button> <button style={{backgroundColor: '#eef9ed'}} onClick={onClick2recent}>See all birds recently observed in an area</button> <button style={{backgroundColor: '#eef9ed'}} onClick={onClick2region}>Find eBird Region codes</button>
*/}


    <div style={{fontSize: "0.75em", paddingBottom: "0.25em"}}>
    
    <form style={{paddingBottom:"2em"}} onSubmit={changeDefaultLocation}>
        <input
          name="defaultLocation"
          type="text"
          placeholder="eBird region eg. CA-PE-PR"
        />
        <button>Update my default region! (currently: {defaultLocation})</button>
        <p>🔎 <a href="#region">Find your own eBird Region code</a> 🔍 to use these tools for your area!</p>
      </form>
    </div>

    <h2>Birding Tools</h2>
      <ul className="tools">
        <li className="tools">🤨🦤🦚🐧 <a href="#unusual">See rare or unusual bird observations</a></li>
        <li className="tools">🐦🦆🪿🦅<a href="#recent">See all birds recently observed in an area</a></li>
      </ul>
 
    <h2 id="unusual"><a href="#unusual">🦤</a> Rare or Notable Birds</h2>
    <Notable defaultLocation={defaultLocation}/>

    <h2 id="recent"><a href="#recent">🐦</a> Recent Birds</h2>
    <Recent defaultLocation={defaultLocation}/>

    <h2 id="region"><a href="#region">🔎</a> Find an eBird region ID code</h2>
    <Regions />
 
    <details>
    <summary style={{fontStyle: "italic"}}>What is an eBird region?</summary>
    <div>
    <p>You can explore eBird data for an entire country, or for a smaller region like a state or province... sometimes, for a specific county or city.</p>
    <p>For example, you can search bird data in all of Canada (CA), in the entire province of Ontario (CA-ON), or just in the city of Toronto (CA-ON-TO).</p> 
    <p>The United States, Canada, and Great Britain (GB) are examples of areas where bird data is recorded by top level location, region and sub-region. Many countries, however, do not break down their regions into sub-regions. For example, Sweden's top-level country location code is SE, and Stockholm's location code is SE-AB, and there are no smaller sub-regions classified by eBird.</p>
    </div>
    </details>


    {/* <RegionDate defaultLocation={defaultLocation}/> */}
    </LocationContext.Provider>
  </div>
  )
};

export default App