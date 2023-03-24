import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Prompt({ handleClose,handleSave }) {
    return (
        <>
            <Modal show={true}>
                <Modal.Body>Do you wish to continue?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        No
                    </Button>
                    <Button variant="primary" onClick={()=>handleSave()}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Prompt;