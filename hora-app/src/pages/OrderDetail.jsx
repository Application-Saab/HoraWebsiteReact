import React, { useEffect, useState } from "react";
import OrderDetailHeader from "../component/OrderDetailHeader";
import OrderDetailTab from "../component/OrderDetailTab";
import { useParams } from "react-router-dom";
import { BASE_URL, ORDER_DETAILS_ENDPOINT } from "../utills/apiconstants";

const OrderDetail = () => {
  const params = useParams();
  const API_ID = params?.api_id;
  const ORDER_ID = params?.order_id;
  const ORDER_TYPE = params?.order_type;

  const [loading, setLoading] = useState(false);
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    if (ORDER_TYPE == 2) {
      fetchChafOrderDetails();
    }
  }, [ORDER_TYPE]);

  const fetchChafOrderDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        BASE_URL + ORDER_DETAILS_ENDPOINT + "/v1/" + API_ID
      );
      const responseData = await response.json();
      setOrderDetail(responseData.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  if (loading) {
    return (
      <center>
        <div className="custom-spinner">
          <div>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div style={{ color: "#9252AA", textAlign: "center" }}>
              <h4>Data is loading...</h4>
            </div>
          </div>
        </div>
      </center>
    );
  }

  return (
    <div className="order-detail-page">
      <OrderDetailHeader orderDetail={orderDetail} />
      <OrderDetailTab orderDetail={orderDetail} />
    </div>
  );
};

export default OrderDetail;
