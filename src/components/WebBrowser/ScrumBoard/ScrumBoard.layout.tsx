import React from "react";
import {
    StyledScrumBoard,
    StyledScrumBoardTitle,
    StyledScrumBoardColumn,
    StyledScrumBoardCell,
    StyledScrumBoardCard
} from "./ScrumBoard.styled";
import {ScrumBoardProps} from "./ScrumBoard.types";

export const scrumBoardColumnsTitles = ["TO DO", "IN PROGRESS", "TO_VERIFY", "DONE"]

export const ScrumBoard: React.FC<ScrumBoardProps> = (props) => {
    return (
        <StyledScrumBoard>
            {
                scrumBoardColumnsTitles.map((title, idx) => {
                    return (
                        title === "TO DO"
                        ?
                        <StyledScrumBoardColumn>
                            <StyledScrumBoardTitle>
                                {title}
                            </StyledScrumBoardTitle>
                            {props.currentFile.items.map((item, idx2) => {
                                return (
                                    <StyledScrumBoardCell
                                    style={{gridRowStart: idx + 2 + idx2}}
                                    >
                                        <StyledScrumBoardCard>
                                        {item}
                                        </StyledScrumBoardCard>
                                    </StyledScrumBoardCell>
                                )
                            })}
                        </StyledScrumBoardColumn>
                        :
                        <StyledScrumBoardColumn>
                            <StyledScrumBoardTitle>
                                {title}
                            </StyledScrumBoardTitle>
                            {props.currentFile.items.map((item, idx3) => {
                                return (
                                    <StyledScrumBoardCell
                                        style={{gridRowStart: 2 + idx3}}
                                    >

                                    </StyledScrumBoardCell>
                                )
                            })}
                        </StyledScrumBoardColumn>
                )
                })
            }
        </StyledScrumBoard>
    )
}