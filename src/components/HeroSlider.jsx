import React , {useState , useEffect , useRef} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Button from './Button'

const HeroSlider = props => {
    const data = props.data
    const control = props.control
    const timeout = props.timeout ? props.timeout : '3000'
    const [activeSlide , setActiveSlide] = useState(0)
    const nextSlide = ()=>{
        if(activeSlide + 1 == data.length){
            setActiveSlide(0)
        }else{
            const index = activeSlide + 1
            setActiveSlide(index)
        }
    }
    const preSlide = ()=>{
        if(activeSlide == 0){
            setActiveSlide(data.length - 1)
        }
        else{
            setActiveSlide(activeSlide - 1)
        }
    }
    useEffect(() => {
        if(props.auto){
            const autoSlide = setInterval(()=>{
                nextSlide()

            }, timeout)
            return () => {
                clearInterval(autoSlide)
            }
        }
        
    }, [nextSlide , timeout , props])


    return (
        <div className="hero_slider">
            <div className="hero_slider__control" onClick={preSlide}>
                <i class='bx bx-chevron-left'></i>
            </div>

            {
                data.map((item , index)=>(
                        <HeroSliderDataItem key={index} item={item} active={index===activeSlide}/>
                ))
            }
            <div className="hero_slider__control" onClick={nextSlide} >
                <i class='bx bx-chevron-right'></i>
            </div>
        </div>
    )
}

HeroSlider.propTypes = {
    data : PropTypes.array,
    control : PropTypes.bool,
    auto : PropTypes.bool,
    timeout : PropTypes.number,
}
const HeroSliderDataItem = (props) =>(
        <div className={`hero_slider__item ${props.active ? 'active' : ''}`}>
            <div className="hero_slider__item__info">
                <div className={`hero_slider__item__info__title color-${props.item.color}`}>
                    <span>{props.item.title}</span>
                </div>
                <div className="hero_slider__item__info__description">
                    <span>{props.item.description}</span>
                </div>
                <div className="hero_slider__item__info__btn">
                    <Link to={props.item.path}>
                        <Button
                            backColor={props.item.color}
                            animate={true}
                            icon='bx bx-cart'
                            

                        >click me</Button>
                    </Link>
                </div>
            </div>
            <div className="hero_slider__item__image">
                <div className={`hero_slider__item__image__shape bg-${props.item.color}`}></div>
                <img src={props.item.image}/>
            </div>
        </div>


)

export default HeroSlider
