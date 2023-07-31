import React from "react";
import animalData from "../animalData";
import sign from "../components/images/lasvegas.png";
import adventure from "../components/images/Adventure.png";
import summer from "../components/images/summer.jpg";
import spring from "../components/images/spring.jpg";
import winter from "../components/images/winter.jpg";
import fall from "../components/images/fall.jpg";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import ReactWeather, { useVisualCrossing } from "react-open-weather";
import Places from "../components/Places";

/**This is the home page component.*/

export default function Home() {
  /**I'm using react-open-weather to embed a weather widget in
   * this page that shows the current weather in Las Vegas */
  const { data, isLoading, errorMessage } = useVisualCrossing({
    key: "JPFF2BHGYUG5JZJRKJBAEAQP5",
    lat: "36.188110",
    lon: "-115.176468",
    lang: "en",
    unit: "us", // values are (metric,us,uk)
  });

  /**Setting up state for the seasons */
  const [season, setSeason] = React.useState("");

  /**Getting the month based off of todays date so I can render only the appropriate season card */
  const getDate = () => new Date().getMonth() + 1;

  /**Running this with a useEffect hook because otherwise it creates an infinite loop because date gets reset constantly */
  React.useEffect(() => {
    const month = getDate();
    /**This switch sets the season based on the number of the month, then based on season
     * the appropriate season card renders below
     */
    switch (true) {
      case month === 12 || month === 1 || month === 2:
        setSeason("Winter");
        break;
      case month === 3 || month === 4 || month === 5:
        setSeason("Spring");
        break;
      case month === 6 || month === 7 || month === 8:
        setSeason("Summer");
        break;
      case month === 9 || month === 10 || month === 11:
        setSeason("Fall");
        break;
      default:
        setSeason("");
        break;
    }
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="m-3 align-items-center">
          <Col sm={9} className="text-center p-5">
            <h1>Welcome to your guide to outdoor living in Las Vegas</h1>
            <p className="px-5 mt-3">
              Do you think there isn't much to do outside of gambling in Sin
              City? Take a look around to discover why Las Vegas is an amazing
              outdoor recreation destination!
            </p>
          </Col>
          <Col sm={3}>
            <img
              className="vegas-sign"
              src={sign}
              alt="THe iconic Welcome to Las Vegas Sign"
            />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <h2 className="p-3 m-3">Right now in Las Vegas:</h2>
        </Row>
        {/* Seasonal cards section - each conditionally renders depending on what season it
        is in Las Vegas at the time the page is loaded */}
        <Row className="g-3 justify-content-center m-2">
          {/* Seasonal info section - users can click and override the conditional rendering of the season card. */}
          <Col className="p-3" md={2}>
            <h5>Click to see other seasonal averages.</h5>
            <Button
              variant="info"
              className="col col-xs-3 m-2"
              onClick={() => setSeason("Winter")}
            >
              Winter
            </Button>
            <Button
              variant="success"
              className="col col-xs-3  m-2"
              onClick={() => setSeason("Spring")}
            >
              Spring
            </Button>
            <Button
              variant="danger"
              className="col col-xs-3  m-2"
              onClick={() => setSeason("Summer")}
            >
              Summer
            </Button>
            <Button
              variant="warning"
              className="col col-xs-3  m-2"
              onClick={() => setSeason("Fall")}
            >
              Fall
            </Button>
          </Col>
          {season === "Winter" && (
            <Col md={5}>
              <Card className="season-card">
                <Card.Img variant="top" src={winter} />
                <Card.Body>
                  <Card.Title className="text-center">Winter</Card.Title>
                  <Card.Text>
                    Winter temperatures in Las Vegas generally range from the
                    mid 30's to upper 50's.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {season === "Spring" && (
            <Col md={5}>
              <Card className="season-card">
                <Card.Img variant="top" src={spring} />
                <Card.Body>
                  <Card.Title className="text-center">Spring</Card.Title>
                  <Card.Text>
                    Spring temperatures can vary widely with average lows down
                    in the 40's and average highs up in the 90's.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {season === "Summer" && (
            <Col md={5}>
              <Card className="season-card">
                <Card.Img variant="top" src={summer} />
                <Card.Body>
                  <Card.Title className="text-center">Summer</Card.Title>
                  <Card.Text>
                    Las Vegas summers are HOT with highs over 100 and lows that
                    only get down into the 80's. Late July/August brings monsoon
                    with occasional flash flooding.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {season === "Fall" && (
            <Col md={5}>
              <Card className="season-card">
                <Card.Img variant="top" src={fall} />
                <Card.Body>
                  <Card.Title className="text-center">Fall</Card.Title>
                  <Card.Text>
                    Similar to Spring, Fall temps vary widely from month to
                    month. Averages can reach up into the 90's and down into the
                    40's.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {/* Current weather section - utilizes the following:
            https://github.com/farahat80/react-open-weather */}
          <Col md={5} className="mb-3">
            <ReactWeather
              isLoading={isLoading}
              errorMessage={errorMessage}
              data={data}
              lang="en"
              locationLabel="Las Vegas, NV"
              unitsLabels={{ temperature: "F", windSpeed: "m/h" }}
              showForecast
            />
          </Col>
        </Row>
        <hr></hr>
        {/* Adventure Awaits section */}
        <Row className="m-3 p-5 g-3 text-center justify-content-center align-items-center">
          <Col md={8}>
            <h2>Where should I go to enjoy the real wild side of Las Vegas?</h2>
            <Places />
          </Col>
          <Col md={4}>
            <img
              className="adventures-image"
              src={adventure}
              alt="Signpost that says Adventure Awaits"
            ></img>
          </Col>
        </Row>
        <hr></hr>
        {/* Animal Carousel Section */}
        <Row className="m-5">
          <Col sm={{ span: 8, offset: 2 }}>
            <h2 className="text-center">
              Meet some of the wildlife you can discover in the Mojave Desert
            </h2>
            <p className="text-center">
              Hover over the image to learn about each animal.
            </p>
            {/* Here is where the animalData gets mapped over and rendered into individual carousel items. */}
            <Carousel className="animal-carousel">
              {animalData.map((animal) => (
                <Carousel.Item className="carousel-container" key={animal.id}>
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="carousel-image"
                  />
                  <Carousel.Caption className="carousel-overlay">
                    <div className="carousel-text">
                      <h5 className="text-white">{animal.name}</h5>
                      <p>{animal.text}</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
