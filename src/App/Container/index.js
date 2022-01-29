import styled from "styled-components";

export const Container = styled.main`
    background: ${({ theme }) => theme.color.white};
    padding: 0 30px 15px;
    border: solid 2px ${({ theme }) => theme.color.black};
    border-radius: 25px;
    box-shadow: 0px 0px 20px 2px;
    max-width: 800px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            padding: 15px;
            margin: 10px;
    };
`;