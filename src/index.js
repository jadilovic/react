import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Stateless function component
// Always return JSX

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51wlUnNtsHL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt="childrens book"
    />
  );
};

const Title = () => {
  return <h1>Dog Man: Mothering Heights</h1>;
};

const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      Dav Pilkey
    </h4>
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
