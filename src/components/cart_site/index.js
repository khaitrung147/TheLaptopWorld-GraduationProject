import React from 'react';
import CartTable from './cartTable';
import './style.css'

function Cart() {
    return ( 
        <>
            <div className='cart-page container my-5 text-center'>
                <h2>Giỏ hàng</h2>
                <CartTable />
            </div>
        </>
     );
}

export default Cart;