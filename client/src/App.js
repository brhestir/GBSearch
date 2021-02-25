import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import SearchBooks from "./containers/SearchBooks";
import SavedBooks from "./containers/SavedBooks";
import NavbarSearch from "./components/NavbarSearch/NavbarSearch";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	const [savedBookState, setSavedBookState] = useState([{
		id: "_aedfs1234567890",
		volumeInfo: {
			title: "Saving and loading data with ease",
			author: "Some Nice Person",
			description: "Much ado about nothing in particular",
			thumbnail: "null",
			infoURL: "null"
		},		
	}]);
	const [bookState, setBookState] = useState(
		{
			"kind": "books#volumes",
			"totalItems": 3637,
			"items": [
					{
							"kind": "books#volume",
							"id": "_kYBqLc5QoQC",
							"etag": "M5+JPGsagFo",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/_kYBqLc5QoQC",
							"volumeInfo": {
									"title": "What is Mathematics?",
									"subtitle": "An Elementary Approach to Ideas and Methods",
									"authors": [
											"Herbert Robbins Richard Courant (Ian Stewart)",
											"Richard Courant",
											"Courant Institute of Mathematical Sciences Richard Courant",
											"Herbert (Professor of Mathematics Robbins, Professor of Mathematics Rutgers University)",
											"Herbert Robbins",
											"Ian Stewart",
											"Professor of Mathematics Herbert Robbins"
									],
									"publisher": "Oxford University Press, USA",
									"publishedDate": "1996",
									"description": "A discussion of fundamental mathematical principles from algebra to elementary calculus designed to promote constructive mathematical reasoning.",
									"industryIdentifiers": [
											{
													"type": "ISBN_10",
													"identifier": "0195105192"
											},
											{
													"type": "ISBN_13",
													"identifier": "9780195105193"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"pageCount": 566,
									"printType": "BOOK",
									"categories": [
											"Mathematics"
									],
									"averageRating": 4,
									"ratingsCount": 28,
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "2.2.2.0.preview.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=_kYBqLc5QoQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=_kYBqLc5QoQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=_kYBqLc5QoQC&printsec=frontcover&dq=mathematics&hl=&cd=1&source=gbs_api",
									"infoLink": "http://books.google.com/books?id=_kYBqLc5QoQC&dq=mathematics&hl=&source=gbs_api",
									"canonicalVolumeLink": "https://books.google.com/books/about/What_is_Mathematics.html?hl=&id=_kYBqLc5QoQC"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "NOT_FOR_SALE",
									"isEbook": false
							},
							"accessInfo": {
									"country": "US",
									"viewability": "PARTIAL",
									"embeddable": true,
									"publicDomain": false,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false
									},
									"pdf": {
											"isAvailable": true,
											"acsTokenLink": "http://books.google.com/books/download/What_is_Mathematics-sample-pdf.acsm?id=_kYBqLc5QoQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
									},
									"webReaderLink": "http://play.google.com/books/reader?id=_kYBqLc5QoQC&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "SAMPLE",
									"quoteSharingAllowed": false
							},
							"searchInfo": {
									"textSnippet": "A discussion of fundamental mathematical principles from algebra to elementary calculus designed to promote constructive mathematical reasoning."
							}
					},
					{
							"kind": "books#volume",
							"id": "Rh-tRAHCIzEC",
							"etag": "HgP6BuuZh1w",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/Rh-tRAHCIzEC",
							"volumeInfo": {
									"title": "New Middle School mathematics",
									"publisher": "Allied Publishers",
									"industryIdentifiers": [
											{
													"type": "ISBN_13",
													"identifier": "9798177648965"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"printType": "BOOK",
									"averageRating": 4.5,
									"ratingsCount": 3,
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "0.1.2.0.preview.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=Rh-tRAHCIzEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=Rh-tRAHCIzEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=Rh-tRAHCIzEC&printsec=frontcover&dq=mathematics&hl=&cd=2&source=gbs_api",
									"infoLink": "http://books.google.com/books?id=Rh-tRAHCIzEC&dq=mathematics&hl=&source=gbs_api",
									"canonicalVolumeLink": "https://books.google.com/books/about/New_Middle_School_mathematics.html?hl=&id=Rh-tRAHCIzEC"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "NOT_FOR_SALE",
									"isEbook": false
							},
							"accessInfo": {
									"country": "US",
									"viewability": "PARTIAL",
									"embeddable": true,
									"publicDomain": false,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false
									},
									"pdf": {
											"isAvailable": false
									},
									"webReaderLink": "http://play.google.com/books/reader?id=Rh-tRAHCIzEC&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "SAMPLE",
									"quoteSharingAllowed": false
							}
					},
					{
							"kind": "books#volume",
							"id": "Qt8EAAAAYAAJ",
							"etag": "D3uNbZ50I04",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/Qt8EAAAAYAAJ",
							"volumeInfo": {
									"title": "Mathematics",
									"authors": [
											"Cassius Jackson Keyser"
									],
									"publishedDate": "1907",
									"industryIdentifiers": [
											{
													"type": "OTHER",
													"identifier": "HARVARD:32044091865873"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"pageCount": 44,
									"printType": "BOOK",
									"categories": [
											"Mathematics"
									],
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "0.2.2.0.full.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=Qt8EAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=Qt8EAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=Qt8EAAAAYAAJ&printsec=frontcover&dq=mathematics&hl=&cd=3&source=gbs_api",
									"infoLink": "https://play.google.com/store/books/details?id=Qt8EAAAAYAAJ&source=gbs_api",
									"canonicalVolumeLink": "https://play.google.com/store/books/details?id=Qt8EAAAAYAAJ"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "FREE",
									"isEbook": true,
									"buyLink": "https://play.google.com/store/books/details?id=Qt8EAAAAYAAJ&rdid=book-Qt8EAAAAYAAJ&rdot=1&source=gbs_api"
							},
							"accessInfo": {
									"country": "US",
									"viewability": "ALL_PAGES",
									"embeddable": true,
									"publicDomain": true,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false,
											"downloadLink": "http://books.google.com/books/download/Mathematics.epub?id=Qt8EAAAAYAAJ&hl=&output=epub&source=gbs_api"
									},
									"pdf": {
											"isAvailable": true,
											"downloadLink": "http://books.google.com/books/download/Mathematics.pdf?id=Qt8EAAAAYAAJ&hl=&output=pdf&sig=ACfU3U0aYAWwDVJvpX6J139KIaVSAT5ykw&source=gbs_api"
									},
									"webReaderLink": "http://play.google.com/books/reader?id=Qt8EAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "FULL_PUBLIC_DOMAIN",
									"quoteSharingAllowed": false
							}
					},
					{
							"kind": "books#volume",
							"id": "c6BHAQAAMAAJ",
							"etag": "lj2LbNp/I5Q",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/c6BHAQAAMAAJ",
							"volumeInfo": {
									"title": "Selected Bibliography of Current Articles in Mathematics Education",
									"authors": [
											"Kenneth E. Brown"
									],
									"publishedDate": "1952",
									"industryIdentifiers": [
											{
													"type": "OTHER",
													"identifier": "MINN:31951D035308074"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"pageCount": 6,
									"printType": "BOOK",
									"categories": [
											"Mathematics"
									],
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "0.1.2.0.full.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=c6BHAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=c6BHAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=c6BHAQAAMAAJ&pg=PP7&dq=mathematics&hl=&cd=4&source=gbs_api",
									"infoLink": "https://play.google.com/store/books/details?id=c6BHAQAAMAAJ&source=gbs_api",
									"canonicalVolumeLink": "https://play.google.com/store/books/details?id=c6BHAQAAMAAJ"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "FREE",
									"isEbook": true,
									"buyLink": "https://play.google.com/store/books/details?id=c6BHAQAAMAAJ&rdid=book-c6BHAQAAMAAJ&rdot=1&source=gbs_api"
							},
							"accessInfo": {
									"country": "US",
									"viewability": "ALL_PAGES",
									"embeddable": true,
									"publicDomain": true,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false,
											"downloadLink": "http://books.google.com/books/download/Selected_Bibliography_of_Current_Article.epub?id=c6BHAQAAMAAJ&hl=&output=epub&source=gbs_api"
									},
									"pdf": {
											"isAvailable": false
									},
									"webReaderLink": "http://play.google.com/books/reader?id=c6BHAQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "FULL_PUBLIC_DOMAIN",
									"quoteSharingAllowed": false
							},
							"searchInfo": {
									"textSnippet": "11 Five Decades of <b>Mathematical</b> Reform : Evaluation and Challenge . &quot; The <br>\n<b>Mathematics</b> Teacher . 43 : 377-387 , December 1950. ( Bibliography ) Breslich , <br>\nE. R. &quot; Curriculum Trends in High School <b>Mathematics</b> . &quot; The <b>Mathematics</b> <br>\nTeacher ."
							}
					},
					{
							"kind": "books#volume",
							"id": "h8KphwosTnsC",
							"etag": "OKYyY/WBLMs",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/h8KphwosTnsC",
							"volumeInfo": {
									"title": "Resource Guide for the Mathematics Preparation of Middle School Teachers",
									"subtitle": "Draft : Presented at the Show-Me Middle School Mathematics Teacher Preparation Conference, Branson, Missouri, May 19-21, 2000",
									"publishedDate": "2000",
									"industryIdentifiers": [
											{
													"type": "OTHER",
													"identifier": "UIUC:30112041261071"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"pageCount": 78,
									"printType": "BOOK",
									"categories": [
											"Government publications"
									],
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "0.1.3.0.full.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=h8KphwosTnsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=h8KphwosTnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=h8KphwosTnsC&pg=PA24&dq=mathematics&hl=&cd=5&source=gbs_api",
									"infoLink": "https://play.google.com/store/books/details?id=h8KphwosTnsC&source=gbs_api",
									"canonicalVolumeLink": "https://play.google.com/store/books/details?id=h8KphwosTnsC"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "FREE",
									"isEbook": true,
									"buyLink": "https://play.google.com/store/books/details?id=h8KphwosTnsC&rdid=book-h8KphwosTnsC&rdot=1&source=gbs_api"
							},
							"accessInfo": {
									"country": "US",
									"viewability": "ALL_PAGES",
									"embeddable": true,
									"publicDomain": true,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false,
											"downloadLink": "http://books.google.com/books/download/Resource_Guide_for_the_Mathematics_Prepa.epub?id=h8KphwosTnsC&hl=&output=epub&source=gbs_api"
									},
									"pdf": {
											"isAvailable": false
									},
									"webReaderLink": "http://play.google.com/books/reader?id=h8KphwosTnsC&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "FULL_PUBLIC_DOMAIN",
									"quoteSharingAllowed": false
							},
							"searchInfo": {
									"textSnippet": "Middle School <b>Mathematics</b> Endorsement Illinois State University Beginning in <br>\nthe early 1970s , the <b>Mathematics</b> Department of Illinois State University began <br>\noffering <b>mathematics</b> content and methods courses specifically tailored for&nbsp;..."
							}
					},
					{
							"kind": "books#volume",
							"id": "QEtXAAAAMAAJ",
							"etag": "ul4OX/AViYM",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/QEtXAAAAMAAJ",
							"volumeInfo": {
									"title": "Undergraduate Science, Mathematics and Engineering Education",
									"authors": [
											"National Science Board (U.S.). Task Committee on Undergraduate Science and Engineering Education"
									],
									"publishedDate": "1986",
									"industryIdentifiers": [
											{
													"type": "OTHER",
													"identifier": "UOM:39015051615642"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"printType": "BOOK",
									"categories": [
											"Engineering"
									],
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "0.0.3.0.full.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=QEtXAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=QEtXAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=QEtXAAAAMAAJ&pg=PA28&dq=mathematics&hl=&cd=6&source=gbs_api",
									"infoLink": "https://play.google.com/store/books/details?id=QEtXAAAAMAAJ&source=gbs_api",
									"canonicalVolumeLink": "https://play.google.com/store/books/details?id=QEtXAAAAMAAJ"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "FREE",
									"isEbook": true,
									"buyLink": "https://play.google.com/store/books/details?id=QEtXAAAAMAAJ&rdid=book-QEtXAAAAMAAJ&rdot=1&source=gbs_api"
							},
							"accessInfo": {
									"country": "US",
									"viewability": "ALL_PAGES",
									"embeddable": true,
									"publicDomain": true,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false,
											"downloadLink": "http://books.google.com/books/download/Undergraduate_Science_Mathematics_and_En.epub?id=QEtXAAAAMAAJ&hl=&output=epub&source=gbs_api"
									},
									"pdf": {
											"isAvailable": false
									},
									"webReaderLink": "http://play.google.com/books/reader?id=QEtXAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "FULL_PUBLIC_DOMAIN",
									"quoteSharingAllowed": false
							},
							"searchInfo": {
									"textSnippet": "<b>Mathematics</b> “ <b>Mathematics</b> is both an enabling force and a critical filter for <br>\ncareers in science and engineering . . . . <b>Mathematics</b> is not just one of the <br>\nsciences , but is the foundation for science and engineering . . . . The reality ( <br>\nhowever ) . . . is&nbsp;..."
							}
					},
					{
							"kind": "books#volume",
							"id": "MNXaAAAAMAAJ",
							"etag": "dy13bRkeZ1o",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/MNXaAAAAMAAJ",
							"volumeInfo": {
									"title": "NAEP 1996 Mathematics State Report for Maine",
									"authors": [
											"Clyde M. Reese"
									],
									"publishedDate": "1997",
									"industryIdentifiers": [
											{
													"type": "OTHER",
													"identifier": "UOM:39015041230122"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"pageCount": 218,
									"printType": "BOOK",
									"categories": [
											"Academic achievement"
									],
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "0.2.4.0.full.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=MNXaAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=MNXaAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=MNXaAAAAMAAJ&pg=PA29&dq=mathematics&hl=&cd=7&source=gbs_api",
									"infoLink": "https://play.google.com/store/books/details?id=MNXaAAAAMAAJ&source=gbs_api",
									"canonicalVolumeLink": "https://play.google.com/store/books/details?id=MNXaAAAAMAAJ"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "FREE",
									"isEbook": true,
									"buyLink": "https://play.google.com/store/books/details?id=MNXaAAAAMAAJ&rdid=book-MNXaAAAAMAAJ&rdot=1&source=gbs_api"
							},
							"accessInfo": {
									"country": "US",
									"viewability": "ALL_PAGES",
									"embeddable": true,
									"publicDomain": true,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false,
											"downloadLink": "http://books.google.com/books/download/NAEP_1996_Mathematics_State_Report_for_M.epub?id=MNXaAAAAMAAJ&hl=&output=epub&source=gbs_api"
									},
									"pdf": {
											"isAvailable": false
									},
									"webReaderLink": "http://play.google.com/books/reader?id=MNXaAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "FULL_PUBLIC_DOMAIN",
									"quoteSharingAllowed": false
							},
							"searchInfo": {
									"textSnippet": "CHAPTER 1 Students &#39; <b>Mathematics</b> Scale Score Results The delivery of <br>\neducation to the millions of school - age students in our country is primarily a <br>\nfunction of the states . Therefore , monitoring the performance of students in <br>\nsubjects such&nbsp;..."
							}
					},
					{
							"kind": "books#volume",
							"id": "LAMjCWGNwCIC",
							"etag": "fMjM35qUb00",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/LAMjCWGNwCIC",
							"volumeInfo": {
									"title": "The Leadership Role of State Supervisors of Mathematics",
									"subtitle": "Report of a Conference Under the Auspices of the U.S. Department of Health, Education and Welfare, Washington, June 19-23, 1961",
									"authors": [
											"United States. Office of Education"
									],
									"publishedDate": "1962",
									"industryIdentifiers": [
											{
													"type": "OTHER",
													"identifier": "STANFORD:36105219402497"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"pageCount": 107,
									"printType": "BOOK",
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "1.1.2.0.full.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=LAMjCWGNwCIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=LAMjCWGNwCIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=LAMjCWGNwCIC&pg=PA11&dq=mathematics&hl=&cd=8&source=gbs_api",
									"infoLink": "https://play.google.com/store/books/details?id=LAMjCWGNwCIC&source=gbs_api",
									"canonicalVolumeLink": "https://play.google.com/store/books/details?id=LAMjCWGNwCIC"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "FREE",
									"isEbook": true,
									"buyLink": "https://play.google.com/store/books/details?id=LAMjCWGNwCIC&rdid=book-LAMjCWGNwCIC&rdot=1&source=gbs_api"
							},
							"accessInfo": {
									"country": "US",
									"viewability": "ALL_PAGES",
									"embeddable": true,
									"publicDomain": true,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false,
											"downloadLink": "http://books.google.com/books/download/The_Leadership_Role_of_State_Supervisors.epub?id=LAMjCWGNwCIC&hl=&output=epub&source=gbs_api"
									},
									"pdf": {
											"isAvailable": false
									},
									"webReaderLink": "http://play.google.com/books/reader?id=LAMjCWGNwCIC&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "FULL_PUBLIC_DOMAIN",
									"quoteSharingAllowed": false
							},
							"searchInfo": {
									"textSnippet": "The Changes Taking Place in <b>Mathematics</b> IRVING ADLER THIS THIS <br>\nCONFERENCE is part of the vigorous movement now under way to reexamine <br>\nand modify the teaching of <b>mathematics</b> . The avowed purpose of this movement <br>\nis to bring&nbsp;..."
							}
					},
					{
							"kind": "books#volume",
							"id": "mVtLAAAAMAAJ",
							"etag": "tHvBpjQ88g0",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/mVtLAAAAMAAJ",
							"volumeInfo": {
									"title": "School Science and Mathematics",
									"publishedDate": "1917",
									"industryIdentifiers": [
											{
													"type": "OTHER",
													"identifier": "UOM:39015068174047"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"printType": "BOOK",
									"categories": [
											"Education"
									],
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "0.2.3.0.full.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=mVtLAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=mVtLAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=mVtLAAAAMAAJ&pg=PA324&dq=mathematics&hl=&cd=9&source=gbs_api",
									"infoLink": "https://play.google.com/store/books/details?id=mVtLAAAAMAAJ&source=gbs_api",
									"canonicalVolumeLink": "https://play.google.com/store/books/details?id=mVtLAAAAMAAJ"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "FREE",
									"isEbook": true,
									"buyLink": "https://play.google.com/store/books/details?id=mVtLAAAAMAAJ&rdid=book-mVtLAAAAMAAJ&rdot=1&source=gbs_api"
							},
							"accessInfo": {
									"country": "US",
									"viewability": "ALL_PAGES",
									"embeddable": true,
									"publicDomain": true,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false,
											"downloadLink": "http://books.google.com/books/download/School_Science_and_Mathematics.epub?id=mVtLAAAAMAAJ&hl=&output=epub&source=gbs_api"
									},
									"pdf": {
											"isAvailable": true,
											"downloadLink": "http://books.google.com/books/download/School_Science_and_Mathematics.pdf?id=mVtLAAAAMAAJ&hl=&output=pdf&sig=ACfU3U0b-QNBRoJNVtrq6X7CCagFW3ukMw&source=gbs_api"
									},
									"webReaderLink": "http://play.google.com/books/reader?id=mVtLAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "FULL_PUBLIC_DOMAIN",
									"quoteSharingAllowed": false
							},
							"searchInfo": {
									"textSnippet": "In the trade schools , the work in <b>mathematics</b> is somewhat more narrow and <br>\nspecialized than in the technical high schools , though not so limited as in the <br>\napprentice schools . The point of view of the teachers of <b>mathematics</b> in the trade<br>\n&nbsp;..."
							}
					},
					{
							"kind": "books#volume",
							"id": "G709AQAAMAAJ",
							"etag": "9lpJ410qFK8",
							"selfLink": "https://www.googleapis.com/books/v1/volumes/G709AQAAMAAJ",
							"volumeInfo": {
									"title": "The Mathematics Teacher",
									"publishedDate": "1913",
									"industryIdentifiers": [
											{
													"type": "OTHER",
													"identifier": "MINN:31951000705871K"
											}
									],
									"readingModes": {
											"text": false,
											"image": true
									},
									"printType": "BOOK",
									"categories": [
											"Mathematics"
									],
									"maturityRating": "NOT_MATURE",
									"allowAnonLogging": false,
									"contentVersion": "0.0.1.0.full.1",
									"panelizationSummary": {
											"containsEpubBubbles": false,
											"containsImageBubbles": false
									},
									"imageLinks": {
											"smallThumbnail": "http://books.google.com/books/content?id=G709AQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
											"thumbnail": "http://books.google.com/books/content?id=G709AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
									},
									"language": "en",
									"previewLink": "http://books.google.com/books?id=G709AQAAMAAJ&pg=PA203&dq=mathematics&hl=&cd=10&source=gbs_api",
									"infoLink": "https://play.google.com/store/books/details?id=G709AQAAMAAJ&source=gbs_api",
									"canonicalVolumeLink": "https://play.google.com/store/books/details?id=G709AQAAMAAJ"
							},
							"saleInfo": {
									"country": "US",
									"saleability": "FREE",
									"isEbook": true,
									"buyLink": "https://play.google.com/store/books/details?id=G709AQAAMAAJ&rdid=book-G709AQAAMAAJ&rdot=1&source=gbs_api"
							},
							"accessInfo": {
									"country": "US",
									"viewability": "ALL_PAGES",
									"embeddable": true,
									"publicDomain": true,
									"textToSpeechPermission": "ALLOWED",
									"epub": {
											"isAvailable": false,
											"downloadLink": "http://books.google.com/books/download/The_Mathematics_Teacher.epub?id=G709AQAAMAAJ&hl=&output=epub&source=gbs_api"
									},
									"pdf": {
											"isAvailable": false
									},
									"webReaderLink": "http://play.google.com/books/reader?id=G709AQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
									"accessViewStatus": "FULL_PUBLIC_DOMAIN",
									"quoteSharingAllowed": false
							},
							"searchInfo": {
									"textSnippet": "The non - <b>mathematicians</b> are therefore wholly barred from training of reasoning <br>\npowers by <b>mathematical</b> work and there is no use to attempt it . In the matter of <br>\nculture the <b>mathematical</b> pupils of course receive a considerable amount from <br>\ntheir&nbsp;..."
							}
					}
			]
		}
	);

	const appStateCB = (newBookState) => {
		setBookState(newBookState);
		console.log(newBookState);
		console.log("App bookstate updated!");
	}

	return (
    <div className="App">
    	<Router>
				<NavbarSearch setAppState={appStateCB}/>
				<Switch>
					<Route exact path="/" render={() => <SearchBooks bookArray={bookState} />} />
					<Route exact path="/search" render={() => <SearchBooks bookArray={bookState} />} />
					<Route exact path="/saved" render={() => <SavedBooks savedBookArray={savedBookState} />} /> */}
				</Switch>
			</Router>
			
    </div>
  );
}

export default App;
