import React from 'react'
import Grid from './Grid'
import {Link} from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'

const footerAboutLink = [
    {
        display:"about 1",
        path:"/about"
    },
    {
        display:"about 2",
        path:"/about"
    },
    {
        display:"about 3",
        path:"/about"
    },
    {
        display:"about 4",
        path:"/about"
    },
];
const footerCustomerLink = [
    {
        display:"about 5",
        path: "/about"
    },
    {
        display:"about 6",
        path: "/about"
    },
    {
        display:"about 7",
        path: "/about"
    },
];


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Grid col={4} mdCol={2} smCol={1} gap={10}>
                    <div>
                        <div className="footer__title">
                            footer title
                        </div>
                        <div className="footer__content">
                            <p>footer content 1</p>
                            <p>footer content 2</p>
                            <p>footer content 3</p>
                            <p>footer content 4</p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            footer title
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLink.map((item , index)=>(
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            footer title
                        </div>
                        <div className="footer__content">
                        {
                            footerCustomerLink.map((item , index)=>(
                                <p key={index}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>

                                </p>
                            ))
                        }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} alt="" className="footer__logo"/>
                            </Link>
                        </p>
                        <p>
                            logo logo logo logo logo logo logo logologo Logo
                            logo logo logo logologo logo logo logo
                        
                        </p>
                    
                    </div>

                </Grid>

            
            </div>
        
        </footer>
        
    )
}

export default Footer
