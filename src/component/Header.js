import "../App.css";
import { Form, Container, Navbar, Dropdown, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { CartState } from "../Content/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
    const { state: { cart }, dispatch, productDispatch } = CartState();
    return (
        <Navbar bg="dark" variant="dark" style={{ height: '60px' }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">ECOMM-Cart</Link>
                </Navbar.Brand>

                <Form.Control
                    className='m-auto'
                    style={{ width: '400px' }}
                    placeholder="Search a product"
                    onChange={(e) =>
                        productDispatch({
                            type: 'FILTER_BY_SEARCH',
                            payload: e.target.value
                        })
                    }
                />

                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaShoppingCart fontSize='25px' />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => (
                                        <span className="cartItem" key={prod.id}>
                                            <img
                                                className="cartItemImg"
                                                src={prod.image}
                                                alt={prod.image}
                                            />
                                            <span className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span>₹{prod.price}</span>
                                            </span>
                                            <AiFillDelete
                                                fontSize='25px'
                                                style={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: 'REMOVE_FROM_CART',
                                                        payload: prod
                                                    })}
                                            />
                                        </span>
                                    ))}
                                    <Link to='/cart'>
                                        <Button style={{ width: '255px', margin: '0 10px' }}>
                                            Go to Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (<span>cart is empty</span>)
                        }

                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header;
