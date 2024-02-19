import React, { useState } from "react";
import "./App.css";
import GroupList from "./components/PeopleGroupMessages/GroupList";
import MessageList from "./components/PeopleGroupMessages/MessageList";
import MessageInput from "./components/PeopleGroupMessages/MessageInput";
import Person from "./components/PeopleGroupMessages/Person";

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setSelectedPerson(null);
  };

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="App">
      {" "}
      <GroupList groups={groups} onGroupClick={handleGroupClick} />{" "}
      <div className="people-group-messages-container">
        {" "}
        {selectedGroup && (
          <>
            {" "}
            <MessageList
              messages={messages.filter(
                (message) => message.groupId === selectedGroup.id
              )}
              onMessageClick={() => {}}
            />{" "}
            <MessageInput onSendMessage={() => {}} />{" "}
          </>
        )}{" "}
        {selectedPerson && (
          <div className="person-container">
            {" "}
            <Person
              person={selectedPerson}
              onPersonClick={() => {}}
              onSendMessage={() => {}}
            />{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
}
export default App;
