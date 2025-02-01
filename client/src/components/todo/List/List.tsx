import React from "react";
import { StyledList } from "./StyledList";
import { ListProps } from "./ListProps";
import { ListItem } from "../ListItem/ListItem";

export const List = ({ todoItems }: ListProps) => {
    return (
        <StyledList>
            {todoItems.map((todoItem) => (
                <ListItem
                    key={todoItem.id}
                    id={todoItem.id}
                    label={todoItem.label}
                    isDone={todoItem.isDone}
                    onItemLabelEdit={todoItem.onItemLabelEdit}
                    onItemDoneToggle={todoItem.onItemDoneToggle}
                    onItemDelete={todoItem.onItemDelete}
                />
            ))}
        </StyledList>
    );
};
