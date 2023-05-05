import React, { useState, useEffect } from "react";
import "./App.css"; 
import ActionModal from "./ActionModal.jsx";

//Define the ActionModalContainer functional component.
const ActionModalContainer = () => {
    //useState hook to define the order and showModal state variables
  const [order, setOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  //useEffect to fetch data from an API endpoint when the component mounts:
  useEffect(() => {
    //fetchData async func
    const fetchData = async () => {
      try {
        //GET request to the API endpoint 
        const response = await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123");
        const data = await response.json();
        //set the order state variable to the resulting data
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  //Define handleModal function
  const handleModal = (isOpen) => {
    setShowModal(isOpen);
  }
  
  if (!order) {
    return <div>Loading...</div>;
  }
  

  return (
    <>
  <div className="order-details-container">
    <div className="listing-details">
      <div className="listing-image">
        <img className="listing-image" src={order.listing.images[0].image.url} alt={order.listing.model.name} />
      </div>
      <div className="listing-text">
        <div className="shop-link">
          <a href="#">SHOP / {order.listing.model.referenceNumber}</a>
        </div>
        <h2>{order.listing.manufactureYear} {order.listing.model.brand.name} {order.listing.model.name}</h2>
        <p>Description: {order.listing.model.description}</p>
        <div className="action-buttons">
          <button className="accept-button" onClick={() => handleModal(true)}>Accept Sale</button>
          <button className="reject-button" onClick={() => handleModal(true)}>Reject Sale</button>
        </div>
      </div>
    </div>
  </div>
  {showModal && (
    <dialog open={showModal} onClose={() => handleModal(false)}>
      <ActionModal order={order} show={showModal} onClose={() => handleModal(false)} />
    </dialog>
  )}
</>

  );
};

export default ActionModalContainer;
