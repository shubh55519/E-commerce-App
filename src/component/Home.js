import { CartState } from "../Content/Context";
import './style.css';
import Filters from './Filters';
import SingleProducts from "./SingleProducts";


const Home = () => {
    const { state: { product }, productState: { byStock, byFastDelivery, sort, byRating, searchQuery } } = CartState();
    console.log(product);
    console.log(byStock, byFastDelivery, sort, byRating, searchQuery);
    const transformProduct = () => {
        let sortedProduct = product;

        if (sort) {
            sortedProduct = sortedProduct.sort((a, b) =>
                sort === 'lowtohigh' ? (a.price - b.price) : (b.price - a.price)
            );
        }
        if (!byStock) {
            sortedProduct = sortedProduct.filter(prod => prod.inStock)
        }
        if (byFastDelivery) {
            sortedProduct = sortedProduct.filter(prod => prod.fastDelivery)
        }
        if (byRating) {
            sortedProduct = sortedProduct.filter(
                (prod) => prod.rating >= byRating
            )
        }
        if (searchQuery) {
            sortedProduct = sortedProduct.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            )
        }
        return sortedProduct;
    }

    return (
        <div className='home'>
            <Filters />
            <div className="productContainer">
                {transformProduct().map((prod) => {
                    return <SingleProducts prod={prod} key={prod.id} />
                })

                }
            </div>
        </div>
    )
}

export default Home;
;