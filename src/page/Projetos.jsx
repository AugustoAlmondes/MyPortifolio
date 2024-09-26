import './style/Projetos.css'
import { FaGithub } from 'react-icons/fa';

import Projeto from '../components/Projeto.jsx'

export default function Projetos() {
    return (
        <>
            <div className="projetos">
                <div className="titulo-projetos">
                    <FaGithub />
                    <h1>Meus Projetos</h1>
                </div>

                <div className="container-projetos">
                    <Projeto nome='CEP-Search-React' linguagem={['JavaScript','HTML', 'CSS']}/>
                    <Projeto/>
                    <Projeto/>
                    <Projeto/>
                    <Projeto/>
                    <Projeto/>
                    <Projeto/>
                    <Projeto/>
                    <Projeto/>
                    <Projeto/>
                </div>
            </div>
        </>
    );
}