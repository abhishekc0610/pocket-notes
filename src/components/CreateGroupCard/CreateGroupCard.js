import React, { useState } from "react";

//styles
import "./CreateGroupCard.css";

function CreateGroupCard({ addGroupCred }) {
  const [groupInfo, setGroupInfo] = useState({
    name: "",
    color: "",
  });

  const handleClick = () => {
    addGroupCred(groupInfo);
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setGroupInfo((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  return (
    <div className="create-card-container-main">
      <div className="create-card-container-middle">
        <h1>Create New Notes group</h1>
        <div className="fill-group-info">
          <div className="group-name-input">
            <label>Group Name</label>
            <input
              type="text"
              placeholder="Enter your group name...."
              name="name"
              value={groupInfo.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="group-name-color">
            <label htmlFor="">Choose colour</label>
            <div className="all-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="#B38BFA"
                  onClick={() => {
                    setGroupInfo((prevVal) => {
                      return { ...prevVal, color: "#B38BFA" };
                    });
                  }}
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="#FF79F2"
                  onClick={() => {
                    setGroupInfo((prevVal) => {
                      return { ...prevVal, color: "#FF79F2" };
                    });
                  }}
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="#43E6FC"
                  onClick={() => {
                    setGroupInfo((prevVal) => {
                      return { ...prevVal, color: "#43E6FC" };
                    });
                  }}
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="#F19576"
                  onClick={() => {
                    setGroupInfo((prevVal) => {
                      return { ...prevVal, color: "#F19576" };
                    });
                  }}
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="#0047FF"
                  onClick={() => {
                    setGroupInfo((prevVal) => {
                      return { ...prevVal, color: "#0047FF" };
                    });
                  }}
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="#6691FF"
                  onClick={() => {
                    setGroupInfo((prevVal) => {
                      return { ...prevVal, color: "#6691FF" };
                    });
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
        <button className="create-card-btn" onClick={handleClick}>
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateGroupCard;
