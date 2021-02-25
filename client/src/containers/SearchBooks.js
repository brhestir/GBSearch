import React, { useState } from 'react';
import ListView from "../components/ListView/ListView";

const SearchBooks = (props) => {

		
	return (
		<div>
			<h1>GBSearch Results:</h1>
			<ListView listArray={props.bookArray.items} />
		</div>
	);
};

export default SearchBooks;