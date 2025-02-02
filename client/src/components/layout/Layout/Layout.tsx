import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { StyledContent, StyledLayout } from "./StyledLayout";
import { LayoutProps } from "./LayoutProps";
import { mutate } from "swr";

export const Layout = ({ children, todoItems, doneItems }: LayoutProps) => {
    const handleAdd = async (label: string) => {
        await fetch("http://localhost:3000/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label }),
        });
        await mutate("/api/items");
    };

    return (
        <StyledLayout>
            <Header onItemAdd={handleAdd} title={"To Do app"} />
            <StyledContent>{children}</StyledContent>
            <Footer todoItems={todoItems} doneItems={doneItems} />
        </StyledLayout>
    );
};
