import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateBirdForm from "./UpdateBirdForm";

/**This components creates the table row and data for each bird, it receives props from Birding.jsx
 * and passes the updateBird function down to the UpdateBirdForm.
 */

export default function Bird({ bird, deleteBird, updateBird }) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <tr>
      <td>{bird.date}</td>
      <td>{bird.birdName}</td>
      <td>{bird.location}</td>
      <td>{bird.notes}</td>
      <td>
        <>
          <Button variant="outline-info" onClick={handleShow}>
            Update
          </Button>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title className="fs-3 fw-bold">
                Update:<br></br> {bird.birdName}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UpdateBirdForm
                bird={bird}
                updateBird={updateBird}
                handleClose={handleClose}
              />
            </Modal.Body>
          </Modal>
        </>
      </td>
      <td>
        <Button variant="outline-danger" onClick={() => deleteBird(bird.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}
