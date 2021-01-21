import React, { useState, useEffect } from "react";
import "../components/css/Items.css";
import { DataBase } from "./DataBase";
import AOS from "aos";
import "aos/dist/aos.css";

function Item() {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [type, setType] = useState("Peciva");
  function setHlebovi() {
    setType("Hlebovi");
  }
  function setPeciva() {
    setType("Peciva");
  }
  function setPite() {
    setType("Pite");
  }
  function setSmrznuto() {
    setType("Zamrznuto");
  }
  return (
    <>
      <div className="wraper">
        <div className="button-box">
          <p>Izaberite kategoriju proizvoda :</p>
          <button onClick={setHlebovi}>Hlebovi</button>
          <button onClick={setPeciva}>Peciva</button>
          <button onClick={setPite}>Pite</button>
          <button onClick={setSmrznuto}>Zamrznuto</button>
          <p>Trenutno prikazujete : {type}</p>
        </div>
        {DataBase.map((item) => {
          if (item.class === type) {
            return (
              <>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="title">{item.name}</div>
                  <img src={item.imag} alt="placeholder" className="picture" />
                  <div class="item-text">Cena : {item.price} rsd</div>
                  <div className="item-text">
                    O proizvodu : {item.shortDesc}
                  </div>
                  <div className="item-text">{item.description}</div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Item;
