import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Stateless function component
// Always return JSX
const firstBook = {
  author: "Dav Pilkey",
  title: "Dog Man: Mothering Heights",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51wlUnNtsHL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
};

const secondBook = {
  author: "Two Hoots Coloring",
  title: "Dinosaur Coloring Book for Kids",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/517lwYMMc5L._SX384_BO1,204,203,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          dolorem qui debitis architecto delectus illum quo cum vitae veniam
          optio nulla in repellendus, inventore a amet soluta sequi, quam sint!
        </p>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="childrens book" />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      {props.children}
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
