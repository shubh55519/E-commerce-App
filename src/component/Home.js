import React from 'react';
import { CartState } from '../Content/Context';
import SingleProducts from './SingleProducts';
import './style.css';
import Filters from './Filters';

const Home = () => {
    const { state: { products }, productState: { byStock, byFastDelivery, byRating, searchQuery, sort } } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;
        console.log(products);
        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === 'lowtohigh' ? a.price - b.price : b.price - a.price
            )
        }
        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock)
        }
        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
        }
        if (byRating) {
            sortedProducts = sortedProducts.filter((prod) => prod.byRating >= byRating)
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery))
        }
        return sortedProducts;
    }
    return (
        <div className='home'>
            <Filters />
            <div className='productContainer'>
                {transformProducts().map((prod) => {
                    return <SingleProducts prod={prod} key={prod.id} />
                })}
            </div>
        </div>
    )
}

export default Home;
;