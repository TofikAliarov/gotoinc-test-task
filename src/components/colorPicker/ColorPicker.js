import React, { useState } from "react";
import Sliders from "../slider/Sliders";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [showModal, setShowModal] = useState(false);
  const [colorR, setColorR] = useState(222);
  const [colorG, setColorG] = useState(19);
  const [colorB, setColorB] = useState(229);
  const [bgColor, setBgColor] = useState("222,19,229");

  const close = () => {
    setShowModal((prev) => false);
  };
  const onChangeColorR = (event, newValue) => {
    setColorR(newValue);
  };
  const onChangeColorG = (event, newValue) => {
    setColorG(newValue);
  };
  const onChangeColorB = (event, newValue) => {
    setColorB(newValue);
  };

  const onSubmit = () => {
    setBgColor(`${colorR},${colorG},${colorB}`);
    close();
  };

  const onCancel = () => {
    setBgColor("222,19,229");
    setColorR(222);
    setColorG(19);
    setColorB(229);
    close();
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
            colorR={colorR}
            colorG={colorG}
            colorB={colorB}
            onChangeColorR={onChangeColorR}
            onChangeColorG={onChangeColorG}
            onChangeColorB={onChangeColorB}
            submit={onSubmit}
            cancle={onCancel}
          />
        )}
      </div>
    </>
  );
}

export default ColorPicker;
