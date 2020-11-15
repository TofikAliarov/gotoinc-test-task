import React, { useState } from "react";
import Sliders from "../slider/Sliders";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [showModal, setShowModal] = useState(false);
  const close = () => {
    setShowModal((prev) => false);
  };
  const [colorR, setColorR] = useState(222);
  const [colorG, setColorG] = useState(19);
  const [colorB, setColorB] = useState(229);
  const [bgColor, setBgColor] = useState("222,19,229");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div className={styles.colorBody}>
        <div
          className={styles.colorBox}
          style={{ backgroundColor: ` rgb(${bgColor})` }}
        ></div>
        <button className={styles.button} onClick={() => setShowModal(true)}>
          Open box color settings
        </button>
        {showModal && (
          <Sliders
            close={() => close()}
            changeColor={changeColor}
            colorR={colorR}
            colorG={colorG}
            colorB={colorB}
            setColorR={setColorR}
            setColorG={setColorG}
            setColorB={setColorB}
          />
        )}
      </div>
    </>
  );
}

export default ColorPicker;
