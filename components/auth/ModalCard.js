import React from "react";

const ModalCard = (props) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
        // Clicked on the overlay, close the modal
        e.preventDefault();
        e.stopPropagation();
        props.close();
      }
  };
  return (
    <div
      className="bg-gray-600 bg-opacity-50 overflow-y-auto absolute top-0 left-0 h-full w-full flex"
      onClick={(e)=>handleClose(e)}
    >
      {props.children}
    </div>
  );
};

export default ModalCard;
