import React from "react";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

/**This section is what opens when the user clicks on the button in the adventure awaits section of the home page */

export default function Places() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Let's Go!
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Let's Go on an Adventure!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>Great places to visit in and around Las Vegas</h5>
          <ul>
            <li>
              <a href="https://www.gomtcharleston.com" target="_blank">
                Mt. Charleston
              </a>
            </li>
            <li>
              <a
                href="https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Floyd-Lamb-Park"
                target="_blank"
              >
                Floyd Lamb Park
              </a>
            </li>
            <li>
              <a
                href="https://www.nps.gov/places/historic-railroad-hiking-trailhead.htm"
                target="_blank"
              >
                Historic Railroad Hiking Trail
              </a>
            </li>
            <li>
              <a
                href="https://parks.nv.gov/parks/valley-of-fire"
                target="_blank"
              >
                Valley of Fire
              </a>
            </li>
            <li>
              <a href="https://glitteringlightslasvegas.com/" target="_blank">
                Glittering Lights at Las Vegas Motor Speedway
              </a>
            </li>
            <li>
              <a
                href="https://www.blm.gov/programs/national-conservation-lands/nevada/red-rock-canyon"
                target="_blank"
              >
                Red Rock Canyon
              </a>
            </li>
            <li>
              <a href="https://www.nps.gov/deva/index.htm" target="_blank">
                Death Valley (3hr drive)
              </a>
            </li>
            <li>
              <a href="https://www.springspreserve.org/" target="_blank">
                Springs Preserve
              </a>
            </li>
            <li>
              <a href="https://www.nps.gov/lake/index.htm" target="_blank">
                Lake Mead
              </a>
            </li>
            <li>
              <a href="https://www.boulderrailroadmuseum.org/" target="_blank">
                Nevada State Railroad Museum
              </a>
            </li>
            <li>
              <a
                href="https://www.cityofhenderson.com/Home/Components/FacilityDirectory/FacilityDirectory/337/"
                target="_blank"
              >
                Henderson Bird Viewing Preserve
              </a>
            </li>
            <li>
              <a
                href="https://www.clarkcountynv.gov/government/departments/parks___recreation/wetlands_park/index.php"
                target="_blank"
              >
                Wetlands Park
              </a>
            </li>
          </ul>

          {/* The Link below takes the user directly to the birding page */}

          <h5>Las Vegas is also a great place to bird watch!</h5>
          <p>
            Spring and Fall bring migratory birds to places like the Wetlands
            Park and the Henderson Bird Viewing Preserve. Add a bird sighting by
            clicking <Link to="/birding">HERE</Link>!
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
