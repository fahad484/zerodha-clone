import React,{ useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders ,setOrders] = useState([]);

  useEffect(()=>{
      axios.get(`${process.env.BACKEND_API_URL}/Orders`).then((res)=>{
        setOrders(res.data);
      })
  },[])
  return (
    <div className="orders">
      {!orders && <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>}
      <div className="order-table">
        <h3 className="title">Orders ({orders.length})</h3>
        <table>
          <tr>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
            <th>mode</th>
          </tr>
          {orders.map((order,index)=>{
            return(
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
    
    
    
};

export default Orders;
