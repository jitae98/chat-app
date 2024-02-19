import React from "react";
import PropTypes from "prop-types";
import "./Person.css";

const Person = ({ person, isActive, onClick }) => {
  const { name, avatar } = person;

  return (
    <div
      className={`Person ${isActive ? "active" : ""}`}
      onClick={() => onClick(person)}
    >
      <div className="Person-avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="Person-info">
        <div className="Person-name">{name}</div>
        <div className="Person-status">{person.status}</div>
      </div>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Person;
