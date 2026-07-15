const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

//Q1
const booksRatingGreaterThan4 = books.filter(book => book.ratings > 4)

console.log(booksRatingGreaterThan4)

//Q2
const bookTitles = books.map(book => { return book.title; 
  
})

console.log(bookTitles)

//Q3
const book1984 = books.find(book => book.title == "1984")

console.log(book1984)

//Q4
const descendingSortedBooks = books.sort((book1, book2) => book2.ratings - book1.ratings)

console.log(descendingSortedBooks) 

//Q5
console.log(descendingSortedBooks[0].title) 