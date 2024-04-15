import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";



const ModalComponent = ({ ids, action, title, Name, handleAction, text, icon, isDisabled = false }) => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <button type="button" className="btn btnDelete btn-sm" onClick={() => setModalOpen(!modalOpen)} disabled={isDisabled}>
                {Name}
            </button>
            <Modal Open toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}
            // style={{ maxWidth: customeWidth }}
            >
                <div className="modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        {title}
                    </h5>
                    <button
                        id="closeCross"
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody className="pt-0" >
                    <center>
                        <i className={icon} size="4x"></i>
                        <h3>{text}</h3>
                    </center>
                </ModalBody>

                <ModalFooter>
                    <Button
                        id="closeDeleteModal"
                        className="btn-warning"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        Close
                    </Button>
                    <Button
                        id="closeConfirm"
                        className="btnDelete"
                        // style={{ background: process.env.REACT_APP_BACKGROUND_COLOR }}
                        type="button"
                        onClick={() => {
                            handleAction(ids);
                            setModalOpen(!modalOpen);
                        }}
                    >
                        {action}
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalComponent