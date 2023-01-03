import React, { useEffect, useState } from 'react';
import { Badge, Box, Container, IconButton, List, ListItem, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/css";
import Styles from '../../../styles/Header.module.css'
import logo from '../../../assets/images/logo/logo.svg'
import { NavLink } from 'react-router-dom';
import { ShoppingBag } from '@mui/icons-material';

const Header = () => {
    const [width, setWidth] = useState(1024);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [width])

    return (
        <>
            <header className='fixed-top shadow'>
                <Container maxWidth="xxl" className='bg-fiord py-2 px-0'>
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500 }} modules={[Autoplay]}>
                        {
                            ["Buy 2 SAVE 30% and Buy 3 SAVE 40% on EOSS products", "Purchase ₹4999 or more Get 10% Off - Use Coupon Code - TERRAIN10", "Purchase ₹4999 or more Get 10% Off - Use Coupon Code TERRAIN10", "Purchase ₹5999 or more Get 15% Off - Use Coupon Code TERRAIN15", "Purchase ₹6999 or more Get 20% Off - Use Coupon Code TERRAIN20", "Free Shipping and Free Returns", "10% off on your first purchase - Use Coupon Code NEW10", "Buy 2 Get 15% Off on New arrivals", "Buy 2 SAVE 30% and Buy 3 SAVE 40% on EOSS products"].map(item => <SwiperSlide key={`topbar-swiper-${item}`}>
                                <Typography className={`text-font-family-primary text-center text-white fw-bold ${Styles.topbarText}`}>{item}</Typography>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </Container>
                {
                    width > 1023 ? <>
                        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                            <Container className='d-flex' maxWidth="xxl">
                                <NavLink to="/">
                                    <img src={logo} alt="logo" className='img-fluid' />
                                </NavLink>
                                <Box className='collapse navbar-collapse'>
                                    <List className='navbar-nav mx-auto'>
                                        <ListItem className='nav-item' style={{ position: 'relative' }}>
                                            <NavLink className={`${Styles.navLink} text-fiord text-font-family-primary nav--link`} to="/product/category/mens/">MEN</NavLink>
                                            <Box className='mega-menu' id="megaMenu1">
                                                <h2>Mens</h2>
                                            </Box>
                                        </ListItem>
                                        <ListItem className='nav-item'>
                                            <NavLink className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`} to="/product/category/boys/">BOYS</NavLink>
                                            <Box className='mega-menu' id="megaMenu2">
                                                <h2>Boys</h2>
                                            </Box>
                                        </ListItem>
                                    </List>
                                    <IconButton>
                                        <Badge badgeContent="0" color='primary'>
                                            <ShoppingBag />
                                        </Badge>
                                    </IconButton>
                                </Box>
                            </Container>
                        </nav>
                    </> : <>Mobile</>
                }
            </header>
        </>
    )
}

export default Header