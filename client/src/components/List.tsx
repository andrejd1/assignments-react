import styled from "styled-components";
import React from "react";

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

type ListItemProps = {
    children?: React.ReactNode;
};

export const List = ({ children }: ListItemProps) => {
    return <StyledList>{children}</StyledList>;
};
