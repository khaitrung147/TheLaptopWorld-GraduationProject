import React from 'react';

import ProductItem from './productItem';

function ProductList() {
    const listData=[
        {
            name:"fwafaw"
        },
        {
            name:"fwafaw"
        }
    ]
    
    return (
      <div className="row ">
        {
            listData.map((item)=>{
                <div className="col-xl-3 col-md-4 col-sm-6 col-6 product-box mb-3">
                    <ProductItem 
                        product={item}
                    />
                </div>
            })
        }
      </div>
    );
}

export default ProductList;