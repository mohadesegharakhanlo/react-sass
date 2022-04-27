import React, { useCallback, useEffect, useRef, useState } from 'react'
import Hemlet from '../components/Hemlet'
import Grid from '../components/Grid'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'
import category from '../assets/fake-data/category'
import CheckBox from '../components/CkeckBox'
import colors from '../assets/fake-data/ProductColor'
import size from '../assets/fake-data/ProductSize'
import Button from '../components/Button'

function Catalog() {
    const initialFilter = {
        category:[],
        color:[],
        size:[]
    };
    const perload = 6;
    const listRef = useRef(null);
    const [load , setLoad] = useState(true);
    const [index , setIndex] = useState(0);
    const productList = productData.getAllProducts();
    const [filter , setFilter]=useState(initialFilter);
    const [product , setProduct]=useState(productList.slice(0 , perload));
    const filterSelect = (type , checked , item)=>{
        if(checked){
            switch(type){
                case "CATEGORY":
                    setFilter({...filter , category:[...filter.category , item.categorySlug]});
                    break;
                case "COLOR":
                    setFilter({...filter , color:[...filter.color , item.color]});
                    break;
                case "SIZE":
                    setFilter({...filter , size:[...filter.size , item.size]});
                    break;
                default:
            }
        }
        else{
            switch(type){
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e!==item.categorySlug);
                    setFilter({...filter , category:newCategory});
                    break;
                case "COLOR":
                    const newColor = filter.color.filter(e => e!==item.color);
                    setFilter({...filter , color:newColor});
                    break;
                case "SIZE":
                    const newSize = filter.size.filter(e => e!==item.size);
                    setFilter({...filter , size:newSize});
                    break;
                default:
            }
        }
    }
    const productUpdate = useCallback(
        () => {
            var temp = productList;
            if(filter.category.length > 0){
                temp = temp.filter(e => {
                    return filter.category.includes(e.categorySlug);
                })
                
            }
            if(filter.color.length > 0){
                temp = temp.filter(e =>{
                    const check = e.colors.find(c => filter.color.includes(c));
                    return check !== undefined;
                })
            }
            if(filter.size.length > 0){
                temp = temp.filter(e =>{
                    const check = e.size.find(s => filter.size.includes(s));
                    return check !== undefined;
                })
            }
            setProduct(temp.slice(0,perload));
        },
        [filter , productList]);

    useEffect(
    ()=>{
        productUpdate()
    },[productUpdate]
    )
    const clearFilter = () =>{
        setFilter(initialFilter);
    }
    useEffect(()=>{
        setProduct(productList.slice(0 , perload));
        setIndex(1);
    }, [productList]);
    useEffect(()=>{
        window.addEventListener('scroll' , (e)=>{
            if(e.target.documentElement.scrollTop + window.innerHeight + 1 >= e.target.documentElement.scrollHeight){
                setLoad(true);
            }
        })
    } , [product]);
    useEffect(()=>{
        const getItems = () => {
            const pages = Math.floor(productList.length / perload);
            const maxIndex = productList.length % perload === 0 ? pages : pages+1;
            if(load && index <= maxIndex){
                const start = perload * index;
                const end = start + perload;

                setProduct(product.concat(productList.slice(start , end)));
                setIndex(index +1);
            }
        }
        getItems();
        setLoad(false);

    }, [load , index , productList]);
    return (
        <Hemlet title="catalog">
            <div className='catalog'>
                <div className='catalog__filter'>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__title'>
                            title for catalog filter
                        </div>
                        <div className='catalog__filter__content'>
                            {
                                category.map((item , index)=>(
                                    <div className='catalog__filter__content__item' key={index}>
                                        <CheckBox
                                            lable={item.display}
                                            onChange = {(input) => filterSelect("CATEGORY", input.checked , item )}
                                            checked = {filter.category.includes(item.categorySlug)}
                                        />
                                    
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__title'>
                            title for catalog filter
                        </div>
                        <div className='catalog__filter__content'>
                            {
                                colors.map((item , index)=>(
                                    <div className='catalog__filter__content__item' key={index}>
                                        <CheckBox
                                            lable={item.display}
                                            onChange = {(input) => filterSelect("COLOR", input.checked ,item)}
                                            checked = {filter.color.includes(item.color)}
                                        />
                                    
                                    </div>
                                ))
                            }
                        </div>
                </div>
                <div className='catalog__filter__widget'>
                    <div className='catalog__filter__title'>
                        title for catalog filter
                    </div>
                    <div className='catalog__filter__content'>
                        {
                            size.map((item , index)=>(
                                <div className='catalog__filter__content__item' key={index}>
                                    <CheckBox
                                        lable={item.display}
                                        onChange = {(input) => filterSelect("SIZE" , input.checked ,item)}
                                        checked = {filter.size.includes(item.size)}
                                    />
                                
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                        <Button size='sm' onClick={clearFilter}>clear filter</Button>
                </div>
                </div>
                <div className='catalog__content' ref={listRef}>
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            product.map((item , index)=>(
                                <ProductCard
                                    key = {index}
                                    img01 = {item.image01}
                                    img02= {item.image02}
                                    price={item.price}
                                    name = {item.title}
                                    slug= {item.slug}
                                />
                            ))
                        }
                    </Grid>
                </div>
            
            
            </div>
        </Hemlet>
    )
}

export default Catalog
