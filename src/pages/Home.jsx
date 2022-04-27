import React from 'react'
import Hemlet from '../components/Hemlet'
import HeroSlider from '../components/HeroSlider'
import heroSliderFakeData from '../assets/fake-data/HeroSliderData'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import  productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'
import {Link} from 'react-router-dom'




function Home() {
    
    return (
        <Hemlet title="home">
            <HeroSlider data={heroSliderFakeData} control={true} auto = {false} timeout={3000}/>



            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item , index)=>(<Link  key = {index} to='/Policy'>
                                    <PolicyCard
                                        name= {item.name}
                                        icon = {item.icon}
                                        description={item.description}
                                    />
                                </Link>
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>


            <Section>
                <SectionTitle>title for product card</SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item , index)=>(
                                <ProductCard
                                    key = {index}
                                    img01 = {item.image01}
                                    img02= {item.image02}
                                    price={Number(item.price)}
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

export default Home
