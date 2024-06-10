'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// const [firstBook, secondBook] = books;

// const [, , thirdBook] = books;

// console.log(firstBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// let one, two, three;

// const arr = [5, 3, 30, 10, 2];

// [one, two, ...three] = arr;

// console.log(three);

//1. Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.

// let pageSum = 0;

// for (const book of books) {
//   pageSum += book.pages;
//   console.log(pageSum);
// }

// Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.
// const allAuthors = [];

// for (const book of books) {
//   console.log(book);
//   if (typeof book.author === 'string') {
//     allAuthors.push(book.author);
//     console.log(allAuthors);
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//       console.log(allAuthors);
//     }
//   }
// }

//Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
// for (const [index, author] of allAuthors.entries()) {
//   console.log(`${index}. ${author}`);
// }

// for (const [index, author] of allAuthors.entries()) {
//     console.log(`${index + 1}. ${author}`);
//   }

/*Using computed properties, fill the newBook object with the properties and values 
from the bookData array. The first one is done already.*/

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

/*Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.
 */

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   // ...
//   pages,
// };

// console.log(newBook2.pages);

/*Write a function called getFirstKeyword that takes the book object as an argument. This 
function should return the first keyword from the book's keywords property (array) 
or undefined (if the keywords property doesn't exist). 
It shouldn't throw an error. Use optional chaining for that.
*/
// getFirstKeyword(books[0]);

// function getFirstKeyword(book) {
//   console.log(book.keywords?.[0]);
//   ('');
//   return book.keywords?.[0];
// }

/*Below is the entries variable that stores an empty array. Use the for-of loop together
with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the 
first book object from the books array. 
For each key, push a new array that contains that key to the entries array.
 */

// const entries = [];
// const propsGoodReads = books[0].thirdParty.goodreads;
// const keys = Object.keys(propsGoodReads);

// // for (const key of keys) {
// //   entries.push(key);
// //   console.log(entries);
// // }

// for (const key of Object.keys(propsGoodReads)) {
//   entries.push([key]);
//   //   console.log(entries);
// }

// /*Use the for-of loop together with the Object.values() method and Array's entries()
// method to loop over thirdParty.goodreads
// property of the first book from the books array.*/

// for (const [i, value] of Object.values(propsGoodReads).entries()) {
//   entries[i].push(value);
// }

// /*Use the Object.entries() method on the thirdParty.goodreads property of the first
// book from the books array. Assign the returned value to the variable called entries2.*/

// const entries2 = Object.entries(propsGoodReads);

// console.log(entries);
// console.log(entries2);

/*Strings*/

console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[8]
);

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(quote.indexOf('chess'));

console.log(quote.slice(quote.lastIndexOf(' ') + 1));

const isContributor = function (name) {
  //   console.log(name.slice(name.lastIndexOf(' ') + 1));
  //   const lastEntry = name.slice(name.lastIndexOf(' ') + 1);
  //   lastEntry === '(Contributor)' ? true : false;
  console.log(name.includes('Contributor'));
};

isContributor('Julie Sussman (Contributor)');

isContributor('Robert Sedgewick');

const normalizeAuthorName = function (fixedname) {
  fixedname = fixedname.trim();

  const firstName = fixedname.slice(0, fixedname.indexOf(' '));

  let lastName = ''; //finds if there is a lastname or not. extracts last name if found

  if (fixedname.indexOf(' ') === fixedname.lastIndexOf(' ')) {
    lastName = fixedname.slice(fixedname.indexOf(' ') + 1, fixedname.length);
    console.log(fixedname.indexOf(' '), lastName);
  } else {
    lastName = fixedname.slice(
      fixedname.indexOf(' ') + 1,
      fixedname.lastIndexOf(' ')
    );
    console.log(fixedname.indexOf(' '), lastName);
  }
};

normalizeAuthorName('  JuliE sussMan (Contributor)');
normalizeAuthorName('  JuliE ');

const secondBook = books[1].title.replace('Programs', 'Software');

const logBookTheme = function (title) {
  if (title.startsWith('computer')) {
    //if title starts with computer
    console.log('This book is about computers');
  } else if (title.includes('algorithm' && 'structures')) {
    console.log('This book is about algorithms and data structures');
  } else if (
    title.endsWith('system') ||
    (title.endsWith('systems') && !title.includes('operating'))
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  }
};

logBookTheme('computer and structures books');

logBookTheme('algorithm and structures books');

logBookTheme('data systems operating');

const logBookCategories = function (str) {
  const newStr = str.split(';');
  for (const category of newStr) {
    console.log(category);
  }
};
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);

const getKeywordsAsString = function (books) {
  const keywords = [];

  for (const book of books) {
    // console.log(keywords);
    keywords.push(...book.keywords);
  }
  console.log(keywords);
  const uniqueKeywords = [...new Set(keywords)];
  console.log(uniqueKeywords);
};

console.log(getKeywordsAsString(books));

// computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development

const logBookChapters = function (chapters) {
  for (const [name, pages] of chapters) {
    const newName = name.padEnd(20, '_');
    console.log(`${newName} ${pages}`);
  }
};

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);
