import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';
import {add} from '../redux/add-to-cart/addItems';
import { useDispatch , useSelector} from 'react-redux';

function ProductView(props) {
    let product = props.product;
    if(product === undefined) product = {
        price: 0,
        title: '' ,
        colors : [],
        size :[],
    }
    const [imageView , setImageView] = useState(product.image01);
    const [quantity , setQuantity] = useState(1);
    const [colors , setColors] = useState(undefined);
    const [size , setSize] = useState(undefined);
    const [activeCo , setActiveCo] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        setImageView(product.image01);
        setQuantity(1);
        setColors(undefined);
        setSize(undefined);
        setActiveCo(false);
    },[product]);
    const updateQuantity = (type)=>{
        if(type === 'plus'){
            setQuantity(quantity + 1);
        }
        if(type === 'minus'){
            if(quantity == 1){
                setQuantity(1);
            }
            else{
                setQuantity(quantity - 1);
            }
        }
    }
    const checkColorSize = ()=>{
        
        if(colors === undefined){
            swal({
                title:"not found color!",
                text:"choose color and click add to cart",
                icon:"info",
                button : "OK",
            });
            return false;
        }
        if(size === undefined){
            swal({
                title:"not found size!",
                text:"choose size and click add to cart",
                icon:"info",
                button : "OK",
            });
            return false;
        }
        return true;
    }
    const addToCart = ()=>{
        if(checkColorSize()){
            let pro = {
                title:product.title,
                price : product.price,
                image01 : product.image01,
                image02 : product.image02,
                categorySlug : product.categorySlug,
                colors : colors,
                slug : product.slug,
                size : size,
                quantity : quantity
            };
            dispatch(add(pro));
            swal({
                title:"added to your cart",
                text:"click on go to cart and see your product",
                icon:"success",
                button : "OK",
            });
        };
    }
    const goToCart = () => {
        if(checkColorSize()){
            props.history.push('/Cart');
        }
    }
    const activeColor = (item) => {
        setColors(item);
        setActiveCo(!activeCo);
    }
  return (
    <div className='product'>
        <div className='product__images'>
            <div className='product__images__list'>
                <div className='product__images__list__item__image01' 
                    onClick={() => setImageView(product.image01)}>
                    <img src={product.image01}/>
                </div>
                <div className='product__images__list__item__image02'
                    onClick={() => setImageView(product.image02)}>
                <img src={product.image02}/>
                </div>
            </div>
            <div className='product__images__main'>
                <img src={imageView}/>
            </div>
        </div>
        <div className='product__info'>
            <h1 className='product__info__title'>
                {product.title}
            </h1>
            <div className='product__info__price'>
                {product.price}
            </div>
            <div className='product__info__items'>
                <h2 className='product__info__items__title'>Colors</h2>
                <div className='product__info__items__color'>
                        {
                            product.colors.map((item , index)=>(
                                <div key={index} className='product__info__items__color__items'>
                                    <div className={`circle bg-${item} ${activeCo === true ? 'active' : ''}`} 
                                    onClick={() => activeColor(item)}></div>
                                </div>
                                
                            ))
                        }
                </div>
                <h2 className='product__info__items__title'>Size</h2>
                <div className='product__info__items__size'>
                    {
                        product.size.map((item , index)=>(
                            <div key={index} className='product__info__items__size__items'>
                                <span className='circlesize' onClick={() => setSize(item)}>{item}</span>
                            </div>
                            
                        ))
                    }
                </div>
                <h2 className='product__info__items__title'>quantity</h2>
                <div className='product__info__items__quantity'>
                    <div className='product__info__items__quantity__btn' onClick={() => updateQuantity('minus')}>
                        <i className='bx bx-minus'></i>
                    </div>
                    <div className='product__info__items__quantity__input'>
                        {quantity}
                    </div>
                    <div className='product__info__items__quantity__btn' onClick={() => updateQuantity('plus')}>
                        <i className='bx bx-plus'></i>
                    </div>
                </div>
            </div>
            <div className='product__info__button'>
                <Button onClick={() => addToCart()}>add to cart</Button>
                <Button onClick={() => goToCart()}>go to cart</Button>
            </div>

        </div>
    </div>
  )
}

ProductView.propTypes = {
    product:PropTypes.object.isRequired,
}

export default withRouter(ProductView);
