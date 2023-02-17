import { cartState, element, addSingleElement } from '../../features/Cart/cart'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
function Cart() {
    const itemOnCart = useAppSelector((state) => state.cart.elements.length);
    const totalPrice = useAppSelector((state) => state.cart.total);
    const dispatch = useAppDispatch();


    const mock: element = {
        name: 'pera',
        price: 1
    }

    const secondHandleClick = (p: element) => {
        dispatch(addSingleElement(p))
    }
    return (
        <div className="box txt-center">
            <h2>Cart</h2>
            <h4>Item on cart: {itemOnCart} | Total price: {totalPrice}€</h4>
            <div className="counter-value">

            </div>
            <div className="button-container">

                <button onClick={() => secondHandleClick({
                    name: 'Pera',
                    price: 1
                })}>
                    Pera | 1€
                </button>
                <button onClick={() => secondHandleClick({
                    name: 'Banane',
                    price: 2
                })}>
                    Pera | 2€
                </button>
                <button onClick={() => secondHandleClick({
                    name: 'Mango',
                    price: 5
                })}>
                    Pera | 5€
                </button>
            </div>

        </div>
    )
}

export default Cart