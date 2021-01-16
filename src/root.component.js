import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/app1" className="link">
          Micro frontend app 1
        </Link>
        <Link to="/app2" className="link">
          Micro frontend app 2
        </Link>
      </nav>
    </BrowserRouter>
  );
}
