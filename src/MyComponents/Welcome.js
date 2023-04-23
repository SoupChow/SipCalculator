import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div class="body1">
      <div class="content">
        <h1>Welcome</h1>
        <Link to="/sip" class="btn btn-success" id="buttonNext">
          Register
        </Link>
      </div>
    </div>
  );
}
