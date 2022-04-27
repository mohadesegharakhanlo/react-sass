import React, {useEffect , useState} from 'react'
import productData from '../assets/fake-data/products';
import ProductView from './ProductView'; 
import Button from './Button';
import {useSelector , useDispatch} from 'react-redux';
import {remove} from '../redux/product-model/ProductMoledSlice';

function ProductViewModel() {
    // const product = productData.getProductBySlug('ao-somi-dai-tay-16');
    const productSlug = useSelector((state) => state.productModel.value);
    const [product , setProduct] = useState(undefined);
    const dispatch = useDispatch();


    useEffect(()=>{
        setProduct(productData.getProductBySlug(productSlug));
    } , [productSlug]) 

  return (
    <div className={`product-view__model ${product === undefined ? '' : 'active'}`}>
        <div className='product-view__model__content'>
            <ProductView product = {product}/>
            <div className='product-view__model__content__close'>
                <Button size='sm' onClick={
                    () => dispatch(remove())
                }>close</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductViewModel