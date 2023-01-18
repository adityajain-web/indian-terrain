import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, SingleProduct, SingleCategory, Cart, Checkout } from '../pages/page'

const index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:permalink/' element={<SingleProduct />} />
                <Route path='/product/category/:slug' element={<SingleCategory />} />
                <Route path="/cart/" element={<Cart />} />
                <Route path="/checkout/" element={<Checkout />} />
            </Routes>
        </>
    )
}

export default index