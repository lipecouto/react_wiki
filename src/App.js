import React from "react";
import { useState } from "react";
import gitlogo from './assets/logo/gitlogo.png'
import { Container } from "./pages/styles";
import Input from "./pages/components/input";
import ButtonItem from "./pages/components/Button";
import ItemRepo from "./pages/components/ItemRepo";


import apiAxios from "./services/api";

function App() {
  const [repos, setRepos] = useState([]);
  const [pesquisa, setPesquisa] = useState('')

  const handleSearchRepo = async () =>{

    const { data } = await apiAxios.get(`repos/${pesquisa}`)
    if(data.id){
      const isExists = repos.find(repo => repo.id === data.id)
      
      //if(!isExists){
        setRepos(prev => [...prev, data]);
        setPesquisa('')
        return;
     // }
    }
    
    alert('Repositório não encontrato')
  }

  const handleRemoveRepo = (id) =>{
    //TODO criar mecanismo de remover o registro da tela
    //utilizar filter para remover.
    
    const exist = repos.filter(e => e.id === id)
    if(exist){
      const remove = exist.map(e => e.id).indexOf(id)
      console.log(id)
      repos.splice(remove, 1)
      setRepos([...repos])
      console.log(repos)
    }
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='logo'></img>
      <Input onChange={e => setPesquisa(e.target.value)} value={pesquisa}/>
      <ButtonItem onClick={handleSearchRepo}/>
      {repos.map((item) => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={item}/>)}
    </Container>
  );
}

export default App;
