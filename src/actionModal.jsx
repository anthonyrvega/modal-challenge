import React, { useState } from "react";

const ActionModal = ({ order, showModal, onClose }) => {
  const [accepted, setAccepted] = useState(false); // track whether the sale is accepted

  const handleAccept = () => {
    const data = {
      id: order.id,
      listing: {
        id: order.listing.id
      },
      accepted: true
    };
    fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log("Accept sale response", response);
        setAccepted(true); // update state to indicate the sale is accepted
      })
      .catch(error => {
        console.error("Accept sale error", error);
        
      });
  };

  const handleReject = () => {
    const data = {
      id: order.id,
      listing: {
        id: order.listing.id
      },
      accepted: false
    };
    fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log("Reject sale response", response);
        onClose();
      })
      .catch(error => {
        console.error("Reject sale error", error);
        onClose();
      });
  };

  return (
    <dialog className="modal" open={showModal} onClose={onClose}>
  <div className="action-buttons" style={{ display: 'flex', justifyContent: 'flex-end' }}>
    {!accepted && (
      <>
        <button className="confirm-btn" onClick={handleAccept} style={{ marginRight: '10px', textAlign: 'left' }}>
          Accept sale
        </button>
        <button className="cancel-btn" onClick={handleReject} style={{ marginLeft: '10px', textAlign: 'left' }}>
          Reject sale
        </button>
      </>
    )}
    {accepted && (
     <>
     <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingRight: '20px' }}>
        <h2 style={{ marginBottom: '-20px' }}>Congrats!</h2>
        <h1 style={{ marginBottom: '1px' }}>Your watch sold!</h1>
        <p style={{ width: '200px' }}>You have 1 business day to accept the sale. If you do not accept, it will be automatically rejected.</p>
      </div>
   </>
   
   
    )}
  </div>
  <div className="modal-content" style={{ display: 'flex', flexDirection: 'row', width: '50%', maxWidth: '1200px' }}>
    <div style={{ width: '100%', backgroundColor: 'grey', padding: '20px', borderRadius: '20px' }}>
      {order.listing.images.map((image) => (
        <img key={image.image.id} src={image.image.url} alt={image.type} style={{ width: '100px', float: 'right' }} />
      ))}
     <button className="close-btn" onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
  X
</button>
      <hr style={{ margin: '4px 0' }} />
      <p style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
        <span style={{ marginRight: '10px' }}></span>
        {order.listing.model.brand.displayName} {order.listing.model.displayName} {order.listing.model.referenceNumber}
      </p>
      <p style={{ textAlign: 'left' }}> {order.listing.condition} / {order.listing.manufactureYear}</p>
      <hr style={{ margin: '10px 0' }} />
      <p style={{ textAlign: 'left' }}>Selling Price: ${order.salePriceCents / 100}</p>
      <p style={{ textAlign: 'left' }}>
        Level 1 Commission ({order.commissionRateBips / 100}%): ${order.salePriceCents * (order.commissionRateBips / 10000)}
      </p>
      <p style={{ textAlign: 'left' }}>Seller Fee: ${order.sellerFeeCents / 100}</p>
      <p style={{ textAlign: 'left' }}>Insured Shipping: Free</p>
      <p style={{ textAlign: 'left' }}>Bezel authentication: Free</p>
      <hr style={{ margin: '10px 0' }} />
    </div>
  </div>
</dialog>

  );
  }
          export default ActionModal;