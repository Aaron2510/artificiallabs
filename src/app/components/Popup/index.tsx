import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./popup.module.scss";

const Popup = () => {
  const MyVerticallyCenteredModal = ({ show, onHide }: { show: boolean; onHide: () => void }) => (
    <Modal
      show={show}
      onHide={onHide}
      animation={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName={styles.modalContent}
      dialogClassName={styles.customModalDialog}
    >
      <Modal.Body className={styles.modalBody}>
        <Button variant="secondary" onClick={onHide} className={styles.closeButton}>
          X
        </Button>
        <img src="./award-popup.png" alt="award-popup" className={styles.modalImage} />
      </Modal.Body>
    </Modal>
  );

  const App = () => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setModalShow(true), 4000);
      return () => clearTimeout(timer);
    }, []);

    // useEffect(() => {
    //   document.body.classList.toggle('modal-open', modalShow);
    //   return () => document.body.classList.remove('modal-open');
    // }, [modalShow]);

  //   return (
  //     <MyVerticallyCenteredModal
  //       show={modalShow}
  //       onHide={() => setModalShow(false)}
  //     />
  //   );
  // };

  useEffect(() => {
    // Add or remove the `modal-open` class based on `modalShow`
    if (modalShow) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalShow]);

  const handleClose = () => {
    setModalShow(false);
  };

  return (
    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={handleClose}
    />
  );
};


  return <App />;
};

export default Popup;