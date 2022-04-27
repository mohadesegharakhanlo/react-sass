import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'
import Routes from '../routers/Routes'
import {useDispatch} from 'react-redux'
import {set} from '../redux/product-model/ProductMoledSlice';

function ProductCard(props) {
    const dispatch = useDispatch();
    return (
        <div className='product-card'>
            <Link to={`/Catalog/${props.slug}`}>
                <div className='product-card__images'>
                    <img src={props.img01}/>
                    <img src={props.img02}/>
                </div>
                <h3 className='product-card__name'>{props.name}</h3>
                <div className='product-card__price'>
                    {props.price}
                    <span className='product-card__price__old'>
                        <del>200000</del>
                    </span>
                </div>
            </Link>
            <div className='product-card__button'>
                <Button 
                    size='sm'
                    icon = 'bx bx-cart'
                    animate={true}
                    onClick = {() => dispatch(set(props.slug))}
                >
                    add
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01 : PropTypes.string.isRequired,
    img02 : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    slug : PropTypes.string.isRequired,
}

export default ProductCard

