import React from "react";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import styles from "./Slider.module.css";
import modalBackDrop from "./ModalBackDrop";
function Sliders({
  colorR,
  colorG,
  colorB,
  onChangeColorR,
  onChangeColorG,
  onChangeColorB,
  cancle,
  submit,
}) {
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
          <Button variant="contained" color="primary" onClick={cancle}>
            Cancle
          </Button>
          <Button variant="contained" color="primary" onClick={submit}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default modalBackDrop(Sliders);
