'use client'

import React from "react";
import styles from './feature.module.css';

export default function Feature(props) {
    return (
        <div id={props.featureId}
            className={styles.feature}
            style={{
                position: "absolute",
                top: props.y,
                left: props.x,
                height: "25px",
                width: "25px"
            }}
        >
        </div>
    );
}