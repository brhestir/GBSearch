import React from "react";
import ListViewElement from "../ListViewElement/ListViewElement";

const ListView = ({ listArray }) => {
  const authorArrayReducer = (acc, cV) => acc + ", " + cV; // To credit all authors

  return (
    <>
      <div className="container">
        <ul className="list-group">
          {listArray.map((curEl, index) => {
            return (
              <ListViewElement
                title={curEl.volumeInfo.title}
                authors={
                  curEl.volumeInfo.authors?.length === 1
                    ? curEl.volumeInfo.authors[0]
                    : curEl.volumeInfo.authors?.reduce(authorArrayReducer)
                }
                description={curEl.volumeInfo.description}
                thumbnailURL={curEl.volumeInfo.imageLinks?.thumbnail}
                infoURL={curEl.volumeInfo.infoLink}
                GBID={curEl.id}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListView;
