import React from "react";
import axios from "axios";

const ListViewElement = (props) => {
  const btnClickHandler = (e, id) => {
    console.log(props.GBID);
    axios
      .post("/api/books", {
        id: props.GBID,
        volumeInfo: {
          title: props.title,
          authors: props.authors,
          description: props.description,
          thumbnail: props.thumbnail,
          infoURL: props.infoURL,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <p>
          <strong>ID: </strong>
          {props.GBID}
        </p>
        <button className="btn btn-primary" onClick={btnClickHandler}>
          Save Book
        </button>
      </li>
    </>
  );
};

export default ListViewElement;
