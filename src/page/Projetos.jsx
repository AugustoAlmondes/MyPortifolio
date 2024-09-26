import './style/Projetos.css'
import { FaGithub } from 'react-icons/fa';
import Projeto from '../components/Projeto.jsx'
import { useEffect, useState } from 'react';

export default function Projetos() {

    const [repositorios, setRepositorios] = useState([]);

    async function buscarLinguagens(url) {
        const resposta = await fetch(url);
        const linguagens = await resposta.json();
        // Retorna uma lista de linguagens (as chaves do objeto são as linguagens)
        return Object.keys(linguagens);
    }
    
    async function buscarDados() {

        let resposta = await fetch('https://api.github.com/users/AugustoAlmondes/repos')
        let variaveis = await resposta.json();

        let repositorioFull = await Promise.all(
            variaveis.map(async (repos) =>{
                const linguagens = await buscarLinguagens(repos.languages_url)
                return{
                    nome:repos.name,
                    linguagens:linguagens,
                    link: repos.html_url
                };
            })
        );

        // let repositorio = variaveis.map(repos => ({
        //     nome:repos.name,
        //     ling:repos.language,
        // }));

        setRepositorios(repositorioFull);
    }

    useEffect(()=> {
        buscarDados();
    }, []);

    return (
        <>
            <div className="projetos">
                <div className="titulo-projetos">
                    <FaGithub />
                    <h1>Meus Projetos</h1>
                </div>

                <div className="container-projetos">

                    {/* COMPONENTE DE TESTE */}
                    <Projeto nome='CEP-Search-React' linguagem={['JavaScript', 'HTML', 'CSS']} link='https://github.com/AugustoAlmondes/CEP-Search-React' />

                    {
                        repositorios.map((repo, index) => (
                            <Projeto
                                key={index}
                                nome={repo.nome}
                                linguagem={repo.linguagens}
                                link={repo.link}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}