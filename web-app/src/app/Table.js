"use client"

import React, { useState, useEffect, Fragment } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";
import Feature from "./Feature";
import Ball from "./Ball";
import Box from "./Box";
import RoundIndicator from "./RoundIndicator";
import Outlane from "./Outlane";
import DashedBox from "./DashedBox";

export default function Table(props) {
    //#region state
    //#region box-background-colors
    const [ferriswheelcar12BoxBackgroundColor, setFerriswheelcar12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [ferriswheelcar34BoxBackgroundColor, setFerriswheelcar34BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [ferriswheelcar56BoxBackgroundColor, setFerriswheelcar56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper121st1BoxBackgroundColor, setBumper121st1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper122nd1BoxBackgroundColor, setbumper122nd1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper121st2BoxBackgroundColor, setbumper121st2BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper122nd2BoxBackgroundColor, setbumper122nd2BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper341st3BoxBackgroundColor, setbumper341st3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper342nd3BoxBackgroundcolor, setbumper342nd3BoxBackgroundcolor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper341st4BoxBackgroundColor, setbumper341st4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper342nd4BoxBackgroundColor, setbumper342nd4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper561st5BoxBackgroundColor, setbumper561st5BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper562nd5BoxBackgroundColor, setbumper562nd5BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper561st6BoxBackgroundColor, setbumper561st6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper562nd6BoxBackgroundColor, setbumper562nd6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace1BoxBackgroundColor, sethammerspace1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace2BoxBackgroundColor, sethammerspace2BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace3BoxBackgroundColor, sethammerspace3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace4BoxBackgroundColor, sethammerspace4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace5BoxBackgroundColor, sethammerspace5BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace6BoxBackgroundColor, sethammerspace6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelDroptarget12BoxBackgroundColor, setyelDroptarget12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelDroptarget34BoxBackgroundColor, setyelDroptarget34BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelDroptarget56BoxBackgroundColor, setyelDroptarget56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget12BoxBackgroundColor, setredDroptarget12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget3BoxBackgroundColor, setredDroptarget3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget4BoxBackgroundColor, setredDroptarget4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget56BoxBackgroundColor, setredDroptarget56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redOutlaneBoxBackgroundColor, setredOutlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelOutlaneBoxBackgroundColor, setyelOutlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redInlaneBoxBackgroundColor, setredInlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelInlaneBoxBackgroundColor, setyelInlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox3BoxBackgroundColor, setredFlipperBox3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox45BoxBackgroundColor, setredFlipperBox45BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox6BoxBackgroundColor, setredFlipperBox6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox1BoxBackgroundColor, setyelFlipperBox1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox23BoxBackgroundColor, setyelFlipperBox23BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox4BoxBackgroundColor, setyelFlipperBox4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [drainBoxBackgroundColor, setdrainBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion
    //#endregion

    useEffect(function clearDashedBoxes() {
        for (const dashedBoxId of constants.DASHED_BOX_IDS) {
            document.getElementById(dashedBoxId).style.backgroundColor = "transparent";
        }
    }, [props.round]);

    return (
        <div id={props.tableId}>
            <img src="/images/carniball.jpg" alt="Carniball board" />
            <Feature featureId={constants.START_FEATURE_ID}
                left={constants.START_LEFT}
                top={constants.START_TOP}
            />
            <Fragment key="ferriswheel">
                <Fragment key="ferriswheelcar12">
                    <Feature featureId={constants.FERRISWHEEL_CAR_12_FEATURE_ID}
                        left="182px"
                        top="304px"
                    />
                    <Box boxId={constants.FERRISWHEEL_CAR_12_BOX_ID}
                        canReceiveOn={[1, 2]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.FERRISWHEEL_CAR_12_FEATURE_ID}
                        groupBoxIds={constants.FERRISWHEEL_GROUP_BOX_IDS}
                        left="160px"
                        top="246px"
                        height="48px"
                        width="65px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="ferriswheelcar34">
                    <Feature featureId={constants.FERRISWHEEL_CAR_34_FEATURE_ID}
                        left="274px"
                        top="280px"
                    />
                    <Box boxId={constants.FERRISWHEEL_CAR_34_BOX_ID}
                        canReceiveOn={[3, 4]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.FERRISWHEEL_CAR_34_FEATURE_ID}
                        groupBoxIds={constants.FERRISWHEEL_GROUP_BOX_IDS}
                        left="255px"
                        top="230px"
                        height="40px"
                        width="62px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="ferriswheelcar56">
                    <Feature featureId={constants.FERRISWHEEL_CAR_56_FEATURE_ID}
                        left="365px"
                        top="304px"
                    />
                    <Box boxId={constants.FERRISWHEEL_CAR_56_BOX_ID}
                        canReceiveOn={[5, 6]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.FERRISWHEEL_CAR_56_FEATURE_ID}
                        groupBoxIds={constants.FERRISWHEEL_GROUP_BOX_IDS}
                        left="350px"
                        top="246px"
                        height="48px"
                        width="62px"
                        {...props}
                    />
                </Fragment>
            </Fragment>
            <Fragment key="bumpers">
                <Fragment key="bumper12">
                    <Feature featureId={constants.BUMPER_12_FEATURE_ID}
                        left="170px"
                        top="388px"
                    />
                    <Box boxId={constants.BUMPER_12_1ST_1_BOX_ID}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_12_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="155px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_2ND_1_BOX_ID}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_12_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="155px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_1ST_2_BOX_ID}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_12_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="185px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_2ND_2_BOX_ID}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_12_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="185px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="bumper34">
                    <Feature featureId={constants.BUMPER_34_FEATURE_ID}
                        left="303px"
                        top="388px"
                    />
                    <Box boxId={constants.BUMPER_34_1ST_3_BOX_ID}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_34_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="288px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_2ND_3_BOX_ID}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_34_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="288px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_1ST_4_BOX_ID}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_34_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="317px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_2ND_4_BOX_ID}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_34_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="317px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="bumper56">
                    <Feature featureId={constants.BUMPER_56_FEATURE_ID}
                        left="236px"
                        top="490px"
                    />
                    <Box boxId={constants.BUMPER_56_1ST_5_BOX_ID}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_56_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="221px"
                        top="475px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_2ND_5_BOX_ID}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_56_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="221px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_1ST_6_BOX_ID}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_56_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="251px"
                        top="475px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_2ND_6_BOX_ID}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_56_FEATURE_ID}
                        groupBoxIds={constants.BUMPER_GROUP_BOX_IDS}
                        left="251px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
            </Fragment>
            <Fragment key="hammerspaces">
                <Fragment key="hammerspace-1">
                    <Feature featureId={constants.HAMMER_SPACE_1_FEATURE_ID}
                        left="376px"
                        top="535px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_1_BOX_ID}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_1_FEATURE_ID}
                        groupBoxIds={constants.HAMMER_SPACE_GROUP_BOX_IDS}
                        left="376px"
                        top="535px"
                        height="25px"
                        width="25px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-2">
                    <Feature featureId={constants.HAMMER_SPACE_2_FEATURE_ID}
                        left="388px"
                        top="505px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_2_BOX_ID}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_2_FEATURE_ID}
                        groupBoxIds={constants.HAMMER_SPACE_GROUP_BOX_IDS}
                        left="388px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-3">
                    <Feature featureId={constants.HAMMER_SPACE_3_FEATURE_ID}
                        left="398px"
                        top="477px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_3_BOX_ID}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_3_FEATURE_ID}
                        groupBoxIds={constants.HAMMER_SPACE_GROUP_BOX_IDS}
                        left="398px"
                        top="477px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-4">
                    <Feature featureId={constants.HAMMER_SPACE_4_FEATURE_ID}
                        left="409px"
                        top="448px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_4_BOX_ID}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_4_FEATURE_ID}
                        groupBoxIds={constants.HAMMER_SPACE_GROUP_BOX_IDS}
                        left="409px"
                        top="448px"
                        height="25px"
                        width="25px"
                        points="2"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-5">
                    <Feature featureId={constants.HAMMER_SPACE_5_FEATURE_ID}
                        left="420px"
                        top="420px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_5_BOX_ID}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_5_FEATURE_ID}
                        groupBoxIds={constants.HAMMER_SPACE_GROUP_BOX_IDS}
                        left="420px"
                        top="420px"
                        height="25px"
                        width="25px"
                        points="5"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-6">
                    <Feature featureId={constants.HAMMER_SPACE_6_FEATURE_ID}
                        left="430px"
                        top="390px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_6_BOX_ID}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_6_FEATURE_ID}
                        groupBoxIds={constants.HAMMER_SPACE_GROUP_BOX_IDS}
                        left="430px"
                        top="390px"
                        height="25px"
                        width="25px"
                        points="20"
                        {...props}
                    />
                </Fragment>
            </Fragment>
            <Fragment key="droptargets">
                <Fragment key="yelDropTargets">
                    <Fragment key="yelDropTarget12">
                        <Feature featureId={constants.YEL_DROPTARGET_12_FEATURE_ID}
                            left="35px"
                            top="700px"
                        />
                        <Box boxId={constants.YEL_DROPTARGET_12_BOX_ID}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.YEL_DROPTARGET_12_FEATURE_ID}
                            groupBoxIds={constants.YEL_DROPTARGET_GROUP_BOX_IDS}
                            left="30px"
                            top="675px"
                            height="60px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="yelDropTarget34">
                        <Feature featureId={constants.YEL_DROPTARGET_34_FEATURE_ID}
                            left="65px"
                            top="630px"
                        />
                        <Box boxId={constants.YEL_DROPTARGET_34_BOX_ID}
                            canReceiveOn={[3, 4]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.YEL_DROPTARGET_34_FEATURE_ID}
                            groupBoxIds={constants.YEL_DROPTARGET_GROUP_BOX_IDS}
                            left="60px"
                            top="615px"
                            height="60px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="yelDropTarget56">
                        <Feature featureId={constants.YEL_DROPTARGET_56_FEATURE_ID}
                            left="100px"
                            top="575px"
                        />
                        <Box boxId={constants.YEL_DROPTARGET_56_BOX_ID}
                            canReceiveOn={[5, 6]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.YEL_DROPTARGET_56_FEATURE_ID}
                            groupBoxIds={constants.YEL_DROPTARGET_GROUP_BOX_IDS}
                            left="95px"
                            top="560px"
                            height="60px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                </Fragment>
                <Fragment key="redDropTargets">
                    <Fragment key="redDropTarget12">
                        <Feature featureId={constants.RED_DROPTARGET_12_FEATURE_ID}
                            left="418px"
                            top="585px"
                        />
                        <Box boxId={constants.RED_DROPTARGET_12_BOX_ID}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.RED_DROPTARGET_12_FEATURE_ID}
                            groupBoxIds={constants.RED_DROPTARGET_GROUP_BOX_IDS}
                            left="415px"
                            top="570px"
                            height="50px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget3">
                        <Feature featureId={constants.RED_DROPTARGET_3_FEATURE_ID}
                            left="440px"
                            top="628px"
                        />
                        <Box boxId={constants.RED_DROPTARGET_3_BOX_ID}
                            canReceiveOn={[3]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.RED_DROPTARGET_3_FEATURE_ID}
                            groupBoxIds={constants.RED_DROPTARGET_GROUP_BOX_IDS}
                            left="435px"
                            top="621px"
                            height="40px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget4">
                        <Feature featureId={constants.RED_DROPTARGET_4_FEATURE_ID}
                            left="460px"
                            top="674px"
                        />
                        <Box boxId={constants.RED_DROPTARGET_4_BOX_ID}
                            canReceiveOn={[4]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.RED_DROPTARGET_4_FEATURE_ID}
                            groupBoxIds={constants.RED_DROPTARGET_GROUP_BOX_IDS}
                            left="455px"
                            top="665px"
                            height="42px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget56">
                        <Feature featureId={constants.RED_DROPTARGET_56_FEATURE_ID}
                            left="485px"
                            top="725px"
                        />
                        <Box boxId={constants.RED_DROPTARGET_56_BOX_ID}
                            canReceiveOn={[5, 6]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.RED_DROPTARGET_56_FEATURE_ID}
                            groupBoxIds={constants.RED_DROPTARGET_GROUP_BOX_IDS}
                            left="480px"
                            top="710px"
                            height="55px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                </Fragment>
            </Fragment>
            <Fragment key="outlanes">
                <Outlane boxId={constants.RED_OUTLANE_BOX_ID}
                    canReceiveOn={[1]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.DRAIN_FEATURE_ID}
                    relevantFlipperBoxIds={constants.RED_FLIPPER_GROUP_BOX_IDS}
                    left="18px"
                    top="815px"
                    {...props}
                />
                <Outlane boxId={constants.YEL_OUTLANE_BOX_ID}
                    canReceiveOn={[6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.DRAIN_FEATURE_ID}
                    relevantFlipperBoxIds={constants.YEL_FLIPPER_GROUP_BOX_IDS}
                    left="458px"
                    top="815px"
                    {...props}
                />
            </Fragment>
            <Fragment key="inlanes">
                <DashedBox boxId={constants.RED_INLANE_BOX_ID}
                    canReceiveOn={[2]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="94px"
                    top="821px"
                    height="25px"
                    width="25px"
                    points="2"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_INLANE_BOX_ID}
                    canReceiveOn={[5]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="419px"
                    top="821px"
                    height="25px"
                    width="25px"
                    points="2"
                    {...props}
                />
            </Fragment>
            <Fragment key="flippers">
                <Feature featureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="195px"
                    top="970px"
                />
                <Feature featureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="320px"
                    top="970px"
                />
            </Fragment>
            <Fragment key="redflipperboxes">
                <DashedBox boxId={constants.RED_FLIPPER_BOX_3_BOX_ID}
                    canReceiveOn={[3]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="215px"
                    top="840px"
                    height="35px"
                    width="40px"
                    {...props}
                />
                <DashedBox boxId={constants.RED_FLIPPER_BOX_45_BOX_ID}
                    canReceiveOn={[4, 5]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="195px"
                    top="875px"
                    height="45px"
                    width="45px"
                    {...props}
                />
                <DashedBox boxId={constants.RED_FLIPPER_BOX_6_BOX_ID}
                    canReceiveOn={[6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="178px"
                    top="915px"
                    height="45px"
                    width="45px"
                    {...props}
                />
            </Fragment>
            <Fragment key="yelflipperboxes">
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_1_BOX_ID}
                    canReceiveOn={[1]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="285px"
                    top="840px"
                    height="40px"
                    width="40px"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_23_BOX_ID}
                    canReceiveOn={[2, 3]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="300px"
                    top="875px"
                    height="45px"
                    width="45px"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_4_BOX_ID}
                    canReceiveOn={[4]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="315px"
                    top="915px"
                    height="45px"
                    width="45px"
                    {...props}
                />
            </Fragment>
            <Fragment key="drain">
                <Feature featureId={constants.DRAIN_FEATURE_ID}
                    left={constants.DRAIN_FEATURE_LEFT}
                    top={constants.DRAIN_FEATURE_TOP}
                />
                <Box boxId={constants.DRAIN_BOX_ID}
                    canReceiveOn={[1, 2, 3, 4, 5, 6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.DRAIN_FEATURE_ID}
                    groupBoxIds={constants.DRAIN_GROUP_BOX_ID}
                    left="220px"
                    top="920px"
                    height="85px"
                    width="98px"
                    {...props}
                />
            </Fragment>
            <Ball ballId={constants.BALL1_ID}
                left={constants.START_LEFT}
                top={constants.START_TOP}
                round={props.round}
                ballFeatureId={props.ball1FeatureId}
            />
            <Ball ballId={constants.BALL2_ID}
                left={constants.DRAIN_FEATURE_LEFT}
                top={constants.DRAIN_FEATURE_TOP}
                round={props.round}
                ballFeatureId={props.ball2FeatureId}
            />
            <Fragment key="roundindicators">
                <RoundIndicator RoundIndicatorId="round-1-indicator" forRound="1" top="950px" left="414px" {...props} />
                <RoundIndicator RoundIndicatorId="round-2-indicator" forRound="2" top="950px" left="451px" {...props} />
                <RoundIndicator RoundIndicatorId="round-3-indicator" forRound="3" top="950px" left="487px" {...props} />
            </Fragment>
        </div>
    );
}