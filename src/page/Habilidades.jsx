import HabilidadesArea from '../components/AreaHabilidades';
import './style/Habilidades.css'
// import * '../src/assets/icons'

export default function Habilidades() {
    return (
        <>
            <div className="habilidades">
                <div className="titulo-habilidades">
                    <h1>Minhas Habilidades</h1>
                </div>

                <div className="area-habilidades">
                    <HabilidadesArea
                        tituloHabilidades={'Desenvolvimento Web'}
                    />

                    <HabilidadesArea
                        tituloHabilidades={'Design'}
                    />

                    <HabilidadesArea
                        tituloHabilidades={'Linguagens de Programação'}
                    />

                    <HabilidadesArea
                        tituloHabilidades={'Outras Tecnologias'}
                    />

                    <HabilidadesArea
                        tituloHabilidades={'Banco de Dados'}
                    />

                </div>
            </div>
        </>
    );
}