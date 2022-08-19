    import React from "react";
    import ResumeItem from "../ResumeItem";
    import * as C from "./styles";
    import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
    } from "react-icons/fa";

    const Resume = ({ income, expense, total }) => {
    return (
        <C.Container>
        <ResumeItem
            title="Entradas"  //italian for start
            Icon={FaRegArrowAltCircleUp}
            value={income}
        />
        <ResumeItem
            title="Saídas"  //what was removed from 
            Icon={FaRegArrowAltCircleDown}
            value={expense}
        />
        <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
        </C.Container>  //total DUH
    );
    };

    export default Resume;