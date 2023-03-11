import React, { useRef } from 'react';
import classNames from "classnames/bind";
import styles from "./cart.module.scss";
import { width } from '@mui/system';
import { Modal } from '@mui/material';
import { number } from 'yup';



const cx = classNames.bind(styles);
const cartmodal = (e)=>{
    e.stopPropagation();
}
function Cart({closeCart}) {
    const cartt=useRef();
    console.log(cartt);
  return (
  
    <div className={cx('modal')} onClick={()=>closeCart(false)}> 
    <div className={cx('cart-container')} onClick={cartmodal} ref={cartt} >
       
        <div className={cx('cart-modal')}>
       
            <div className={cx('cart-header')}> 
            <div className={cx('title-cart')}> <h2>Giỏ hàng</h2></div>
             <div className={cx('close')} onClick={()=>closeCart(false )}> Đóng</div>
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
                <div>  -  <input style={{border:'none',width:'20px'}} type={number} value={ 1 }></input> + </div>
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
        <div className={cx('des-cart')}>Các loại chi phí khác được tính trong phần thanh toán</div>
        <div className={cx('btn-cart')}><button>Thanh toán</button></div>
        </div>
       

    </div>
    </div>
  )
}

export default Cart
