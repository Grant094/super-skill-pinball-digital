"use client"

import React, { useEffect } from "react";
import * as constants from "./constants";
import styles from "./restarttray.module.css";

export default function RestartTray(props) {
    function handleClick() {
        //#region reset-state
        props.setScore(0);
        props.setRound(1);
        props.setNudgesUsed(0);
        //#endregion

        //#region clear-all-boxes
        const allDivs = document.querySelectorAll("div");
        for (const div of allDivs) {
            if (div.className.includes("box")) {
                div.style.backgroundColor = "transparent";
            }
        }
        //#endregion

        //#region move-ball-to-start
        const ball = document.getElementById("ball");
        const start = document.getElementById(constants.startFeatureId);
        ball.style.top = start.style.top;
        ball.style.left = start.style.left;
        //#endregion

        props.rollDice();
    }
    return (
        <div id="restart-tray" className={styles.RestartTray}>
            <button id="restart-button"
                className={styles.RestartButton}
                type="button"
                onClick={handleClick}
            >
                Restart
            </button>
        </div>
    );
}