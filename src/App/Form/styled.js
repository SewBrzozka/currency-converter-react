import styled from "styled-components";

export const Label = styled.label`
    display: grid;
    grid-template-columns: auto 180px;
    gap: 20px;
    padding-top: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: auto 160px;
    }
`;

export const WrapperButton = styled.p`
    display: flex;
    justify-content: center;
    margin: 0;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    padding: 15px 80px;
    border: none;
    box-shadow: none;
    border-radius: 8px;
    font-size: 24px;
    margin: 15px;
    color: ${({ theme }) => theme.color.gallery};

    &:hover {
        filter: brightness(110%);
    }
    
    &:active {
        filter: brightness(120%);
    }
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.color.emperor};
    font-size: 10px;
    text-align: center;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson};
`;