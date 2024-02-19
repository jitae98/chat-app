import React from "react";
import PropTypes from "prop-types";
import "../PeopleGroupsMessages/MessageInput.css";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = React.useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => onSendMessage(message)}>Send</button>
    </div>
  );
};

MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
