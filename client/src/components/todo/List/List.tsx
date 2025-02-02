import React from "react";
import { StyledList } from "./StyledList";
import { ListProps } from "./ListProps";
import { ListItem } from "../ListItem/ListItem";
import { mutate } from "swr";

export const List = ({ todoItems }: ListProps) => {
    const onItemLabelEdit = async (id: number, label: string) => {
        await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label }),
        });
        await mutate("/api/items");
    };

    const onItemDoneToggle = async (id: number, isDone: boolean) => {
        await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ isDone: isDone }),
        });
        await mutate("/api/items");
    };

    const onItemDelete = async (id: number, label: string) => {
        const confirmed = window.confirm(`Are you sure you want to delete the item "${label}"?`);
        if (!confirmed) return;

        await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: "DELETE",
        });
        await mutate("/api/items");
    };

    return (
        <StyledList>
            {todoItems.map((todoItem) => (
                <ListItem
                    key={todoItem.id}
                    id={todoItem.id}
                    createdAt={todoItem.createdAt}
                    label={todoItem.label}
                    isDone={todoItem.isDone}
                    onItemLabelEdit={(label) => onItemLabelEdit(todoItem.id, label)}
                    onItemDoneToggle={(isDone) => onItemDoneToggle(todoItem.id, isDone)}
                    onItemDelete={() => onItemDelete(todoItem.id, todoItem.label)}
                />
            ))}
        </StyledList>
    );
};
