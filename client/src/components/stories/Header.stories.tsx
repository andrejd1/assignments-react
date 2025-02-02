import { Meta, StoryObj } from "@storybook/react";

import { Header } from "../layout/Header/Header";

const meta = {
    title: "Layout/Header",
    component: Header,
    argTypes: {
        onItemAdd: { action: "item added" },
    },
} as Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        title: "Headline title",
    },
};
