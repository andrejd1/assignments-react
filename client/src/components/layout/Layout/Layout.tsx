import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { StyledContent, StyledLayout } from "./StyledLayout";
import { LayoutProps } from "./LayoutProps";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <StyledLayout>
            <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
            <StyledContent>
                {children}
            </StyledContent>
            <Footer />
        </StyledLayout>
    );
};
