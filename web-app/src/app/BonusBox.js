"use client"

import React from "react";
import styles from "./bonusbox.module.css";

export default function BonusBox(props) {
    //#region state
    // none
    //#endregion

    //#region functions
    // none
    //#endregion

    //#region useEffect
    // none
    //#endregion
    
    return (
        <div id={props.bonusBoxId} title={props.bonusBoxId}
            className={styles.BonusBox}
            onClick={props.handleClick}
            style={{
                top: props.top,
                left: props.left,
                backgroundColor: props.backgroundColor,
            }}
        >
        </div>
    );
}