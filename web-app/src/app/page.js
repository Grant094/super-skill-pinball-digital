"use client"

import React, { useState } from "react";
import Game from "./Game";
import * as utilities from "./utilities";

export default function Home(props) {
    //#region state
    const [gameId, setGameId] = useState(0);
    //#endregion

    //#region vars
    const MANUAL_DIE_VALUES = [
        [1, 2], // move from start to yel droptarget 12
        [1, 1], // move to yel flipper via yel flipper box 1
        [3, 4], // move to yel droptarget 34
        [2, 3], // move to yel flipper via yel flipper box 23
        [5, 6], // move to yel droptarget 56
        // select yel multiball bonus
        [1, 1], // final roll
    ];
    //#endregion

    //#region functions
    const incGameId = (() => setGameId(gameId + 1));
    //#endregion

    return (
        <div>
            <Game
                key={gameId}
                incGameId={incGameId}
                dieValues={props.dieValues ?
                    props.dieValues :
                    (MANUAL_DIE_VALUES.length > 1) ?
                        MANUAL_DIE_VALUES :
                        null
                }
            />
        </div>
    );
}
