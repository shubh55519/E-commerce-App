import { Button, Form } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../Content/Context';


const Filters = () => {

    const { productState: { byStock, byFastDelivery, byRating, searchQuery, sort }, productDispatch } = CartState()
    console.log(byStock, byFastDelivery, byRating, searchQuery, sort, 'FILTER-7');


    return (
        <div className='filters'>
            <span className='title'>Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label='Acsending'
                    name='group1'
                    type='radio'
                    id={`inline-1`}
                    onChange={() =>
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: 'lowtohigh'
                        })}
                    checked={sort === 'lowtohigh' ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Decsending'
                    name='group1'
                    type='radio'
                    id={`inline-2`}
                    onChange={() =>
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: 'hightolow'
                        })}
                    checked={sort === 'hightolow' ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Include out of stock'
                    name='group1'
                    type='checkbox'
                    id={`inline-3`}
                    onChange={() =>
                        productDispatch({
                            type: 'FILTER_BY_STOCK',
                        })}
                    checked={byStock}

                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Fast Delivery Only'
                    name='group1'
                    type='checkbox'
                    id={`inline-4`}
                    onChange={() =>
                        productDispatch({
                            type: 'FILTER_BY_DELIVERY',
                        })}
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 2 }}>Rating:</label>

                <Rating ratings={byRating}
                    onClick={(i) =>
                        productDispatch({
                            type: 'FILTER_BY_RATING',
                            payload: i + 1
                        })
                    }
                    style={{ cursor: 'pointer' }} />
            </span>
            <Button
                variant='light'
                onClick={() =>
                    productDispatch({
                        type: 'CLEAR_FILTERS',
                    })}
            >Clear Filters</Button>
        </div>
    )
}

export default Filters;
