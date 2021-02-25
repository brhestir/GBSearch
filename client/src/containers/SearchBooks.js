import React from 'react';
import ListView from "../components/ListView/ListView";

const SearchBooks = (props) => {

		
	return (
		<div>
			<h1 className="text-center m-3">Search Results</h1>
			<ListView listArray={props.bookArray.items} />
		</div>
	);
};

export default SearchBooks;