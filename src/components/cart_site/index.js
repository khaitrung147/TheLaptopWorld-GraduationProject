import React from 'react';
import CartTable from './cartTable';

function Cart() {
    return ( 
        <>
            <div className='container mt-5 text-center'>
                <h2>Giỏ hàng</h2>
                <CartTable />
            </div>
        </>
     );
}

export default Cart;