import React from 'react'
import { useSelector } from 'react-redux'

export default function Checkout() {
  const state = useSelector((state) => state.addItem);

  let total = 0
  const itemList = (item) => {
    total = total + item.price
    return (
      <li class="list-group-item">
        <img src={item.image} height="500px" width="300px" />
        <div>
          <h5>{item.Name}</h5>
        </div>
        <span>₹{item.price}</span>
      </li>
    )
  }

  return (
    <>
      <div class="container chechoutBodyMain">
        <div class="row g-5">
          <div class="col-mg-5 col-lg-4 order-md-last">
            <ul className='list-group-mb-3'>
              {state.map(itemList)}
              <li className='list-group-item d-flex justify-conent-between'>
                <span>Total USD:</span>
                <strong>₹{total}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
