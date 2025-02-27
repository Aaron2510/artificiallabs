import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./popup.module.scss";

const Popup = () => {
  function MyVerticallyCenteredModal(props: { show: boolean, onHide: () => void }) {
    return (
      <Modal
        show={props.show} onHide={props.onHide} animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName={styles.modalContent}
        dialogClassName={styles.customModalDialog} // Apply the custom class to the modal dialog
      >
        <Modal.Body className={styles.modalBody}>
          <Button variant="secondary" onClick={props.onHide} className={styles.closeButton}>
            X
          </Button>
          <img src="./award-popup.png" alt="award-popup" className={styles.modalImage} />
        </Modal.Body>
      </Modal>
    );
  }

  function App() {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setModalShow(true);
      }, 4000); // 4 seconds delay

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    const handleClose = () => setModalShow(false);

    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={handleClose}
        />
      </>
    );
  }

  return <App />;
}

export default Popup;