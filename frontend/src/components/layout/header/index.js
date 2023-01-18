import React, { useEffect, useState } from 'react';
import { Badge, Box, Container, IconButton, List, ListItem, Typography, Grid, Divider, Button } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/css";
import Styles from '../../../styles/Header.module.css'
import logo from '../../../assets/images/logo/logo.svg'
import { NavLink } from 'react-router-dom';
import { ArrowDropDown, ArrowDropUp, Close, Menu, Person, ShoppingBag } from '@mui/icons-material';
// import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const [width, setWidth] = useState(1200);
    const [open, setOpen] = useState(false)
    const [menu, setMenu] = useState('')

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [width]);

    return (
        <>
            <header className='fixed-top border border-danger'>
                <Container maxWidth="xxl" className='bg-fiord py-2 px-0'>
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500 }} modules={[Autoplay]}>
                        {
                            ["Buy 2 SAVE 30% and Buy 3 SAVE 40% on EOSS products", "Purchase ₹4999 or more Get 10% Off - Use Coupon Code - TERRAIN10", "Purchase ₹4999 or more Get 10% Off - Use Coupon Code TERRAIN10", "Purchase ₹5999 or more Get 15% Off - Use Coupon Code TERRAIN15", "Purchase ₹6999 or more Get 20% Off - Use Coupon Code TERRAIN20", "Free Shipping and Free Returns", "10% off on your first purchase - Use Coupon Code NEW10", "Buy 2 Get 15% Off on New arrivals"].map(item => <SwiperSlide key={`topbar-swiper-${item}`}>
                                <Typography className={`text-font-family-primary text-center text-white fw-bold ${Styles.topbarText}`}>{item}</Typography>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </Container>
                {
                    width > 1199 ? <>
                        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                            <Container className='d-flex' maxWidth="xxl">
                                <NavLink to="/">
                                    <img src={logo} alt="logo" className='img-fluid' />
                                </NavLink>
                                <Box className='collapse navbar-collapse'>
                                    <List className='navbar-nav mx-auto'>
                                        <ListItem className='nav-item' style={{ position: 'relative' }}>
                                            <NavLink className={`${Styles.navLink} text-fiord text-font-family-primary nav--link`} to="/product/category/mens/">MEN</NavLink>
                                            <Box py={2} className='mega-menu shadow bg-light' id="megaMenu1">
                                                <Grid container>
                                                    <Grid item xs={3}>
                                                        <Box px={2}>
                                                            <NavLink to="/product/category/shirts/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>SHIRTS</NavLink>
                                                            <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                            <List>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/checked-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>CHECKED SHIERTS</NavLink>
                                                                </ListItem>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/printed-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>PRINTED SHIERTS</NavLink>
                                                                </ListItem>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/solid-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>SOLID SHIERTS</NavLink>
                                                                </ListItem>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/striped-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>STRIPED SHIERTS</NavLink>
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Box px={2}>
                                                            <NavLink to="/product/category/t-shirts/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>T-SHIRT</NavLink>
                                                            <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                            <List>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/polos/" className={` text-fiord text-font-family-primary nav-sub-links`}>POLOS</NavLink>
                                                                </ListItem>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/crew-necks/" className={` text-fiord text-font-family-primary nav-sub-links`}>CREW NECK</NavLink>
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Box px={2}>
                                                            <NavLink to="/product/category/bottom-wears/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>BOTTOM WEAR</NavLink>
                                                            <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                            <List>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/jeans/" className={` text-fiord text-font-family-primary nav-sub-links`}>JEANS</NavLink>
                                                                </ListItem>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/trousers/" className={` text-fiord text-font-family-primary nav-sub-links`}>TROUSERS</NavLink>
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Box px={2}>
                                                            <NavLink to="/product/category/outerwear/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>OUTERWEAR</NavLink>
                                                            <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                            <List>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/jackets/" className={` text-fiord text-font-family-primary nav-sub-links`}>JACKETS</NavLink>
                                                                </ListItem>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/sportcoat/" className={` text-fiord text-font-family-primary nav-sub-links`}>SPORTCOAT</NavLink>
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </ListItem>
                                        <ListItem className='nav-item'>
                                            <NavLink className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`} to="/product/category/boys/">BOYS</NavLink>
                                            <Box py={2} className='mega-menu shadow bg-light' id="megaMenu2">
                                                <Grid container>
                                                    <Grid item xs={4}>
                                                        <Box px={2}>
                                                            <NavLink to="/product/category/top-wear/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>TOP WEAR</NavLink>
                                                            <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                            <List>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/boys-t-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>BOYS T-SHIRTS</NavLink>
                                                                </ListItem>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/boys-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>BOYS SHIERTS</NavLink>
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Box px={2}>
                                                            <NavLink to="/product/category/boys-bottomwear/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>BOTTOM WEAR</NavLink>
                                                            <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                            <List>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/boys-jeans/" className={` text-fiord text-font-family-primary nav-sub-links`}>JEANS</NavLink>
                                                                </ListItem>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/boys-trousers/" className={` text-fiord text-font-family-primary nav-sub-links`}>TROUSERS</NavLink>
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Box px={2}>
                                                            <NavLink to="/product/category/boys-outerwear/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>OUTWEARS</NavLink>
                                                            <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                            <List>
                                                                <ListItem className='ps-0'>
                                                                    <NavLink to="/product/category/boys-jackets/" className={` text-fiord text-font-family-primary nav-sub-links`}>JACKETS</NavLink>
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </ListItem>
                                    </List>
                                    <Box>
                                        <IconButton className='mx-2'>
                                            <Badge badgeContent="0" color='primary'>
                                                <ShoppingBag />
                                            </Badge>
                                        </IconButton>
                                        <IconButton className='mx-2'>
                                            <Person />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Container>
                        </nav>
                    </> : <>
                        <nav className='bg-light'>
                            <Container maxWidth="xxl" className='d-flex justify-content-between p-0 py-2'>
                                <Button onClick={() => setOpen(!open)}>{open ? <Close /> : <Menu />}</Button>
                                <NavLink to="/">
                                    <img src={logo} alt="logo" className="img-fluid" />
                                </NavLink>
                                <Box className='d-flex'>
                                    <IconButton className='mx-1'>
                                        <Badge badgeContent="0" color='primary'>
                                            <ShoppingBag />
                                        </Badge>
                                    </IconButton>
                                    <IconButton className='mx-1'>
                                        <Person />
                                    </IconButton>
                                </Box>
                            </Container>
                            {
                                open ? <>
                                    <Box className={`${Styles.mobMenu} bg-light`}>
                                        <List>
                                            <ListItem className='d-flex justify-content-between'>
                                                <NavLink className={`${Styles.navLink} text-fiord text-font-family-primary nav--link`} to="/product/category/mens/">MEN</NavLink>
                                                <IconButton onClick={() => menu !== "men" ? setMenu('men') : setMenu('')}>{menu === "men" ? <ArrowDropUp /> : <ArrowDropDown />}</IconButton>
                                            </ListItem>
                                            {
                                                menu === "men" ? <Box>
                                                    <Box px={2}>
                                                        <NavLink to="/product/category/shirts/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>SHIRTS</NavLink>
                                                        <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                        <List>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/checked-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>CHECKED SHIERTS</NavLink>
                                                            </ListItem>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/printed-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>PRINTED SHIERTS</NavLink>
                                                            </ListItem>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/solid-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>SOLID SHIERTS</NavLink>
                                                            </ListItem>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/striped-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>STRIPED SHIERTS</NavLink>
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                    <Box px={2}>
                                                        <NavLink to="/product/category/t-shirts/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>T-SHIRT</NavLink>
                                                        <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                        <List>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/polos/" className={` text-fiord text-font-family-primary nav-sub-links`}>POLOS</NavLink>
                                                            </ListItem>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/crew-necks/" className={` text-fiord text-font-family-primary nav-sub-links`}>CREW NECK</NavLink>
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                    <Box px={2}>
                                                        <NavLink to="/product/category/bottom-wears/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>BOTTOM WEAR</NavLink>
                                                        <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                        <List>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/jeans/" className={` text-fiord text-font-family-primary nav-sub-links`}>JEANS</NavLink>
                                                            </ListItem>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/trousers/" className={` text-fiord text-font-family-primary nav-sub-links`}>TROUSERS</NavLink>
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                    <Box px={2}>
                                                        <NavLink to="/product/category/outerwear/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>OUTERWEAR</NavLink>
                                                        <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                        <List>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/jackets/" className={` text-fiord text-font-family-primary nav-sub-links`}>JACKETS</NavLink>
                                                            </ListItem>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/sportcoat/" className={` text-fiord text-font-family-primary nav-sub-links`}>SPORTCOAT</NavLink>
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                </Box> : null
                                            }
                                            <ListItem className='d-flex justify-content-between'>
                                                <NavLink className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`} to="/product/category/boys/">BOYS</NavLink>
                                                <IconButton onClick={() => menu === 'boys' ? setMenu('') : setMenu('boys')}>{menu === 'boys' ? <ArrowDropUp /> : <ArrowDropDown />}</IconButton>
                                            </ListItem>
                                            {
                                                menu === "boys" ? <Box>
                                                    <Box px={2}>
                                                        <NavLink to="/product/category/top-wear/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>TOP WEAR</NavLink>
                                                        <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                        <List>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/boys-t-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>BOYS T-SHIRTS</NavLink>
                                                            </ListItem>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/boys-shirts/" className={` text-fiord text-font-family-primary nav-sub-links`}>BOYS SHIERTS</NavLink>
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                    <Box px={2}>
                                                        <NavLink to="/product/category/boys-bottomwear/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>BOTTOM WEAR</NavLink>
                                                        <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                        <List>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/boys-jeans/" className={` text-fiord text-font-family-primary nav-sub-links`}>JEANS</NavLink>
                                                            </ListItem>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/boys-trousers/" className={` text-fiord text-font-family-primary nav-sub-links`}>TROUSERS</NavLink>
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                    <Box px={2}>
                                                        <NavLink to="/product/category/boys-outerwear/" className={`${Styles.navLink} text-fiord text-font-family-primary nav--links`}>OUTWEARS</NavLink>
                                                        <Divider style={{ width: "75%" }} className="fw-bold bg-fiord" />
                                                        <List>
                                                            <ListItem className='ps-0'>
                                                                <NavLink to="/product/category/boys-jackets/" className={` text-fiord text-font-family-primary nav-sub-links`}>JACKETS</NavLink>
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                </Box> : null
                                            }
                                        </List>
                                    </Box>
                                </> : null
                            }
                        </nav>
                    </>
                }
            </header>
        </>
    )
}

export default Header