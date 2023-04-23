import React from "react";
import { useState } from "react";
import Dashboard2 from "./Dashboard2";
import { Link } from "react-router-dom";

export default function Lumpsum() {
  const [lump, setLump] = useState(50000);
  const [year, setYear] = useState(10);
  const [percent, setPercent] = useState(12);
  const [dash, setDash] = useState(
    <Dashboard2 lump={lump} year={year} percent={percent} />
  );

  const handleClick = () => {
    setDash(<Dashboard2 lump={lump} year={year} percent={percent} />);
  };

  const handleLumpChange = (event) => {
    setLump(event.currentTarget.value);
  };
  const handleYearChange = (event) => {
    setYear(event.currentTarget.value);
  };
  const handlePercentChange = (event) => {
    setPercent(event.currentTarget.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="my-3">
            <label htmlFor="investAmt" className="form-label">
              Lumpsum Investment
            </label>
            <input type="number" className="form-control" id="investAmt" min="0" max="2000000" step="1000" value={lump} onChange={handleLumpChange}/>
            <input
              type="range"
              className="form-range my-2"
              id="investAmt"
              min="0"
              max="2000000"
              step="5000"
              value={lump}
              onChange={handleLumpChange}
            ></input>
            <div id="lumpHelp" className="form-text">
              Enter your Lumpsum Investment
            </div>
          </div>

          <div className="my-3">
            <label htmlFor="years" className="form-label">
              Years
            </label>
            <input
              type="number"
              className="form-control"
              id="years"
              min="1"
              max="50"
              step="1"
              value={year}
              onChange={handleYearChange}
            />
            <input
              type="range"
              className="form-range my-2"
              id="years"
              min="1"
              max="50"
              step="1"
              value={year}
              onChange={handleYearChange}
            ></input>
            <div id="lumpHelp" className="form-text">
              Enter the number of years
            </div>
          </div>

          <div className="my-3">
            <label htmlFor="rPercent" className="form-label">
              Return rate(p.a) in %
            </label>
            <input
              type="number"
              className="form-control"
              id="rPercent"
              min="0"
              max="100"
              step="0.1"
              value={percent}
              onChange={handlePercentChange}
            />
            <input
              type="range"
              className="form-range my-2"
              id="rPercent"
              min="0"
              max="50"
              step="0.1"
              value={percent}
              style={{ color: "rgb(20,150,0)" }}
              onChange={handlePercentChange}
            ></input>
            <div id="lumpHelp" className="form-text">
              Enter the expected annual return as %
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <div style={{ paddingLeft: "10%", paddingTop: "10%" }}>{dash}</div>

          <div style={{ paddingLeft: "30%", paddingTop: "10%" }}>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <Link to="/">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="btnradio1"
                  style={{ borderRadius: "10%" }}
                >
                  SIP
                </label>
              </Link>

              <Link to="/lumpsum">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  defaultChecked
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="btnradio2"
                  style={{ borderRadius: "10%" }}
                >
                  Lumpsum
                </label>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleClick}>
        Calculate
      </button>
    </div>
  );
}
