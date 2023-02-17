import { amountAdded, incremented } from '../../features/Counter/counter'
import { useAppDispatch, useAppSelector } from '../../app/hooks'


// export const Counter = () => {
//     return (
//         <div className="counter">

//         </div>
//     )
// }

function Counter() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(incremented())
    }

    const secondHandleClick = () => {
        dispatch(amountAdded(10))
    }

    return (
        <div className="box txt-center">
            <h2 >COUNTER</h2>
            <h5>Count is current: {count}</h5>
            <div className="button-container">
                <button onClick={handleClick}>
                    increment
                </button>
                <button onClick={secondHandleClick}>
                    increment by 3
                </button>
            </div>

        </div>
    )
}

export default Counter