import React from "react";

import { Link } from "react-router-dom";

const Tag = props => {
  const style = {
    backgroundColor: props.bck,
    color: props.color,
    fontSize: props.size,
    padding: "5px 10px",
    display: "inline-block",
    fontFamily: "Righteous",
    ...props.add
  };
  const template = <div style={style}>{props.children}</div>;
  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};

const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export { Tag, firebaseLooper };
