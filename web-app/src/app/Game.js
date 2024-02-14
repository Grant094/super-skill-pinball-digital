"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";
import Table from "./Table";
import DiceTray from "./DiceTray";
import ScoreIndicator from "./ScoreIndicator";
import RestartTray from "./RestartTray";
import AlertTray from "./AlertTray";

export default function Game(props) {
    let didInit = false;
    //#region state
    const [dieValuesIndex, setDieValuesIndex] = useState(props.dieValues ? 0 : null);
    const [die1, setDie1] = useState(props.dieValues ? props.dieValues[dieValuesIndex] : 0);
    const [die2, setDie2] = useState(props.dieValues ? props.dieValues[dieValuesIndex] : 0);
    const [die1AmountNudgedBy, setDie1AmountNudgedBy] = useState(0);
    const [die2AmountNudgedBy, setDie2AmountNudgedBy] = useState(0);
    const [nudgesUsed, setNudgesUsed] = useState(0);
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);
    const [ball1FeatureId, setBall1FeatureId] = useState(constants.START_FEATURE_ID);
    const [ball2FeatureId, setBall2FeatureId] = useState(constants.DRAIN_FEATURE_ID);
    const [selectedBallId, setSelectedBallId] = useState(constants.BALL1_ID);
    const [alertParagraphText, setAlertParagraphText] = useState("");
    //#region dashed boxes
    const [redOutlaneBoxBackgroundColor, setRedOutlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelOutlaneBoxBackgroundColor, setYelOutlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redInlaneBoxBackgroundColor, setRedInlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelInlaneBoxBackgroundColor, setYelInlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox3BoxBackgroundColor, setRedFlipperBox3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox45BoxBackgroundColor, setRedFlipperBox45BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox6BoxBackgroundColor, setRedFlipperBox6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox1BoxBackgroundColor, setYelFlipperBox1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox23BoxBackgroundColor, setYelFlipperBox23BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox4BoxBackgroundColor, setYelFlipperBox4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion
    //#endregion

    //#region dashed boxes background color arrays
    const dashedBoxesBackgroundColorSetters = [
        setRedOutlaneBoxBackgroundColor,
        setYelOutlaneBoxBackgroundColor,
        setRedInlaneBoxBackgroundColor,
        setYelInlaneBoxBackgroundColor,
        setRedFlipperBox3BoxBackgroundColor,
        setRedFlipperBox45BoxBackgroundColor,
        setRedFlipperBox6BoxBackgroundColor,
        setYelFlipperBox1BoxBackgroundColor,
        setYelFlipperBox23BoxBackgroundColor,
        setYelFlipperBox4BoxBackgroundColor,
    ];
    const redFlipperBoxesBackgroundColors = [
        redFlipperBox3BoxBackgroundColor,
        redFlipperBox45BoxBackgroundColor,
        redFlipperBox6BoxBackgroundColor,
    ];
    const yelFlipperBoxesBackgroundColors = [
        yelFlipperBox1BoxBackgroundColor,
        yelFlipperBox23BoxBackgroundColor,
        yelFlipperBox4BoxBackgroundColor,
    ];
    //#endregion

    //#region functions
    const incNudgesUsed = (() => setNudgesUsed(nudgesUsed + 1));
    const incRound = (() => setRound(round + 1));

    function getSelectedBallFeatureId(selectedBallId) {
        if (selectedBallId === constants.BALL1_ID) {
            return ball1FeatureId;
        } else if (selectedBallId === constants.BALL2_ID) {
            return ball2FeatureId;
        } else {
            return null;
        }
    }

    function moveSelectedBall(correspondingFeatureId) {
        if (selectedBallId === constants.BALL1_ID) {
            setBall1FeatureId(correspondingFeatureId);
        } else if (selectedBallId === constants.BALL2_ID) {
            setBall2FeatureId(correspondingFeatureId);
        }
    }

    function clearDashedBoxes() {
        for (const setter of dashedBoxesBackgroundColorSetters) {
            setter(constants.UNFILLED_BACKGROUND_COLOR);
        }
    }

    function hasTilted(nextValueOfDie1, nextValueOfDie2) {
        return utilities.calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy) > Math.abs(nextValueOfDie1 - nextValueOfDie2);
    }

    function tilt(nextValueOfDie1, nextValueOfDie2) {
        setAlertParagraphText(`Tilted on {${nextValueOfDie1}, ${nextValueOfDie2}}!`);
        endRound();

        const postTiltValueOfDie1 = props.dieValues ? props.dieValues[dieValuesIndex + 1][0] : utilities.getRndIntegerInclusive(1, 6);
        const postTiltValueOfDie2 = props.dieValues ? props.dieValues[dieValuesIndex + 1][1] : utilities.getRndIntegerInclusive(1, 6);
        setDie1(postTiltValueOfDie1);
        setDie2(postTiltValueOfDie2);
        if (props.dieValues) {
            setDieValuesIndex(() => dieValuesIndex + 1);
        }
    }

    function endRound() {
        // increment round
        incRound();

        clearDashedBoxes();

        // move ball1 to start
        setSelectedBallId(constants.BALL1_ID);
        moveSelectedBall(constants.START_FEATURE_ID);
    }

    function rollDice() {
        if (props.dieValues) {
            setDieValuesIndex(() => dieValuesIndex + 1);
        }
        const nextValueOfDie1 = props.dieValues ? props.dieValues[dieValuesIndex][0] : utilities.getRndIntegerInclusive(1, 6);
        const nextValueOfDie2 = props.dieValues ? props.dieValues[dieValuesIndex][1] : utilities.getRndIntegerInclusive(1, 6);
        setDie1(nextValueOfDie1);
        setDie2(nextValueOfDie2);

        if (utilities.calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy)) {
            // check whether player tilted and if so end the round
            if (hasTilted(nextValueOfDie1, nextValueOfDie2)) {
                tilt(nextValueOfDie1, nextValueOfDie2);
            }

            // after checking tilt status, remove any nudging from both dice
            setDie1AmountNudgedBy(0);
            setDie2AmountNudgedBy(0);
        }
    }

    function handleNudge(dieId, symbol) {
        if (dieId === "1") {
            if (symbol === "+") {
                setDie1(Number(die1) + 1);
                setDie1AmountNudgedBy(Number(die1AmountNudgedBy) + 1);
            } else {
                setDie1(Number(die1) - 1);
                setDie1AmountNudgedBy(Number(die1AmountNudgedBy) - 1);
            }
        } else {
            if (symbol === "+") {
                setDie2(Number(die2) + 1);
                setDie2AmountNudgedBy(Number(die2AmountNudgedBy) + 1);
            } else {
                setDie2(Number(die2) - 1);
                setDie2AmountNudgedBy(Number(die2AmountNudgedBy) - 1);
            }
        }
    }

    function handleRestart() {
        props.incGameId();
    }

    function addPoints(pointsToAdd) {
        setScore(Number(score) + Number(pointsToAdd));
    }

    function autoSelectOnlyRemainingBall() {
        if (ball1FeatureId === constants.DRAIN_FEATURE_ID && ball2FeatureId !== constants.DRAIN_FEATURE_ID) {
            setSelectedBallId(constants.BALL2_ID);
        } else if (ball2FeatureId === constants.DRAIN_FEATURE_ID && ball1FeatureId !== constants.DRAIN_FEATURE_ID) {
            setSelectedBallId(constants.BALL1_ID);
        }
    }

    function gameOverAlert() {
        setAlertParagraphText('Game over!');
    }
    //#endregion

    //#region useEffect
    useEffect(function init() {
        if (!didInit) {
            didInit = true;
            rollDice();
        }
    }, []);
    //#endregion

    return (
        <div>
            <Table tableId="table"
                die1={die1}
                die2={die2}
                rollDice={rollDice}
                score={score}
                round={round}
                addPoints={addPoints}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                die1AmountNudgedBy={die1AmountNudgedBy}
                die2AmountNudgedBy={die2AmountNudgedBy}
                redOutlaneBoxBackgroundColor={redOutlaneBoxBackgroundColor}
                setRedOutlaneBoxBackgroundColor={setRedOutlaneBoxBackgroundColor}
                yelOutlaneBoxBackgroundColor={yelOutlaneBoxBackgroundColor}
                setYelOutlaneBoxBackgroundColor={setYelOutlaneBoxBackgroundColor}
                redInlaneBoxBackgroundColor={redInlaneBoxBackgroundColor}
                setRedInlaneBoxBackgroundColor={setRedInlaneBoxBackgroundColor}
                yelInlaneBoxBackgroundColor={yelInlaneBoxBackgroundColor}
                setYelInlaneBoxBackgroundColor={setYelInlaneBoxBackgroundColor}
                redFlipperBox3BoxBackgroundColor={redFlipperBox3BoxBackgroundColor}
                setRedFlipperBox3BoxBackgroundColor={setRedFlipperBox3BoxBackgroundColor}
                redFlipperBox45BoxBackgroundColor={redFlipperBox45BoxBackgroundColor}
                setRedFlipperBox45BoxBackgroundColor={setRedFlipperBox45BoxBackgroundColor}
                redFlipperBox6BoxBackgroundColor={redFlipperBox6BoxBackgroundColor}
                setRedFlipperBox6BoxBackgroundColor={setRedFlipperBox6BoxBackgroundColor}
                yelFlipperBox1BoxBackgroundColor={yelFlipperBox1BoxBackgroundColor}
                setYelFlipperBox1BoxBackgroundColor={setYelFlipperBox1BoxBackgroundColor}
                yelFlipperBox23BoxBackgroundColor={yelFlipperBox23BoxBackgroundColor}
                setYelFlipperBox23BoxBackgroundColor={setYelFlipperBox23BoxBackgroundColor}
                yelFlipperBox4BoxBackgroundColor={yelFlipperBox4BoxBackgroundColor}
                setYelFlipperBox4BoxBackgroundColor={setYelFlipperBox4BoxBackgroundColor}
                redFlipperBoxesBackgroundColors={redFlipperBoxesBackgroundColors}
                yelFlipperBoxesBackgroundColors={yelFlipperBoxesBackgroundColors}
                nudgesUsed={nudgesUsed}
                incNudgesUsed={incNudgesUsed}
                selectedBallId={selectedBallId}
                getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                moveSelectedBall={moveSelectedBall}
                endRound={endRound}
                autoSelectOnlyRemainingBall={autoSelectOnlyRemainingBall}
                gameOverAlert={gameOverAlert}
                setAlertParagraphText={setAlertParagraphText}
            />
            <DiceTray dicetrayId="dice-tray"
                die1={die1}
                die2={die2}
                die1AmountNudgedBy={die1AmountNudgedBy}
                die2AmountNudgedBy={die2AmountNudgedBy}
                nudgesUsed={nudgesUsed}
                onNudge={handleNudge}
                rollDice={rollDice}
            />
            <ScoreIndicator scoreIndicatorId={constants.SCORE_INDICATOR_ID}
                scorePId={constants.SCORE_PARAGRAPH_ID}
                score={score}
            />
            <RestartTray restartTrayId="restart-tray"
                restartButtonId={constants.RESTART_BUTTON_ID}
                onClick={handleRestart}
            />
            <AlertTray alertTrayId={constants.ALERT_TRAY_ID}
                paragraphId={constants.ALERT_PARAGRAPH_ID}
                alertParagraphText={alertParagraphText}
            />
        </div>
    );
}
