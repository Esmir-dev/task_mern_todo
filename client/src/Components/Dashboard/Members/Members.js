import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Members.css";

const Members = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="members">
      <button onClick={() => toggleModal()}> + New Task</button>
      <Modal isOpenModal={openModal} handleClose={toggleModal} />
    </div>
  );
};

export default Members;
