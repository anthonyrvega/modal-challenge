import React, { useState } from "react";
import "./App.css"; // import the CSS file
//define actionModal 
const ActionModal = ({ order, showModal, onClose }) => {
   // track whether the sale is accepted 
  const [accepted, setAccepted] = useState(false); 
  // Define async function to handle accepting a sale
  const handleAccept = async () => {
    // Create an object with data for the POST request
    const data = {
      id: order.id,
      listing: {
        id: order.listing.id
      },
      accepted: true
    };
    try {
        //Send the POST request to accept the sale
      const response = await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Accept sale response", response);
      // Update  state variable to indicate sale is accepted
      setAccepted(true); 
    } catch (error) {
      console.error("Accept sale error", error);
    }
  };
  // Define an async function to handle rejecting a sale
  const handleReject = async () => {
    const data = {
         //Send the POST request to accept the sale
      id: order.id,
      listing: {
        id: order.listing.id
      },
      accepted: false
    };
    try {
      const response = await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Reject sale response", response);
       // Call  onClose function to close  modal
      onClose();
    } catch (error) {
      console.error("Reject sale error", error);
      onClose();
    }
  };
  
  return (
    <dialog className="modal" open={showModal} onClose={onClose}>
    <div className="action-buttons">
      {!accepted && (
        <>
          <button className="confirm-btn" onClick={handleAccept}>
            Accept sale
          </button>
          <button className="cancel-btn" onClick={handleReject}>
            Reject sale
          </button>
        </>
      )}
      {accepted && (
        <>
          <div className="congrats-container">
            <h2>Congrats!</h2>
            <h1>Your watch sold!</h1>
            <p>You have 1 business day to accept the sale. If you do not accept, it will be automatically rejected.</p>
          </div>
        </>
      )}
    </div>
    <div className="modal-content">
      <div className="listing-images">
        {order.listing.images.map((image) => (
          <img key={image.image.id} src={image.image.url} alt={image.type} />
        ))}
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
      <hr />
      <p className="listing-details">
        <span>{order.listing.model.brand.displayName} {order.listing.model.displayName} {order.listing.model.referenceNumber}</span>
      </p>
      <p className="listing-details">{order.listing.condition} / {order.listing.manufactureYear}</p>
      <hr />
      <p>Selling Price: ${order.salePriceCents / 100}</p>
      <p>Level 1 Commission ({order.commissionRateBips / 100}%): ${order.salePriceCents * (order.commissionRateBips / 10000)}</p>
      <p>Seller Fee: ${order.sellerFeeCents / 100}</p>
      <p>Insured Shipping: Free</p>
      <p>Bezel authentication: Free</p>
      <hr />
    </div>
  </dialog>  
  );
  }
          export default ActionModal;