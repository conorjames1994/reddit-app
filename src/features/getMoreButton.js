import React from "react";
import { useState } from "react";
import styles from "./getMoreButton.module.css"
export function GetMoreButton (props) {

  


  return (
    <div className={styles.button}>
    <button  onClick={props.clickHandler}>Get more stories</button>
    </div>
  )
}