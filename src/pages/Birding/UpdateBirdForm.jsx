import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

/**This form is used to update a bird sighting. It takes in props from Bird.jsx and uses the data for that
 * specific bird to populate the form with the current information. Once a user clicks to submit the form it uses updateBird to
 * pass the updated bird object back up to Birding.jsx where it is then re-rendered in BirdTable with the updated info. Because this form is
 * housed in a modal, it also includes the handleClose function so that when a user hits submit the modal is also closed.
 */

export default function UpdateBirdForm({ bird, updateBird, handleClose }) {
  const [updatedBird, setUpdatedBird] = React.useState(bird);

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdatedBird((oldBird) => {
      return {
        ...oldBird,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateBird(updatedBird);
    handleClose();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col xs={5}>
            <Form.Group className="mb-3">
              <Form.Label>Observation Date</Form.Label>
              <Form.Control
                placeholder="Date"
                type="date"
                id="dateUpdate"
                name="date"
                onChange={handleChange}
                value={updatedBird.date}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Bird Species/Name</Form.Label>
              <Form.Control
                placeholder="Enter updated species/name"
                type="text"
                id="nameUpdate"
                name="birdName"
                onChange={handleChange}
                value={updatedBird.birdName}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                placeholder="Location"
                type="text"
                id="locationUpdate"
                name="location"
                onChange={handleChange}
                value={updatedBird.location}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Updated Notes</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter updated notes"
                id="notesUpdate"
                name="notes"
                onChange={handleChange}
                value={updatedBird.notes}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            Update Sighting
          </Button>
        </Row>
      </Container>
    </Form>
  );
}
