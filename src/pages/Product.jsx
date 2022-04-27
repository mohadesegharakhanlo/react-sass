import React from 'react'
import productData from '../assets/fake-data/products'
import Hemlet from '../components/Hemlet';
import Section ,{SectionBody , SectionTitle} from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';

const Product = props => {
    const product = productData.getAllProducts().find(e => e.slug === props.match.params.slug);
    const relatedProducts = productData.getAllProducts().filter( e => e.categorySlug === product.categorySlug);
    return (
        <Hemlet>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Related Products</SectionTitle>
                <SectionBody>
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                    {
                        relatedProducts.map((item , index)=>(
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

                
                </SectionBody>
            </Section>

        
        </Hemlet>
    )
}

export default Product
