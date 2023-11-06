import React from "react";

//styles
import "./NotesGroup.css";

function NotesGroup({ onSelectCard, allGroups }) {
  return (
    <div className="group-main">
      <h1>Pocket Notes</h1>

      <div className="groups">
        <div className="btn">
          <button onClick={() => onSelectCard()}>
            <span>+</span> Create Notes Group
          </button>
        </div>

        <div className="groups-acc-container">
          {allGroups.map((item) => {
            const x = item.name.split(" ").join("");
            const initials = (x[0] + x[1]).toUpperCase();
            return (
              <div className="group-acc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 69 69"
                  fill="none"
                >
                  <circle
                    cx="34.4503"
                    cy="34.4503"
                    r="34.5"
                    fill={item.color}
                  />
                  <text
                    fontSize="1.5rem"
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    stroke="#fff"
                    fill="#fff"
                    dy=".3em"
                  >
                    {initials}
                  </text>
                </svg>
                <div className="group-acc-title">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NotesGroup;
