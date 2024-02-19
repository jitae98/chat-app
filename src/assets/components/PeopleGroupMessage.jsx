import React from "react";
import PropTypes from "prop-types";
import "./components/PeopleGroupMessage.css";

const PeopleGroupMessage = ({ message, isActive }) => {
  return (
    <div className={`PeopleGroupMessage ${isActive ? "active" : ""}`}>
      <div className="PeopleGroupMessage-content">
        <div className="PeopleGroupMessage-text">{message.text}</div>
        <div className="PeopleGroupMessage-time">{message.time}</div>
      </div>
    </div>
  );
};

PeopleGroupMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default PeopleGroupMessage;
