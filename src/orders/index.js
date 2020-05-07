import React, { useState } from "react";
import OrdersInfo from './servicio';

const AllOrders = () => {
    const [value,setValue]= useState([]);
    return ( 
    <div>
        <form >
            <label>
                All Orders
            </label>
        </form>
        <OrdersInfo/>
    </div>
    );
};

export default AllOrders;