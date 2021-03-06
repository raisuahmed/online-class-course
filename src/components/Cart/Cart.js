import React from 'react';
import Enrolled from '../Enrolled/Enrolled';
import './Cart.css'
const Cart = (props) => {
    const data = props.data;
  
    let sum=0;
    data.map(each=> {
        sum+=each.price
        
    });
    return (
        <div className="cart">
            {/* summary*/}
            <div className="cart-top">
                <h4>Course Summary</h4>
                <span>Course Enrolled: : {data.length}</span>
                <h5>Total Cost: $ {sum}</h5>
            </div>
            {/* enrolled  */}
            <div className="cart-list">
                <Enrolled data={data}> </Enrolled>
               
            </div>
            
        </div>
    );
};

export default Cart;