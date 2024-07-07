import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
const OrderDetailHeader = ({ orderDetail }) => {

  const getOrderId = (e) => {
    const orderId1 = 10800 + e;
    const updateOrderId = "#" + orderId1;
    localStorage.setItem("orderId", updateOrderId);
    return updateOrderId;
  };
  const getOrderStatus = (orderStatusValue) => {
    if (orderStatusValue === 0) {
      return { status: "Booked", className: "status-booked-detail" };
    }
    if (orderStatusValue == 1) {
      return { status: "Accepted", className: "status-accepted-detail" };
    }
    if (orderStatusValue === 2) {
      return { status: "In-progress", className: "status-in-progress--detail" };
    }
    if (orderStatusValue === 3) {
      return { status: "Completed", className: "status-completed-detail" };
    }
    if (orderStatusValue === 4) {
      return { status: "Cancelled", className: "status-cancelled-detail" };
    }
    if (orderStatusValue === 5) {
      return { status: "", className: "status-empty-detail" };
    }
    if (orderStatusValue === 6) {
      return { status: "Expired", className: "status-expired-detail" };
    }
  };

  const orderStatus = getOrderStatus(orderDetail?.order_status)

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  console.log("orderDetail?.order_status",orderDetail?.order_status)
  return (
    <div className="order-header">
      <div className="order-id-status">
        <h5 className="order-id-h">
          Order Id: {getOrderId(orderDetail?.order_id)}
        </h5>
        <p className="order-status-p">{orderStatus?.status}</p>
      </div>
      <div className="order-info">
        <div className="order-info-div">
          <CiCalendar size={20} />
          <p>{formatDate(orderDetail?.order_date)}</p>
        </div>
        <div className="order-info-div">
          <GoClock size={20} />
          <p>{orderDetail?.order_time}</p>
        </div>
        <div className="order-info-div">
          <MdPeopleAlt size={20} />
          <p>{orderDetail?.no_of_people} People</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailHeader;
