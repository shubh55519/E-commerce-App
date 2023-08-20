import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Data = createContext();
// console.log(Data)
faker.seed(99)

const Context = ({ children }) => {
    const product = [...Array(50)].map(() => ({
        // console.log(children)
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        fastDelivery: faker.datatype.boolean(),
        inStock: faker.helpers.arrayElement([Math.floor(Math.random() * 10)])

    }));
    // console.log(product);

    const [state, dispatch] = useReducer(cartReducer,
        {
            product: product,
            cart: []
        });
    console.log(state, 'line 29');

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ''
    })
    return (
        <Data.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Data.Provider>
    )
}
export default Context;

export const CartState = () => {
    // console.log(Data);
    return useContext(Data);
};


