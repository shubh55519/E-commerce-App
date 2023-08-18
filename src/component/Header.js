import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../Content/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const { state: { cart }, dispatch, productDispatch } = CartState();
    return (
        <Navbar bg='dark' variant='dark' style={{ height: 60 }} >
            <Container>
                <Navbar.Brand >
                    <Link to="/">Shopper's Stop</Link>
                </Navbar.Brand>

                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 400 }}
                        placeholder='Search a product'
                        className='m-auto'
                        onChange={(e) => {
                            productDispatch({
                                type: 'FILTER_BY_SEARCH',
                                payload: e.target.value,
                            })
                        }}
                    />
                </Navbar.Text>
                <Nav>
                    {/* <Dropdown alignRight> */}
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color='white' fontSize='25px' />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <>
                                    {
                                        cart.map((prod) => (
                                            <span className='cartItem' key={prod.id}>
                                                <img
                                                    src={prod.image}
                                                    alt={prod.name}
                                                    className='cartItemImg'
                                                />
                                                <div className='cartItemDetail'>
                                                    <span>{prod.name}</span>
                                                    <span>₹{prod.price.split('.')[0]}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize='20px'
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod
                                                        })}
                                                />
                                            </span>
                                        ))
                                    }
                                    <Link to='/cart' >
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                            Go to cart
                                        </Button>
                                    </Link >
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is empty!</span>
                            )}


                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default Header;
