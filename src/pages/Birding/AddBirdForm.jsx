import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Card,
  Alert,
  Container,
} from "react-bootstrap";

/**This is the form to add a bird sighting to the bird sighting table. The addNewBird function is passed down as props from Birding.jsx */
export default function AddBirdForm({ addNewBird }) {
  const [show, setShow] = React.useState(false);
  const [newBird, setNewBird] = React.useState({
    date: "",
    birdName: "",
    location: "",
    notes: "",
  });

  /**Getting the information from the form and using it to create the newBird object */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBird((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    //console.log(newBird); - checking to make sure the newBird object was captured correctly

    /**Validating that the new bird sighting includes at least a bird and a date */

    if (newBird.birdName === "" || newBird.date === "") {
      setShow(true);
      return;
    }
    addNewBird(newBird);
    setNewBird({
      birdName: "",
      date: "",
      location: "",
      notes: "",
    });
  };
  return (
    <Card className="my-3 mx-5 border-primary">
      <Card.Header className="text-center fs-4">
        Add a bird sighting
      </Card.Header>
      <Card.Body>
        {/* This is the alert that pops up if a user has not entered a name and date at minimum */}
        <Alert
          show={show}
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          You must enter a species/name AND a date to continue
        </Alert>

        {/* Form and inputs - each value is controlled */}
        <Form>
          <Container>
            <Row>
              <Col xs={5}>
                <Form.Group className="mb-3">
                  <Form.Label>Observation Date</Form.Label>
                  <Form.Control
                    placeholder="Date"
                    type="date"
                    name="date"
                    onChange={handleChange}
                    value={newBird.date}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Bird Species/Name</Form.Label>
                  <Form.Control
                    placeholder="Enter species/name"
                    type="text"
                    name="birdName"
                    onChange={handleChange}
                    value={newBird.birdName}
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
                    name="location"
                    onChange={handleChange}
                    value={newBird.location}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter notes"
                    name="notes"
                    onChange={handleChange}
                    value={newBird.notes}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 4, offset: 5 }}>
                <Button variant="outline-success" onClick={handleSubmit}>
                  Add New Sighting
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  );
}
