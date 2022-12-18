import React from "react";

const AudioList = ({ musics, onPlayMusic, musicIndex, isPlaying, onPlayPauseClick }) => {
    return (
        <div className="audioList">
            {musics.map((item, i) => (
                <div key={i} className="audioList__item">
                    {(musicIndex === i) ? (
                        <button
                            type="button"
                            className="audioList__btn audioControls__btn"
                            aria-label="Pause"
                            onClick={isPlaying ? () => onPlayPauseClick(false) : () => onPlayPauseClick(true)}
                        >
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="audioList__btn audioControls__btn"
                            aria-label="Play"
                            onClick={() => onPlayMusic(i)}
                        >
                            Play
                        </button>
                    )}

                    <div className="audioList__desc">
                        <h2 className="audioList__title">
                            {item.title}
                        </h2>
                        <h3 className="audioList__artist">
                            {item.artist}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AudioList;