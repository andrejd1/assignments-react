import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";

import { Checkbox } from "../../common/Checkbox";
import { StyledListItem, StyledListItemLabel } from "./StyledListItem";
import { ListItemProps } from "./ListItemProps";


export const ListItem = ({ label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete }: ListItemProps) => {
    
    return (
        <StyledListItem>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <StyledListItemLabel>{label}</StyledListItemLabel>
            <button>
                <TrashIcon />
            </button>
            <button onClick={() => onItemDelete()}>
                <Pencil1Icon />
            </button>
        </StyledListItem>
    );
};
