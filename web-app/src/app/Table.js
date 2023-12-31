'use client'

import React, { useState } from "react"
import Feature from "./Feature";
import Ball from "./Ball";
import Box from "./Box";

export default function Table(props) {
    const [ball1FeatureId, setBall1FeatureId] = useState('start');
    const [ball2FeatureId, setBall2FeatureId] = useState('');
    const yelDropTargetGroupBoxIds = [
        'box-droptarget-yel-12',
        'box-droptarget-yel-34',
        'box-droptarget-yel-56'
    ];
    const redDropTargetGroupBoxIds = [
        'box-droptarget-red-12',
        'box-droptarget-red-3',
        'box-droptarget-red-4',
        'box-droptarget-red-56'
    ];
    const redFlipperGroupBoxIds = [
        'red-flipper-box-3',
        'red-flipper-box-45',
        'red-flipper-box-6'
    ];
    const yelFlipperGroupBoxIds = [
        'yel-flipper-box-1',
        'yel-flipper-box-23',
        'yel-flipper-box-4'
    ];
    const flipperGroupBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds];
    const flipperIds = [
        'red-flipper',
        'yel-flipper'
    ];
    const yelDropTargetFeatureIds = [
        'feature-droptarget-yel-12',
        'feature-droptarget-yel-34',
        'feature-droptarget-yel-56'
    ];
    const redDropTargetFeatureIds = [
        'feature-droptarget-red-12',
        'feature-droptarget-red-3',
        'feature-droptarget-red-4',
        'feature-droptarget-red-56'
    ];
    const allFeatureIds = [...flipperIds, ...yelDropTargetFeatureIds, ...redDropTargetFeatureIds, 'start'];

    function drainAction() {
        for (const flipperBoxId of flipperGroupBoxIds) {
            document.getElementById(flipperBoxId).style.backgroundColor = 'transparent';
        }
    }

    return (
        <div id="table">
            <img src="/images/carniball.jpg" alt="Carniball board" />
            <Feature featureId="feature-droptarget-yel-12"
                x="250px"
                y="700px"
            />
            <Box boxId="box-droptarget-yel-12"
                canReceiveOn={[1, 2]}
                canReceiveFrom={['yel-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-yel-12"
                groupBoxIds={yelDropTargetGroupBoxIds}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="245px"
                y="675px"
                height="60px"
                width="35px"
                {...props}
            />
            <Feature featureId="feature-droptarget-yel-34"
                x="285px"
                y="630px"
            />
            <Box boxId="box-droptarget-yel-34"
                canReceiveOn={[3, 4]}
                canReceiveFrom={['yel-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-yel-34"
                groupBoxIds={yelDropTargetGroupBoxIds}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="280px"
                y="615px"
                height="60px"
                width="35px"
                {...props}
            />
            <Feature featureId="feature-droptarget-yel-56"
                x="315px"
                y="575px"
            />
            <Box boxId="box-droptarget-yel-56"
                canReceiveOn={[5, 6]}
                canReceiveFrom={['yel-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-yel-56"
                groupBoxIds={yelDropTargetGroupBoxIds}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="310px"
                y="560px"
                height="60px"
                width="35px"
                {...props}
            />
            <Feature featureId="feature-droptarget-red-12"
                x="635px"
                y="585px"
            />
            <Box boxId="box-droptarget-red-12"
                canReceiveOn={[1, 2]}
                canReceiveFrom={['red-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-red-12"
                groupBoxIds={redDropTargetGroupBoxIds}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="630px"
                y="570px"
                height="50px"
                width="35px"
                {...props}
            />
            <Feature featureId="feature-droptarget-red-3"
                x="655px"
                y="628px"
            />
            <Box boxId="box-droptarget-red-3"
                canReceiveOn={[3]}
                canReceiveFrom={['red-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-red-3"
                groupBoxIds={redDropTargetGroupBoxIds}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="650px"
                y="621px"
                height="40px"
                width="35px"
                {...props}
            />
            <Feature featureId="feature-droptarget-red-4"
                x="680px"
                y="674px"
            />
            <Box boxId="box-droptarget-red-4"
                canReceiveOn={[4]}
                canReceiveFrom={['red-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-red-4"
                groupBoxIds={redDropTargetGroupBoxIds}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="675px"
                y="665px"
                height="42px"
                width="35px"
                {...props}
            />
            <Feature featureId="feature-droptarget-red-56"
                x="700px"
                y="725px"
            />
            <Box boxId="box-droptarget-red-56"
                canReceiveOn={[5, 6]}
                canReceiveFrom={['red-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-red-56"
                groupBoxIds={redDropTargetGroupBoxIds}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="695px"
                y="710px"
                height="55px"
                width="35px"
                {...props}
            />
            <Box boxId="red-flipper-box-3"
                canReceiveOn={[3]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='red-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="435px"
                y="840px"
                height="35px"
                width="40px"
                {...props}
            />
            <Box boxId="red-flipper-box-45"
                canReceiveOn={[4, 5]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='red-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="410px"
                y="875px"
                height="45px"
                width="45px"
                {...props}
            />
            <Box boxId="red-flipper-box-6"
                canReceiveOn={[6]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='red-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="390px"
                y="915px"
                height="45px"
                width="45px"
                {...props}
            />
            <Box boxId="yel-flipper-box-1"
                canReceiveOn={[1]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="500px"
                y="840px"
                height="40px"
                width="40px"
                {...props}
            />
            <Box boxId="yel-flipper-box-23"
                canReceiveOn={[2, 3]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="515px"
                y="875px"
                height="45px"
                width="45px"
                {...props}
            />
            <Box boxId="yel-flipper-box-4"
                canReceiveOn={[4]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="535px"
                y="915px"
                height="45px"
                width="45px"
                {...props}
            />
            <Feature featureId="red-flipper"
                x="410px"
                y="970px"
            />
            <Feature featureId="yel-flipper"
                x="540px" 
                y="970px"
            />
            <Feature featureId="start"
                x="660px"
                y="240px"
                height="50px"
                width="50px"
            />
            <Ball x="660px" y="240px" />
            <Box boxId="drain"
                canReceiveOn={[1, 2, 3, 4, 5, 6]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='start'
                action={drainAction}
                groupBoxIds={['drain']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="436px"
                y="920px"
                height="85px"
                width="98px"
                {...props}
            />
        </div>
    );
}