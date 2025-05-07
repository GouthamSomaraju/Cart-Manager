import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem,increaseQuantity,decreaseQuantity,clearCart } from './redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let {items,totalAmount}=useSelector(state=>state.cart)
  return (
    <div>
        <button onClick={()=>navigate('/')}>Back</button>
        <h1>Shopping Cart</h1>
        {items.length===0?(<p>No Items IN Cart</p>):
        (
            items.map(item=>(
                <div key={item.id} style={{ marginBottom: "10px" }}>
                  <h4>{item.name}</h4>
                  <p>
                    <strong>Quantity:</strong>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}> + </button> 
                    <strong>{item.quantity}</strong> 
                     <button onClick={() => dispatch(decreaseQuantity(item.id))}> - </button>
                     <button onClick={() => dispatch(removeItem(item.id))}>Remove</button> 
                  </p>
                  <p>Price: ${item.price} | Total: ${item.price * item.quantity}</p>
                </div>
              ))
        )}
        <h3>Total Amount: ${totalAmount}</h3>
        {items.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
      
    </div>
  )
}

export default CartPage
