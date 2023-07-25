import React from "react";
import { Card, Table, Form } from "react-bootstrap";
import Bird from "./Bird";

export default function BirdTable({ birds, deleteBird, updateBird }) {
  const [filtered, setFiltered] = React.useState("");

  return (
    <Card className="m-3 bg-primary text-white">
      <Card.Header className="text-center fs-4">
        Las Vegas Bird Sightings
      </Card.Header>
      <Card.Body className="table-responsive">
        <Form>
          <Form.Group className="mb-3" controlId="birdSearch">
            <Form.Control
              type="text"
              placeholder="Search bird sightings"
              value={filtered}
              onChange={(e) => setFiltered(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Observation Date</th>
              <th>Species</th>
              <th>Location</th>
              <th>Notes</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {birds
              .filter((bird) => {
                if (
                  bird.birdName
                    .toLowerCase()
                    .includes(filtered.toLowerCase()) ||
                  bird.location
                    .toLowerCase()
                    .includes(filtered.toLowerCase()) ||
                  bird.notes.toLowerCase().includes(filtered.toLowerCase()) ||
                  bird.date.toLowerCase().includes(filtered.toLowerCase())
                ) {
                  return bird;
                }
              })
              .map((filteredBird) => (
                <Bird
                  key={filteredBird.id}
                  bird={filteredBird}
                  deleteBird={deleteBird}
                  updateBird={updateBird}
                />
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
