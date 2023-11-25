import React from "react";

function Tile(props){
    return <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.icon}
      </span>
      <span>{props.title}</span>
    </dt>
    <dd>
      {props.desc}
    </dd>
  </div>
}

export default Tile;