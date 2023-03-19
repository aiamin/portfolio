import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <div>
      <EventExample />
      <section className="booklist">
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
};

const EventExample = () => {
  return <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe quisquam rerum natus facilis amet culpa, iusto dolor excepturi sunt illum, deleniti consequatur velit cum tenetur dicta eum enim! Odio.</h2>;
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/P/0593236211.01._SCLZZZZZZZ_SX500_.jpg"
    alt="alternative"
    width={200}
  />
);
const Title = () => <h2>Everyday Grand: Soulful Recipes for Celebrating</h2>;
const Author = () => <h2>Jocelyn Delk Adams</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
