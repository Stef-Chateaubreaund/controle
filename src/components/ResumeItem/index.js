    import React from "react";
    import * as C from "./styles";
//   HOW DO I GET RID OF THIS PAGE? GUESSS WILL NEVER KNOW
    const ResumeItem = ({ title, Icon, value }) => {
    return (
        <C.Container>
        <C.Header>
            <C.HeaderTitle>{title}</C.HeaderTitle>
            <Icon />
        </C.Header>
        <C.Total>{value}</C.Total>
        </C.Container>
    );
    };

    export default ResumeItem;