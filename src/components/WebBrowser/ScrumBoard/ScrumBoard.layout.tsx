import React from "react";
import {StyledScrumBoard, StyledScrumBoardCell, StyledScrumBoardRow, StyledScrumBoardTitle} from "./ScrumBoard.styled";
import {ScrumBoardProps} from "./ScrumBoard.types";
import ScrumBoardItem from "./ScrumBoardItems/ScrumBoardItem";

export const scrumBoardColumnsTitles = ["TO DO", "IN PROGRESS", "TO VERIFY", "DONE"]

export const ScrumBoard: React.FC<ScrumBoardProps> = (props) => {
    return (
        <StyledScrumBoard>
            <StyledScrumBoardRow>
                {
                    scrumBoardColumnsTitles.map((title, idx) => {

                        return (
                            <StyledScrumBoardTitle
                                key={idx}
                            >
                                {title}
                            </StyledScrumBoardTitle>
                        )
                    })
                }
            </StyledScrumBoardRow>

            {
                // @ts-ignore
                props.currentFileScrumBoard.shuffledItemsArray.map((taskRow, idx2) => {

                    return (
                        <StyledScrumBoardRow
                            key={idx2}
                        >
                            {
                                // @ts-ignore
                                taskRow.map((cell, idx3) => {
                                    return (
                                        <StyledScrumBoardCell
                                            key={idx3}
                                        >
                                            <ScrumBoardItem
                                                item={cell}
                                                idx={idx3}
                                                rowIdx={idx2}
                                            />
                                        </StyledScrumBoardCell>
                                    )
                                })
                            }
                        </StyledScrumBoardRow>
                    )
                })
            }

        </StyledScrumBoard>
    )
}

