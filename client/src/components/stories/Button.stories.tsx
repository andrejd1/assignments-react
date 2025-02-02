import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../common/Button";
import { CheckIcon, Cross1Icon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Button> = {
    title: "Common/Button",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: "edit",
        children: "Default",
    },
};

export const Edit: Story = {
    args: {
        variant: "edit",
        children: <Pencil1Icon />,
    },
};

export const Delete: Story = {
    args: {
        variant: "delete",
        children: <TrashIcon />,
    },
};

export const Check: Story = {
    args: {
        variant: "check",
        children: <CheckIcon />,
    },
};

export const Cancel: Story = {
    args: {
        variant: "cancel",
        children: <Cross1Icon />,
    },
};
