import React from "react";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import styles from "./Slider.module.css";
import modalBackDrop from "./ModalBackDrop";
function Sliders({
  close,
  changeColor,
  colorR,
  colorG,
  colorB,
  setColorR,
  setColorG,
  setColorB,
}) {
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
    changeColor(`${colorR},${colorG},${colorB}`);
    close();
  };

  const onCancel = () => {
    changeColor("222,19,229");
    setColorR(222);
    setColorG(19);
    setColorB(229);
    close();
  };

  return (
    <>
      <div className={styles.sliderModal}>
        <div className={styles.sliderList}>
          <div className={styles.sliderItem}>
            <Slider
              value={colorR}
              min={0}
              step={1}
              max={255}
              onChange={onChangeColorR}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
            <p className={styles.text}>R: {colorR}</p>
          </div>
          <div className={styles.sliderItem}>
            <Slider
              value={colorG}
              min={0}
              step={1}
              max={255}
              onChange={onChangeColorG}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />

            <p className={styles.text}>G: {colorG}</p>
          </div>
          <div className={styles.sliderItem}>
            <Slider
              value={colorB}
              min={0}
              step={1}
              max={255}
              onChange={onChangeColorB}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />

            <p className={styles.text}>B: {colorB}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onCancel()}
          >
            Cancle
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSubmit()}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default modalBackDrop(Sliders);
