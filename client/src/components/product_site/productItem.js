import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const {product}= props;

    return ( 
        <div className="card p-2 product-card ">
            <Link className=" mb-4 product-tag" href="#">
              <div className="img-box w-100">
                <img
                  src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                  className="w-100"
                  alt=""
                />
              </div>
              <h5>Laptop Dell (Chính hãng)</h5>
            </Link>
            <div className="card-body ">
              <h5>
                <p>
                  Giá từ : <b className="text-danger">200.000vnđ</b>
                </p>
              </h5>
              <p>
                {" "}
                <del>300.000vnđ</del>{" "}
              </p>
              <p>
                <i className="fas fa-gifts text-danger me-2" /> Đang giảm giá
              </p>
            </div>
            <div className="hide ">
              Color: <b className="text-warning"> Gold </b>
              <p />
              <button className="w-100 btn-info btn text-light">
                {" "}
                Add cart
              </button>
            </div>
          </div>
     );
}

export default ProductItem;