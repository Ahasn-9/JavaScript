// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }
// for in loop
const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in myObject) {
  //console.log(key, ":-", myObject[key]);
}
// for of loop

const myArray = [10, 20, 30, 40, 50];
for (const value of myArray) {
  //console.log(value);
}

// for in using array

const myArray1 = ["apple", "banana", "mango"];
for (const key in myArray1) {
  //console.log(myArray1[key]);
}
//  for of using array
const myArray2 = ["apple", "banana", "mango"];
for (const key in myArray2) {
  // console.log(myArray2[key]);
}

// for each loop
const myArray3 = ["apple", "banana", "mango", "orange", "grapes"];
myArray3.forEach(function (fruit) {
  //console.log(fruit);
});

// same using arrow function
myArray3.forEach((fruit, index, myArray3) => {
  //console.log(fruit, index, myArray3);
});

// objects in array using for each loop

const myArray4 = [
  { name: "John", age: 30 },
  { name: "Doe", age: 40 },
  { name: "Smith", age: 50 },
];

myArray4.forEach((person) => {
  // console.log(person.name);
});

// filter

const myArray5 = [10, 20, 30, 40, 50];
const result = myArray5.filter((value) => {
  return value > 30;
});
//console.log(result);

// Example
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    rating: 4.4,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Classic",
    rating: 4.8,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    rating: 4.7,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Classic",
    rating: 4.0,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    rating: 4.6,
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    rating: 4.3,
  },
];

// console.log(books);
const classicBooks = books.filter((book) => {
  return book.year > 1950 && book.genre === "Classic";
});
console.log(classicBooks);
