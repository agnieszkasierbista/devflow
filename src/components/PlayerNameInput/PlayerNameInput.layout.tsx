import React from 'react';
import {StyledPlayerNameInput} from './PlayerNameInput.styled';
import {PlayerNameInputProps} from "./PlayerNameInput.types";

export const PlayerNameInput: React.FC<PlayerNameInputProps> = (props) => {

    const {
        playerName,
        dispatchChangePlayerName,
        dispatchClosePlayerNameInput,
    } = props;

    return (
        props.isPlayerNameInputVisible
            ? (
                <StyledPlayerNameInput>

                    Choose your name and start the game!
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
                </StyledPlayerNameInput>
            )
            : null
    )
}