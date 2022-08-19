    import styled from "styled-components";

    export const Table = styled.table`
    width: 98%;
    background-color: #fff; //white ugly?
    padding: 20px;
    box-shadow: 0px 0px 26px pink;  //need to change bg color to grey? not showing the pink
    border-radius: 5px;             
    max-width: 1120px;
    margin: 20px auto;  //esse controla o espaco enyte ele e o de cima 
    `;

    export const Thead = styled.thead``;

    export const Tbody = styled.tbody``;

    export const Tr = styled.tr``;

    export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px; //ainda controla o de cima
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
    `;