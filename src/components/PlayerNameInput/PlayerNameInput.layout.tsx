import React from 'react';
import {PlayerNameInputProps} from "./PlayerNameInputProps.types";

export const PlayerNameInput: React.FC<PlayerNameInputProps> = (props) => {

    const {
        playerName,
        dispatchChangePlayerName,
        dispatchClosePlayerNameInput,
    } = props;


    return (
        props.isPlayerNameInputVisible
            ?
        (<div>
            <input
                placeholder="Type your name here"
                value={playerName}
                type="text"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {

                    event.preventDefault();

                    dispatchChangePlayerName(event.target.value);

                }}
            />
            <button
                onClick={() => {
                    dispatchClosePlayerNameInput();
                }}
            >
                GO!
            </button>
        </div>)
            : null
    )
}