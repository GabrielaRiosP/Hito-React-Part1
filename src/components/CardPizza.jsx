import './CardPizza.css'
import PropTypes from 'prop-types';

const CardPizza = ({ img, name, price, ingredients }) => (
    <div className='containerCard'>
        <div className="card">
            <img src={img} alt={name} />
            <div className="card-body">
                <h3>{name}</h3>
                <p>🍕{ingredients}</p>
                <h5>Precio: ${price}</h5>
                <div className='button-container'>
            <button type="button" className="btn btn-dark">Ver más </button>
            <button type="button" className="btn btn-dark">🛒Agregar</button>
                </div>
            </div>
        </div>
    </div>
);

CardPizza.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.string.isRequired,
};


export default CardPizza