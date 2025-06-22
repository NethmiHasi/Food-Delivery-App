import React, { useContext, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";

const MyOrders = () => {
    const [data, setData] = useState([]);
    const {url, token} = useContext(StoreContext);

    const fetchOrders = async() =>{
        
    }

  return (
    <div>

    </div>

)
    
};

export default MyOrders;
