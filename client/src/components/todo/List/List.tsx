import React from "react";
import { StyledList } from "./StyledList";
import { ListProps } from "./ListProps";

export const List = ({ children }: ListProps) => {
    return <StyledList>{children}</StyledList>;
};
