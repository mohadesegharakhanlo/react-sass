import React , {useState} from 'react'
import {useSelector} from 'react-redux';
import Button from '../components/Button';


function Cart() {
    let items = useSelector((state) => state.addItems.cartItems);
    const [price , setPrice] = useState();
    // const sum = items.reduce((pValue , cValue) => {
    //     return pValue.quantity + cValue.quantity;
    // });
    // console.log(sum);
    return (
        <div className='cart'>
            <div className='cart__info'>
                <p className='cart__info__text'>
                    Total amount payable
                </p>
                <div className='cart__info__price'>
                    <p className='cart__info__pric__text'>total : </p>
                    <h3>12340000</h3>
                </div>
                <div className='cart__info__btn'>
                    <Button>button 1</Button>
                    <Button>button 2</Button>
                </div>
            </div>
            <div className='cart__items'>

            </div>
         
        </div>
    )
}

export default Cart
