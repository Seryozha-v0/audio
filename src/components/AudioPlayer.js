import React from "react";

import { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import AudioList from "./AudioList";

const AudioPlayer = (({
    music,
    isPlaying,
    toPrevMusic,
    toNextMusic,
    setIsPlaying,
    musicProgress,
    onScrub,
    onScrubEnd,
    duration
}) => {
    const { title, artist, image } = music;


    return (
        <div className="audioPlayer">
            <div className="audioPlayer__info">
                <img
                    className="audioPlayer__img"
                    src={image}
                    alt={`${title} - ${artist}`}
                />
                <div className="audioPlayer__descr">
                    <h2 className="audioPlayer__title">{title}</h2>
                    <h3 className="audioPlayer__artist">{artist}</h3>
                    {isPlaying ? (
                        <div className="audioPlayer__time">
                            <span> {Math.floor(duration / 60)} : {Math.floor(duration % 60)} </span>
                            /
                            <span> {Math.floor(musicProgress / 60)} : {Math.floor(musicProgress % 60)} </span>
                        </div>
                    ) : ''}
                </div>

                <AudioControls
                    isPlaying={isPlaying}
                    onPrevClick={toPrevMusic}
                    onNextClick={toNextMusic}
                    onPlayPauseClick={setIsPlaying}
                />

                <input
                    type="range"
                    value={musicProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="audioPlayer__progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                />
            </div>
        </div>
    )
})

export default AudioPlayer;