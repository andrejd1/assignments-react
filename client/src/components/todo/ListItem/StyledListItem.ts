import styled from "styled-components";

export const StyledListButtonContainer = styled.div`
    display: flex;
    visibility: hidden;
    gap: 0.5rem;
`;

export const StyledListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 0;
    width: 100%;

    &:hover ${StyledListButtonContainer} {
        visibility: visible;
    }
`;

export const StyledListContainer = styled.div`
    display: flex;
`;

export const StyledListItemLabel = styled.label`
    display: flex;
    margin-left: 15px;
    align-items: center;
`;
