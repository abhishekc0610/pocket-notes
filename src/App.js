import React, { useState } from "react";

// components
import Notes from "./components/WriteNotes/Notes";
import NotesGroup from "./components/NotesGroup/NotesGroup";
import CreateGroupCard from "./components/CreateGroupCard/CreateGroupCard";

// styles
import "./App.css";

function App() {
  const [createCardSelected, setCreateCardSelected] = useState(false);
  const [allGroups, setAllgroups] = useState({});
  const [groupSelected, setGroupSelected] = useState(null);

  const onSelectCard = () => {
    setCreateCardSelected(true);
  };

  const addGroupCred = (groupInfo) => {
    const newObj = {
      name: groupInfo.name,
      color: groupInfo.color,
      content: [],
    };

    setAllgroups((prevVal) => {
      return {
        ...prevVal,
        [groupInfo.name]: newObj,
      };
    });

    setGroupSelected(groupInfo.name);
    setCreateCardSelected(false);
    // console.log(allGroups);
  };

  const addNoteToGroup = (newNote) => {
    const newObj = {
      name: allGroups[groupSelected].name,
      color: allGroups[groupSelected].color,
      content: newNote,
    };
    setAllgroups((prevVal) => {
      return {
        ...prevVal,
        [groupSelected]: newObj,
      };
    });
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <NotesGroup
          onSelectCard={onSelectCard}
          allGroups={allGroups}
          setGroupSelected={setGroupSelected}
        />
      </div>
      <div className="right-container">
        <Notes
          allGroups={allGroups}
          addNoteToGroup={addNoteToGroup}
          groupSelected={groupSelected}
        />
      </div>
      {createCardSelected && <CreateGroupCard addGroupCred={addGroupCred} />}
    </div>
  );
}

export default App;
