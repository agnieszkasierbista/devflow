import React from 'react';
import {PlayerNameInputProps} from "./PlayerNameInputProps.types";

export const PlayerNameInput: React.FC<PlayerNameInputProps> = (props) => {

    const {
        playerName,
        dispatchChangePlayerName
    } = props;

    return (
        <div>
            <input
                value={playerName}
                onChange={(evt) => {
                    dispatchChangePlayerName(evt.target.value);
                }}
                type="text"/>
        </div>
    )
}