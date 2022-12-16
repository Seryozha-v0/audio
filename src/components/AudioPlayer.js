import React from "react";

import { useState, useEffect, useRef } from "react";

const AudioPlayer = (( {musics} ) => {
    const [musicIndex, setMusicIndex] = useState(0);
    const [musicProgress, setMusicProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const { title, artist, image, audioSrc } = musics[musicIndex];

    const audioRef = useRef(new Audio(audioSrc));
    const interval = useRef();
    const isReady = useRef(false);
    
    const { duration } = audioRef.current;

    const toPrevTrack = () => {
        console.log('Go to prev');
    }

    const toNextTrack = () => {
        console.log('Go to next');
    }

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
                </div>
            </div>
        </div>
    )
})

export default AudioPlayer;