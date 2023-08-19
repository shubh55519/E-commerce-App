import { Button, Card } from "react-bootstrap"
import Rating from "./Rating"
import { CartState } from "../Content/Context"


const SingleProducts = ({ prod }) => {
    const { state: { cart }, dispatch } = CartState();
    // console.log(cart);

    return (
        <div className='product'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.image} alt="prod.image" />
                <Card.Body>
                    {/* {console.log(prod, 'Line 14')} */}
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle>₹{prod.price}</Card.Subtitle>
                    <Card.Text><span>{prod.description}</span></Card.Text>
                    <Card.Subtitle>{prod.fastDelivery ? (<div>fastDelivery</div>
                    ) : (
                        <div>4 Day delivery</div>
                    )}
                    </Card.Subtitle>
                    <Rating
                        rating={prod.rating}
                        // onClick={(i) => setRate(i + 1)}
                        style={{ cursor: 'pointer' }}
                    // prod={prod} 
                    />
                    {
                        cart.some((p) => p.id === prod.id) ? (
                            <Button
                                onClick={() =>
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload: prod
                                    })}
                                variant="danger">
                                Remove from cart
                            </Button>
                        ) : (
                            <Button
                                onClick={() =>
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: prod,
                                    })
                                }
                                disabled={!prod.inStock} >
                                {!prod.inStock ? 'Out of Stock' : 'Add to Cart'}
                            </Button>
                        )
                    }

                </Card.Body>
            </Card>

        </div >
    )
}

export default SingleProducts
