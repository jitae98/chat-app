import React from "react";
import PropTypes from "prop-types";
import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import avatar4 from "../assets/images/avatar4.jpg";
import avatar5 from "../assets/images/avatar5.jpg";
import avatar6 from "../assets/images/avatar6.jpg";
import avatar7 from "../assets/images/avatar7.jpg";
import avatar8 from "../assets/images/avatar8.jpg";
import avatar9 from "../assets/images/avatar9.jpg";
import "./Message.css";

const Message = ({ message, isActive, onClick }) => {
  const { name, text } = message;

  const avatar = `avatar${message.avatar}`;
  const avatarImage = {
    1: avatar1,
    2: avatar2,
    3: avatar3,
    4: avatar4,
    5: avatar5,
    6: avatar6,
    7: avatar7,
    8: avatar8,
    9: avatar9,
  }[avatar];

  return (
    <div
      className={`Message ${isActive ? "active" : ""}`}
      onClick={() => onClick(message)}
    >
      <div className="Message-avatar">
        <img src={avatarImage} alt={name} />
      </div>
      <div className="Message-content">
        <div className="Message-name">{name}</div>
        <div className="Message-text">{text}</div>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Message;
