import React from "react";
import { Button } from "./styles";


const ButtonItem = ({onClick}) => {

    return(
        <Button  onClick={onClick}> Pesquisar </Button>
    )
}

export default ButtonItem