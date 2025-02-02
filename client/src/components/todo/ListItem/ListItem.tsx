import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";

import { Checkbox } from "../../common/Checkbox";
import { StyledListItem, StyledListItemLabel } from "./StyledListItem";
import { ListItemType } from "./ListItemType";

export const ListItem = ({ label, isDone, onItemDoneToggle, onItemDelete }: ListItemType) => {
    return (
        <StyledListItem>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <StyledListItemLabel>{label}</StyledListItemLabel>
            <button>
                <Pencil1Icon />
            </button>
            <button onClick={() => onItemDelete()}>
                <TrashIcon />
            </button>
        </StyledListItem>
    );
};
