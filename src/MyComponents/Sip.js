import React from "react";
import { useState } from "react";
import Dashboard from "./Dashboard";
import {Link} from 'react-router-dom'


export default function Sip() {
  const [sip, setSip] = useState(500);
  const [year, setYear] = useState(5);
  const [percent, setPercent] = useState(12);
  const [dash, setDash] = useState(< Dashboard sip={sip} year={year} percent={percent} />);

  const handleClick = () => {
    setDash(< Dashboard sip={sip} year={year} percent={percent}/>);
  }
  
  const handleSipChange = (event) => {
    setSip(event.currentTarget.value);
  }
  const handleYearChange = (event) => {
    setYear(event.currentTarget.value);
    
  }
  const handlePercentChange = (event) => {
    setPercent(event.currentTarget.value);
  }
  return (
    <div className="container">
      
        <div className="row">
          <div className="col-lg-6 col-sm-12">
          
            <div className="my-3">
          <label htmlFor="investAmt" className="form-label">
            Monthly Investment
          </label>
          <input type="number" className="form-control" id="investAmt" min="0" max="50000" step="100" value={ sip } onChange={handleSipChange} />
          <input type="range" className="form-range my-2" id="investAmt" min="0" max="50000" step="100" value={sip} onChange={handleSipChange}></input>
          <div id="sipHelp" className="form-text">Enter your monthly investment in SIP</div>
        </div>

        <div className="my-3">
          <label htmlFor="years" className="form-label">
            Years
          </label>
          <input type="number" className="form-control" id="years" min="1" max="50" step="1" value={year} onChange ={handleYearChange} />
          <input type="range" className="form-range my-2" id="years" min="1" max="50" step="1" value={year} onChange={handleYearChange}></input>
          <div id="sipHelp" className="form-text">Enter your monthly investment in SIP</div>
        </div>
        
        <div className="my-3">
          <label htmlFor="rPercent" className="form-label">
            Return rate(p.a) in % 
          </label>
          <input type="number" className="form-control" id="rPercent" min="0" max="100" step="0.1" value={percent} onChange={handlePercentChange} />
          <input type="range" className="form-range my-2" id="rPercent" min="0" max="50" step="0.1" value={percent} style={{color:"rgb(20,150,0)"}} onChange={handlePercentChange}></input>
          <div id="sipHelp" className="form-text">Enter the expected annual return as %</div>
        </div>
          </div>

        <div className="col-lg-6 col-sm-12">
        <div style={{ paddingLeft: "10%", paddingTop: "10%" }}>{dash}</div>
        
          <div style={{ paddingLeft: "30%", paddingTop: "10%" }}>
            
            
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <Link to='/'><input type="radio" class="btn-check" name="btnradio" id="btnradio1" defaultChecked/>
  <label class="btn btn-outline-primary" for="btnradio1" style={{borderRadius:"10%"}}>SIP</label></Link>

              <Link to='/lumpsum'><input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
  <label class="btn btn-outline-primary" for="btnradio2" style={{borderRadius:"10%"}}>Lumpsum</label></Link>

  
</div>
            
          
          
          </div>
        </div>
        </div>
    <button className="btn btn-primary" onClick={handleClick}>Calculate</button>
    
    </div>
  );
}