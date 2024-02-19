import React from "react";
import PropTypes from "prop-types";
import Person from "./Person";
import "../PeopleGroupsMessages/PeopleList.css";

const PeopleList = ({ people, onPersonClick }) => {
  return (
    <div className="people-list">
      <div className="people-list-header">
        <h3>People</h3>
      </div>
      <div className="people-list-container">
        {people.map((person) => (
          <Person
            key={person.id}
            person={person}
            isActive={person.id === 1}
            onClick={() => onPersonClick(person)}
          />
        ))}
      </div>
    </div>
  );
};

PeopleList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
  onPersonClick: PropTypes.func.isRequired,
};

export default PeopleList;
