    import styled from "styled-components";

    export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;
    @media (max-width: 750px) {
        width: 20%;
        p {
        font-size: 12px;
        }
        span {
        font-size: 20px;
        }
        svg {
        display: none;
        }
    }
    `;

    export const Header = styled.header`  //esses controlar as 3 caixinhas de entrada
    display: flex;                          //saida e total
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;
    svg {
        width: 25px;
        height: 25px;
    }
    `;

    export const HeaderTitle = styled.p`
    font-size: 20px;            //esse controla o tamanho das letras
    `;

    export const Total = styled.span`
    font-size: 30px;   //esse o tamanho do simbolo do dinheiro 
    font-weight: bold; /// does it looks better not bold?!
    `;