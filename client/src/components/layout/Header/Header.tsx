import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import { StyledHeader } from "./StyledHeader";
import { HeaderProps } from "./HeaderProps";

export const Header = ({ children }: HeaderProps) => {
    
    return (
        <StyledHeader>
            <h1>{children}</h1>
            <button>
                <PlusIcon />
            </button>
        </StyledHeader>
    );
};
