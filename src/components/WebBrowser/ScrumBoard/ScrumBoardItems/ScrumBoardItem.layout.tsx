import {StyledScrumBoardCard} from "./ScrumBoardItem.styled"
import {ScrumBoardItemsProps} from "./ScrumBoardItem.types";

export const ScrumBoardItem: React.FC<ScrumBoardItemsProps> = (props) => {
    return(
        <StyledScrumBoardCard>
            {props.item}
        </StyledScrumBoardCard>
    )
}