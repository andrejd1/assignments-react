import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

import { Checkbox } from "../../common/Checkbox";
import { StyledListButtonContainer, StyledListContainer, StyledListItem, StyledListItemLabel } from "./StyledListItem";
import { ListItemType } from "./ListItemType";
import { Form } from "../../form";
import { mutate } from "swr";

export const ListItem = ({ id, label, isDone, onItemDoneToggle, onItemDelete }: ListItemType) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = async (label: string) => {
        // await fetch(`${import.meta.env.VITE_API_URL}/api/todos/${id}`, {
        await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label }),
        });
        await mutate("/api/items");
    };

    return (
        <StyledListItem>
            <StyledListContainer>
                <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
                <StyledListItemLabel>
                    {isEditing ? (
                        <Form initialValue={label} onSubmit={handleEdit} onCancel={() => setIsEditing(false)} />
                    ) : (
                        label
                    )}
                </StyledListItemLabel>
            </StyledListContainer>
            <StyledListButtonContainer>
                <button onClick={() => setIsEditing(true)}>
                    <Pencil1Icon />
                </button>
                <button onClick={() => onItemDelete()}>
                    <TrashIcon />
                </button>
            </StyledListButtonContainer>
        </StyledListItem>
    );
};
