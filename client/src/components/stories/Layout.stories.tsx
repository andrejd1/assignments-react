import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "../layout/Layout/Layout";
import { ListItem } from "../todo/ListItem/ListItem";

const meta: Meta<typeof Layout> = {
    title: "Layout/Layout",
    component: Layout,
    tags: ["autodocs"],
    argTypes: {
        children: { control: "object" },
        todoItems: { control: "object" },
        doneItems: { control: "object" },
    },
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const EmptyState: Story = {
    args: {
        todoItems: 0,
        doneItems: 0,
    },
};

export const WithItems: Story = {
    args: {
        children: [
            <ListItem
                key="1"
                label="Item 1"
                isDone={false}
                createdAt={123987890}
                id={1}
                onItemDelete={() => {}}
                onItemDoneToggle={() => {}}
                onItemLabelEdit={() => {}}
            />,
            <ListItem
                key="2"
                label="Item 2"
                isDone={false}
                createdAt={123987890}
                id={2}
                onItemDelete={() => {}}
                onItemDoneToggle={() => {}}
                onItemLabelEdit={() => {}}
            />,
            <ListItem
                key="3"
                label="Item 3"
                isDone={true}
                createdAt={123987890}
                id={3}
                onItemDelete={() => {}}
                onItemDoneToggle={() => {}}
                onItemLabelEdit={() => {}}
            />,
        ],
        todoItems: 10,
        doneItems: 5,
    },
};
