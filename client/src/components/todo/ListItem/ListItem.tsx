import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

import { Checkbox } from "../../common/Checkbox";
import { StyledListButtonContainer, StyledListContainer, StyledListItem, StyledListItemLabel } from "./StyledListItem";
import { ListItemType } from "./ListItemType";
import { Form } from "../../form";
import { Button } from "../../common/Button";

export const ListItem = ({ id, label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete }: ListItemType) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <StyledListItem>
            <StyledListContainer>
                <Checkbox checked={isDone} onCheckedChange={(isChecked) => onItemDoneToggle(Boolean(isChecked), id)} />
                <StyledListItemLabel>
                    {isEditing ? (
                        <Form
                            initialValue={label}
                            onSubmit={(label) => onItemLabelEdit(label, id)}
                            onCancel={() => setIsEditing(false)}
                        />
                    ) : (
                        label
                    )}
                </StyledListItemLabel>
            </StyledListContainer>
            <StyledListButtonContainer>
                <Button variant={"edit"} onClick={() => setIsEditing(true)}>
                    <Pencil1Icon />
                </Button>
                <Button variant={"delete"} onClick={() => onItemDelete(id)}>
                    <TrashIcon />
                </Button>
            </StyledListButtonContainer>
        </StyledListItem>
    );
};
