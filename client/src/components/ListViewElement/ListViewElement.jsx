import React from "react";

const ListViewElement = (props) => {
  return (
    <>
      <li className="list-group-item">
        <p>
          <strong>Title: </strong>
          <a href={props.infoURL}>{props.title}</a>
        </p>
        <p>
          <strong>Authors: </strong>
          {props.authors}
        </p>
        <p>
          <strong>Description: </strong>
          {props.description}
        </p>
        <p>
          <strong>Thumbnail: </strong>
          <img src={props.thumbnailURL} alt="Book thumbnail" />
        </p>
      </li>
    </>
  );
};

export default ListViewElement;
