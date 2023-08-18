import { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';



const Cart = createContext();
faker.seed(33)
// console.log(Cart)
// console.log(createContext());


const Context = ({ children }) => {
    // console.log(children)
    const products = [...Array(10)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        description: faker.commerce.productDescription(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        inStock: faker.helpers.arrayElement([Math.floor(Math.random() * 10)]),
        // inStock: faker.helpers.arrayElement([3, 3, 0, 3]),
        fastDelivery: faker.datatype.boolean()
    }))
    console.log({ products })
    console.log(products[0].ratings)
    // console.log(children)

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });
    // console.log(state)
    // console.log(Cart)
    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ''
    })
    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Cart.Provider>
    )
}
export default Context;

export const CartState = () => {
    console.log(useContext(Cart))
    return useContext(Cart)
}
