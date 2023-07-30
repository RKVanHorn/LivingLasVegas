import React from "react";
import { Card, Table, Form } from "react-bootstrap";
import Bird from "./Bird";

/**This component sets up the table on the birding page and then maps over the birds data that gets passed down from
 * Birding.jsx. It also has a search bar that allows the user to search for any bird using words in the name, date, location
 * or notes fields.
 */

export default function BirdTable({ birds, deleteBird, updateBird }) {
  const [filtered, setFiltered] = React.useState("");

  return (
    <Card className="m-3 pt-3 bg-primary text-white">
      <Card.Header className="text-center fs-4">
        Las Vegas Bird Sightings
      </Card.Header>
      <Card.Body className="table-responsive">
        {/* The input is used to set the filtered value which is then used in the table to filter the data that is mapped */}
        <Form>
          <Form.Group className="mb-3" controlId="birdSearch">
            <Form.Control
              type="search"
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
            {/* If any of the data fields for a specific bird contain the letters/words typed into the search bar they are rendered here.
             If the search bar is empty then all birds are rendered. */}
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
