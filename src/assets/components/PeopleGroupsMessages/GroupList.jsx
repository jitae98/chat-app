import React from "react";
import PropTypes from "prop-types";
import Group from "./Group";
import "../PeopleGroupsMessages/GroupList.css";

const GroupList = ({ groups, onGroupClick }) => {
  return (
    <div className="group-list">
      <div className="group-list-header">
        <h3>Groups</h3>
      </div>
      <div className="group-list-container">
        {groups.map((group) => (
          <Group
            key={group.id}
            group={group}
            isActive={group.id === 1}
            onClick={() => onGroupClick(group)}
          />
        ))}
      </div>
    </div>
  );
};

GroupList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
  onGroupClick: PropTypes.func.isRequired,
};

export default GroupList;
