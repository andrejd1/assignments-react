import React, { useState } from "react";
import { AddTodoForm } from "../../todo/AddTodoForm/AddTodoForm";
import { AddIconButton, StyledHeader } from "./StyledHeader";
import { HeaderProps } from "./HeaderProps";
import { PlusIcon } from "@radix-ui/react-icons";

export const Header = ({ children }: HeaderProps) => {
    const [isAdding, setIsAdding] = useState(false);

    const handleAdd = async (label: string) => {
        await fetch("/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label }),
        });
        setIsAdding(false);
    };

    return (
        <StyledHeader>
            <h1>{children}</h1>
            {isAdding ? (
                <AddTodoForm onAdd={handleAdd} onCancel={() => setIsAdding(false)} />
            ) : (
                <AddIconButton onClick={() => setIsAdding(true)}>
                    <PlusIcon />
                </AddIconButton>
            )}
        </StyledHeader>
    );
};
