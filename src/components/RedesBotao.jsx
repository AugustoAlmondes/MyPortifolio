import PropTypes from 'prop-types';
import './style/RedesBotao.css'

export default function RedesBotao({IconComponent, url}) {
    return (
        <>
            <a href={url} target='_blank' className='rede-botao'>
                <IconComponent className='icone'/>
            </a>
        </>
    );
}

RedesBotao.propTypes = {
    IconComponent: PropTypes.elementType.isRequired,
    url: PropTypes.string.isRequired,
}