import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Stateless function component
// Always return JSX
const books = [
  {
    id: 1,
    author: "Dav Pilkey",
    title: "Dog Man: Mothering Heights",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51wlUnNtsHL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    author: "Two Hoots Coloring",
    title: "Dinosaur Coloring Book for Kids",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/517lwYMMc5L._SX384_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    author: "Sherri Duskey Rinker",
    title: "Goodnight, Goodnight Construction Site",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518vmGefs-L._SX455_BO1,204,203,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, id } = props.book;
  return (
    <article className="book">
      <img src={img} alt="childrens book" />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      <h5>{id}</h5>
    </article>
  );
};

/*
const Link = () => <a href="#">first</a>;

const Input = () => <input type="text" name="" id="" />;


const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
};
*/
ReactDom.render(
  <BookList />,

  document.getElementById("root")
);
