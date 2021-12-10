import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child { //Quando for o primeiro elemento da TD
                color: var(--text-title);
            }

            &.deposit { //Quando encontrar um elemento na minha td que contenha a classe deposit
                color: var(--green);
            }

            &.withdraw { //Quando encontrar um elemento na minha td que contenha a classe withdraw
                color: var(--red);
            }
        }
    }
`;