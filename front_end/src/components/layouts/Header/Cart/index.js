import React from 'react';
import classNames from "classnames/bind";
import styles from "./cart.module.scss";
import { width } from '@mui/system';



const cx = classNames.bind(styles);
function Cart({closeCart}) {
  return (

    <div className={cx('cart-container')}>
        <div className={cx('cart-modal')}>
       
            <div className={cx('cart-header')}> 
            <div className={cx('title-cart')}> <h2>Giỏ hàng</h2></div>
             <div className={cx('close')} onClick={()=>closeCart(false)}> Đóng</div>
      </div>
      
    
        <hr></hr>
        <div className={cx('cart-list')}>  
        <div className={cx('cart-item')}>
            <div className={cx('cart-img')}>
        <img className={cx('img-item')} src='https://phongkhamdongphuong.net/wp-content/uploads/2022/04/hinh-anh-dep-4.jpg' alt='hinh'></img>
            </div>
            <div className={cx('cart-info')}> 
            <div>Tên sản phẩm</div>
            <div>size</div>
            <div>
                <div>số lượng</div>
            </div></div>
        </div>
        </div>
   <hr></hr>
        <div className={cx('cart-total')}>
            <div className={cx('cart-sub')}>
                Tạm tính
            </div>
            <div className={cx('total')}>
                365.000 VNĐ
            </div>
        </div>
        <div>Các loại chi phí khác được tính trong phần thanh toán</div>
        <div><button>Thanh toán</button></div>
        </div>
       

    </div>

  )
}

export default Cart
