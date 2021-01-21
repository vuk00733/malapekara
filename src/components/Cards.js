import React from "react";
import "../components/css/Cards.css";
import png from "../components/images/landing1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Cards() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Neki Proizvodi
      </h1>
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-once="true"
        className="card-list"
      >
        <article className="card">
          <header className="card-header">
            <p>Proizvod</p>
            <h2>Opis Proizvoda</h2>
          </header>
          <img src={png} alt="placeholder" className="card-image" />
        </article>
        <article className="card ">
          <header className="card-header">
            <p>Proizvod</p>
            <h2>Opis Proizvoda</h2>
          </header>
          <img src={png} alt="placeholder" className="card-image" />
        </article>
        <article className="card ">
          <header className="card-header">
            <p>proizvod</p>
            <h2>Opis Proizvoda</h2>
          </header>
          <img src={png} alt="placeholder" className="card-image" />
        </article>
        <article className="card ">
          <header className="card-header">
            <p>Proizvod</p>
            <h2>Opis Proizvoda</h2>
          </header>
          <img src={png} alt="placeholder" className="card-image" />
        </article>
        <article className="card2 hover ">
          <header className="header2">
            <p>Proizvod</p>
            <h2>Opis Proizvoda</h2>
          </header>
          <img src={png} alt="placeholder" className="image2" />
        </article>
        <article className="card2 ">
          <header className="header2">
            <p>Proizvod</p>
            <h2>Opis Proizvoda</h2>
          </header>
          <img src={png} alt="placeholder" className="image2" />
        </article>
        <article className="card2 ">
          <header className="header2">
            <p>Proizvod</p>
            <h2>Opis Proizvoda</h2>
          </header>
          <img src={png} alt="placeholder" className="image2" />
        </article>
        <article className="card2 ">
          <header className="header2">
            <p>Proizvod</p>
            <h2>Opis Proizvoda</h2>
          </header>
          <img src={png} alt="placeholder" className="image2" />
        </article>
      </section>
    </>
  );
}

export default Cards;
