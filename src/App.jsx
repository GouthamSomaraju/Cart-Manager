import { addToCart } from './redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useNavigate } from 'react-router-dom'

let products= [
  { id: 1, name: "Laptop", quantity: 1, price: 1200 },
  { id: 2, name: "Backpack", quantity: 1, price: 1200 },
  { id: 3, name: "T-Shirts", quantity: 1, price: 1200 },
  { id: 4, name: "Headphones", quantity: 1, price: 200 }
  ]
function App() {

  let dispatch=useDispatch()
  let {items}=useSelector(state=>state.cart)

  const navigate = useNavigate()

  

  return (
    <div>
      <h1>Products List</h1>
      <button onClick={() => navigate('/cart')}>Cart Items {items.length}</button>
      {
        products.map(item=>(
          <div key={item.id}>
            <h1>{item.name}- {item.price}</h1>
            <button onClick={()=>dispatch(addToCart(item))}>add to cart</button>
          </div>

        ))
      }
      <p>no items</p>

    </div>
  )
}

export default App
