import React from "react";
import BirdTable from "./BirdTable";
import AddBirdForm from "./AddBirdForm";
import { Row, Col } from "react-bootstrap";

export default function Birding() {
  const URL = "https://648b4e4317f1536d65eac305.mockapi.io/api/birddb";
  const [birds, setBirds] = React.useState([]);

  //Get birds data from MockAPI
  const fetchBirds = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setBirds(data);
  };

  //Delete a bird from MockAPI
  React.useEffect(() => {
    fetchBirds();
  }, []);
  const deleteBird = async (idToDelete) => {
    await fetch(`${URL}/${idToDelete}`, {
      method: "DELETE",
    });
    setBirds(birds.filter((bird) => bird.id !== idToDelete));
  };

  //Update a bird sighting
  const updateBird = async (updatedBird) => {
    const response = await fetch(`${URL}/${updatedBird.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBird),
    });
    const updated = await response.json();
    //console.log(updated);
    const updatedBirdArray = birds.map((bird) => {
      return bird.id === updated.id ? updated : bird;
    });
    setBirds(updatedBirdArray);
  };

  //Add a new bird sighting
  const addNewBird = async (newBird) => {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBird),
    });
    const newBirdWithId = await response.json();
    setBirds([...birds, newBirdWithId]);
  };

  return (
    <>
      <div className="text-center">
        <hr></hr>
        <Row className="justify-content-center align-items-center px-5">
          <Col md={3}>
            <img src="src\components\images\hummingbird.png" />
          </Col>
          <Col s={6}>
            <h1>Birding Las Vegas</h1>
          </Col>
          <Col md={3}>
            <img src="src\components\images\roadrunner.png" />
          </Col>
        </Row>
        <hr></hr>
        <p>
          bird (noun) : any of a class (Aves) of warm-blooded vertebrates
          distinguished by having the body more or less completely covered with
          feathers and the forelimbs modified as wings
          <br></br>
          <br></br>
          bird (verb) : to observe or identify wild birds in their habitats
          <br></br>
          <br></br>
          Las Vegas is an amazing place to bird! Have you seen a cool species in
          the Valley? Add it to the list!
        </p>
      </div>
      <AddBirdForm addNewBird={addNewBird} />
      <BirdTable
        birds={birds}
        deleteBird={deleteBird}
        updateBird={updateBird}
      />
    </>
  );
}
