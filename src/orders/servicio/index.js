import React, {useState, useEffect} from "react";

function fetchOrders(){
    return window.fetch("http://localhost:28080/api/v1/products/",{
        method:"GET",
        headers:{
            "content-type": "application/json;charset=UTF-8",
        }
}).then(response => response.json());
}

const OrdersInfo = () => {
    const [orders,setOrders]= useState(null);
    useEffect(()=>{
        fetchOrders().then(ordersData=> {setOrders(ordersData)});
    });
    return (
        <pre>
            <code>{JSON.stringify(orders,null,2)}</code>
        </pre>
    );
};

export default OrdersInfo;