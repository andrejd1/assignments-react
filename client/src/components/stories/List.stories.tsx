import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { List } from "../todo/List/List";
import { ListItemType } from "../todo/ListItem/ListItemType";

const meta = {
    title: "List/List",
    component: List,
} as Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof List>;

const emptyHandlers: Pick<ListItemType, "onItemLabelEdit" | "onItemDoneToggle" | "onItemDelete"> = {
    onItemLabelEdit: action("Edit requested"),
    onItemDoneToggle: action("Done state change requested"),
    onItemDelete: action("Removal requested"),
};

export const WithItems: Story = {
    args: {
        todoItems: [
            { id: 1, label: "Lorem ipsum dolor", isDone: false, ...emptyHandlers, createdAt: 177888555 },
            {
                id: 2,
                label: "Nullam Adipiscing Ridiculus Fusce",
                isDone: false,
                ...emptyHandlers,
                createdAt: 177888555,
            },
            { id: 3, label: "Mattis Tristique Parturient", isDone: true, ...emptyHandlers, createdAt: 177888555 },
        ],
    },
};
