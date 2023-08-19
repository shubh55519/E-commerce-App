import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../Content/Context";

const Filters = () => {

    const { productState: { byStock, byFastDelivery, sort, byRating, searchQuery }, productDispatch } = CartState();
    console.log(byStock, byFastDelivery, sort, byRating, searchQuery);
    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    type='radio'
                    inline
                    label='Ascending'
                    name="group-1"
                    id={`inline-1`}
                    onChange={() => {
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: 'lowtohigh'
                        })
                    }}
                    checked={sort === 'lowtohigh' ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    type='radio'
                    inline
                    label='Descending'
                    name="group-1"
                    id={`inline-2`}
                    onChange={() => {
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: 'hightolow'
                        })
                    }}
                    checked={sort === 'hightolow' ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    type='checkbox'
                    inline
                    label='Fast Delivery Only'
                    name="group-1"
                    id={`inline-3`}
                    onChange={() => {
                        productDispatch({
                            type: 'FILTER_BY_DELIVERY',
                        })
                    }}
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <Form.Check
                    type='checkbox'
                    inline
                    label='Include Out of Stock'
                    name="group-1"
                    id={`inline-4`}
                    onChange={() => {
                        productDispatch({
                            type: 'FILTER_BY_STOCK',
                        })
                    }}
                    checked={byStock}
                />
            </span>
            <span>
                <label >Rating:</label>
                <Rating
                    rating={byRating}
                    onClick={(i) => {
                        productDispatch({
                            type: 'FILTER_BY_RATING',
                            payload: i + 1
                        })
                    }}
                    style={{ cursor: 'pointer' }}
                // prod={null}
                />
            </span>
            <Button
                variant="light"
                onChange={() => {
                    productDispatch({
                        type: 'CLEAR_FILTERS',
                    })
                }}

            >
                Clear Filters
            </Button>
        </div>
    )
}

export default Filters;
