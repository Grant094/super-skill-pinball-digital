"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Ball(props) {
    let ballTop, ballLeft;
    
    // since the first render is before the document becomes available, the balls' initial values need to be set this way
    if (typeof window === "undefined") {
        if (props.ballId === constants.BALL1_ID) {
            ballTop = constants.START_FEATURE_TOP;
            ballLeft = constants.START_FEATURE_LEFT;
        } else if (props.ballId === constants.BALL2_ID) {
            ballTop = constants.DRAIN_FEATURE_TOP;
            ballLeft = constants.DRAIN_FEATURE_LEFT;
        }
    } else {
        ballTop = document.getElementById(props.ballFeatureId).style.top;
        ballLeft = document.getElementById(props.ballFeatureId).style.left;
    }

    return (
        <img id={props.ballId}
            style={{
                position: "absolute",
                top: ballTop,
                left: ballLeft,
                visibility: ((props.ballFeatureId === constants.DRAIN_FEATURE_ID)? "hidden": "visible"),
            }}
            src="/images/ball.jpg"
            height="25px"
            width="25px"
        />
    );
}