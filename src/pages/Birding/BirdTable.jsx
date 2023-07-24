import React from "react";
import { Card, Table } from "react-bootstrap";
import Bird from "./Bird";

export default function BirdTable({ birds, deleteBird, updateBird }) {
  return (
    <Card className="m-3 bg-primary text-white">
      <Card.Header className="text-center fs-4">
        Las Vegas Bird Sightings
      </Card.Header>
      <Card.Body className="table-responsive">
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
            {birds.map((bird) => (
              <Bird
                key={bird.id}
                bird={bird}
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
