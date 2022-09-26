// import React from 'react';
import { Review } from "./Review";

// import { FaGithubSquare } from "react-icons/fa";

export const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>nuestras reseñas</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};
