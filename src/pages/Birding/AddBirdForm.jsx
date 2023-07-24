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

export default function AddBirdForm({ addNewBird }) {
  const [show, setShow] = React.useState(false);
  const [newBird, setNewBird] = React.useState({
    date: "",
    birdName: "",
    location: "",
    notes: "",
  });

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
    //console.log(newBird);
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
        <Alert
          show={show}
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          You must enter a species/name AND a date to continue
        </Alert>
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
