import '../ItemCount/ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
<div className='Counter'>
    <div className='ButtonsTop'>
        <button className='Button' onClick={decrement}>-</button>
        <p className='Number'>{quantity}</p>  
        <button className='Button' onClick={increment}>+</button>
    </div>
    <div className='ButtonBottom'>
        <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
        </button>
    </div>
</div>

    )
}

export default ItemCount

