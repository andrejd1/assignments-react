import React, { useState } from "react";
import { AddIconButton, StyledHeader } from "./StyledHeader";
import { HeaderProps } from "./HeaderProps";
import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "../../form";

export const Header = ({ title, onItemAdd }: HeaderProps) => {
    const [isAdding, setIsAdding] = useState(false);

    return (
        <StyledHeader>
            <h1>{title}</h1>
            {isAdding ? (
                <Form initialValue={""} onSubmit={onItemAdd} onCancel={() => setIsAdding(false)} />
            ) : (
                <AddIconButton onClick={() => setIsAdding(true)}>
                    <PlusIcon />
                </AddIconButton>
            )}
        </StyledHeader>
    );
};
