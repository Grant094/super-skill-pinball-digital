"use client"

import React from "react";
import NudgeButton from "./NudgeButton";

export default function NudgeDnButton(props) {
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
        <NudgeButton buttonId={props.buttonId}
            symbol="-"
            atMinOrMax={Number(props.die) === 1}
            {...props}
        />
    );
}