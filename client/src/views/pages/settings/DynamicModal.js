import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const DynamicModal = ({show, handleClose, comp, compProps}) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{comp.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div className="container ">
                {<comp.component {...compProps}></comp.component>}
              </div>

            </Modal.Body>
          
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
    </Modal>
  )
}
