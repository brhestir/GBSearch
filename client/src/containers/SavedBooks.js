import React from 'react';
import ListView from "../components/ListView/ListView";

const SavedBooks = (props) => {
	return (
		<div>
			<h1 className="text-center m-3">Saved Books</h1>
			<p className="m-3">Books which have been saved by you and/or others will appear here.</p>
			<ListView listArray={props.savedBookArray} />
		</div>
	);
};

export default SavedBooks;