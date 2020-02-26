import React, { useState } from "react";
import data from "./comment_data.json"
import "./App.css";
import Comments from "./Comments"


function App() {

  const [bellClick, setBellClick] = useState(false)

  return (
    <div className="App">

      {/* Top row with "back" button */}
      <div className="nav">
        <h4>Changes Saved Automatically</h4>
        <button className="button back">Go Back</button>
      </div>

      {/* Toolbar row with "notification bell" */}
      <div className="toolbar">
        <button className="button">
          <svg className="bi bi-download" width="1.4em" height="1.4em" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.5 10a.5.5 0 01.5.5V14a1 1 0 001 1h12a1 1 0 001-1v-3.5a.5.5 0 011 0V14a2 2 0 01-2 2H4a2 2 0 01-2-2v-3.5a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M7 9.5a.5.5 0 01.707 0L10 11.793 12.293 9.5a.5.5 0 01.707.707l-2.646 2.647a.5.5 0 01-.708 0L7 10.207A.5.5 0 017 9.5z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M10 3a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 0110 3z" clipRule="evenodd"></path>
          </svg>
          <h2>
            Download File
          </h2>
        </button>
        <button className="button">
          <svg className="bi bi-envelope-fill" width="1.4em" height="1.4em" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.05 5.555L10 10.414l7.95-4.859A2 2 0 0016 4H4a2 2 0 00-1.95 1.555zM18 6.697l-5.875 3.59L18 13.743V6.697zm-.168 8.108l-6.675-3.926-1.157.707-1.157-.707-6.675 3.926A2 2 0 004 16h12a2 2 0 001.832-1.195zM2 13.743l5.875-3.456L2 6.697v7.046z"></path>
          </svg>
          <h2>
            Share Proof
          </h2>
        </button>
        <div className="zoom-buttons">
          <button>
            <svg className="bi bi-dash" width="2em" height="2em" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
              <path fillRule="evenodd" d="M5.5 10a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className="zoom-status">
            <h2>
              150%
          </h2>
          </div>
          <button>
            <svg className="bi bi-plus" width="2em" height="2em" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
              <path fillRule="evenodd" d="M10 5.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6a.5.5 0 010-1h3.5V6a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
              <path fillRule="evenodd" d="M9.5 10a.5.5 0 01.5-.5h4a.5.5 0 010 1h-3.5V14a.5.5 0 01-1 0v-4z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        {/* The notifications "drop-down" bubble */}
        <button className="button bell" onClick={() => setBellClick(!bellClick)}>
          <svg className="bi bi-bell-fill" width="1.4em" height="1.4em" viewBox="0 0 20 20" fill="white">
            <path d="M10 18a2 2 0 002-2H8a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 005 8c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path>
          </svg>
        </button>
        <div className="notifications">
          {bellClick && <div className="comments-block">
            {data.map((data) =>
              <Comments key={data.id} {...data} />
            )}
          </div>}
        </div>
      </div>

      {/* Where the body-content of the app would be */}
      <div className="content">
        <p>
          Realhub React App
          </p>
      </div>
    </div>
  );
}

export default App;