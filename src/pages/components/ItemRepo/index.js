import React from "react";

import { ItemContainer } from "./styles";
const ItemRepo = ({repo, handleRemoveRepo}) => {

    const handleRemove = () => {
      handleRemoveRepo(repo.id)
    }
    return(
        <ItemContainer key={repo.id} onClick={handleRemove}>
          <h3>{repo.name}</h3>
          <p> {repo.full_name}</p>
          <a href={repo.html_url} target="_blank" rel="noreferrer"> Ir para repo </a>
          <br />
          <a href='#' className="remover" rel="noreferrer"> remover </a>
          <hr />

        </ItemContainer>
    )

}

export default ItemRepo