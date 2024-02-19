import React from "react";
import PropTypes from "prop-types";
import Message from "../components/Message";
import "../PeopleGroupsMessages/MessageList.css";

const MessageList = ({ messages, onMessageClick }) => {
  return (
    <div className="message-list">
      <div className="message-list-header">
        <h3>Sharuka Nijibum</h3>
      </div>
      <div className="message-list-container">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isActive={message.id === 1}
            onClick={() => onMessageClick(message)}
          />
        ))}
      </div>
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isMine: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onMessageClick: PropTypes.func.isRequired,
};

export default MessageList;
