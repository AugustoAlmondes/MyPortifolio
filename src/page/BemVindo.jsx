import './style/Bemvindo.css'
import Imagem from '../assets/fundoBV.png'
import Avatar from '../assets/94472197.jpeg'

import RedesBotaao from '../components/RedesBotao.jsx'
// import Titulo from '../components/Titulo.jsx'

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export default function BemVindo() {
    return (
        <>
            <div className="bemvindo">
                <img className='img1' src={Imagem} />
                <img className='img2' src={Imagem} />

                <div className="conteudo">
                    <img className='avatar' src={Avatar} />

                    <div className="container-text-conteudo">

                        <div className="titulo-conteudo">
                            <h1 className='typing'><span>Seja</span> Bem Vindo!!</h1>
                            <h1 className='typing'> Me chamo <span>Augusto Almondes.</span></h1>
                        </div>
                        {/* <Titulo/> */}

                        <div className="texto-conteudo">Aqui você encontrará uma coleção de trabalhos que refIetem minha jornada, habilidades e paixão pelo que faço. Seja no desenvolvimento de soluções criativas, projetos inovadores ou na aplicação prática de conhecimentos técnicos, cada projeto representa um passo na evolução da minha carreira e meu compromisso com a excelência. Navegue à vontade e descubra mais sobre minha visão, processos e experiências que moldam minha trajetória profissional.</div>

                        <div className="redes-conteudo">
                            <RedesBotaao IconComponent={FaWhatsapp} url={"wa.me/+5589988083671"}/>
                            <RedesBotaao IconComponent={MdOutlineEmail} url={"augusto7666@gmail.com"}/>
                            <RedesBotaao IconComponent={FaGithub} url={"https://github.com/AugustoAlmondes"}/>
                            <RedesBotaao IconComponent={FaLinkedin} url={"https://www.linkedin.com/in/augusto-almondes-812196231/"}/>
                            <RedesBotaao IconComponent={FaInstagram} url={"https://www.instagram.com/augusto_almondes/"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}