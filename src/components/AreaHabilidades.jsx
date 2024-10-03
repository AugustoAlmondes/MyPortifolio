import PropTypes from 'prop-types';
import './style/HabilidadesArea.css'
import { useState } from 'react';

export default function HabilidadesArea({tituloHabilidades}) {
    const [icons, setIcons] = useState([]);
    return (
        <>
            <div className="lista-habilidades">
                <h2>{tituloHabilidades}</h2>
            </div>
        </>
    );
}

HabilidadesArea.propTypes = {
    tituloHabilidades: PropTypes.string.isrequired,
}