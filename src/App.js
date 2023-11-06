import React, { useState } from "react";

// components
import Notes from "./components/WriteNotes/Notes";
import NotesGroup from "./components/NotesGroup/NotesGroup";
import CreateGroupCard from "./components/CreateGroupCard/CreateGroupCard";

// styles
import "./App.css";

function App() {
  const [createCardSelected, setCreateCardSelected] = useState(false);
  const [allGroups, setAllgroups] = useState([]);

  const onSelectCard = () => {
    setCreateCardSelected(true);
  };

  const addGroupCred = (groupInfo) => {
    setAllgroups((prevVal) => {
      return [...prevVal, groupInfo];
    });
    setCreateCardSelected(false);
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <NotesGroup onSelectCard={onSelectCard} allGroups={allGroups} />
      </div>
      <div className="right-container">
        <Notes />
      </div>
      {createCardSelected && <CreateGroupCard addGroupCred={addGroupCred} />}
    </div>
  );
}

export default App;
