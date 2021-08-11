import React from "react";
import {
    StyledScrumBoard,
    StyledScrumBoardCell,
    StyledScrumBoardColumn,
    StyledScrumBoardTitle
} from "./ScrumBoard.styled";
import {ScrumBoardProps} from "./ScrumBoard.types";
import {StyledScrumBoardCard} from "./ScrumBoardItems/ScrumBoardItem.styled";
import {ScrumBoardItem} from "./ScrumBoardItems/ScrumBoardItem.layout";

export const scrumBoardColumnsTitles = ["TO DO", "IN PROGRESS", "TO_VERIFY", "DONE"]

export const ScrumBoard: React.FC<ScrumBoardProps> = (props) => {
    return (
        <StyledScrumBoard>
            {
                scrumBoardColumnsTitles.map((title, idx) => {
                    return (
                        title === "TO DO"
                            ?
                            <StyledScrumBoardColumn
                                key={title}
                            >
                                <StyledScrumBoardTitle>
                                    {title}
                                </StyledScrumBoardTitle>
                                {props.currentFile.items.map((item, idx2) => {
                                    return (
                                        <StyledScrumBoardCell
                                            style={{gridRowStart: idx + 2 + idx2}}
                                            key={idx + "-" + idx2}
                                        >
                                            <ScrumBoardItem
                                            item={item}
                                            />
                                        </StyledScrumBoardCell>
                                    )
                                })}
                            </StyledScrumBoardColumn>
                            :
                            <StyledScrumBoardColumn
                                key={title}
                            >
                                <StyledScrumBoardTitle>
                                    {title}
                                </StyledScrumBoardTitle>
                                {props.currentFile.items.map((item, idx3) => {
                                    return (
                                        <StyledScrumBoardCell
                                            style={{gridRowStart: 2 + idx3}}
                                            key={idx + "-" + idx3}
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