import React from "react";

const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick,
}) => (
    <div className="audioControls">
        <button
            type="button"
            className="audioControls__btn"
            aria-label="Previous"
            onClick={onPrevClick}
        >
            Prev
        </button>
        {isPlaying ? (
            <button
                type="button"
                className="audioControls__btn"
                aria-label="Pause"
                onClick={() => onPlayPauseClick(false)}
            >
                Pause
            </button>
        ) : (
            <button
                type="button"
                className="audioControls__btn"
                aria-label="Play"
                onClick={() => onPlayPauseClick(true)}
            >
                Play
            </button>
        )}
        <button
            type="button"
            className="audioControls__btn"
            aria-label="Next"
            onClick={onNextClick}
        >
            Next
        </button>
    </div>
)

export default AudioControls;