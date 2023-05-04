import React, { useState, useEffect } from "react";
import "./App.css"; // import the CSS file
import ActionModal from "./ActionModal.jsx";

const ActionModalContainer = () => {
  const [order, setOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123");
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  const handleModal = (isOpen) => {
    setShowModal(isOpen);
  }
  
  if (!order) {
    return <div>Loading...</div>;
  }
  

  return (
    <>
    
    <div className="order-details-container" style={{padding: '16px', boxShadow: '0px 0px 16px rgba(0, 0, 0, 2)',  background: '#f5f5f5'}}>
       
        <div className="listing-details">
        <div className="listing-image">
  <img src={order.listing.images[0].image.url} alt={order.listing.model.name} style={{ maxWidth: "100%", height: "100%" }} />
</div>

<div className="listing-text" style={{ padding: '16px',  color: "black" }}>
  <div className="shop-link" style={{ color: "grey" }}>
    <a href="#">SHOP / {order.listing.model.referenceNumber}</a>
  </div>
  <h2>{order.listing.manufactureYear} {order.listing.model.brand.name} {order.listing.model.name}</h2>
  <p>Description: {order.listing.model.description}</p>
  <div className="action-buttons" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
  <button className="accept" onClick={() => handleModal(true)} style={{ fontSize: '18px', padding: '12px 24px' }}>Accept Sale</button>
  <button className="reject" onClick={() => handleModal(true)} style={{ fontSize: '18px', padding: '12px 24px' }}>Reject Sale</button>
</div>

</div>

        </div>
      </div>
      {showModal ? (
  <dialog open={showModal} onClose={() => handleModal(false)}>
    <ActionModal order={order} show={showModal} onClose={() => handleModal(false)} />
  </dialog>
) : null}
    </>
  );
};

export default ActionModalContainer;
