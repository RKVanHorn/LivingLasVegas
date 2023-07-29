import React from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import ReactWeather, { useVisualCrossing } from "react-open-weather";
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
        <Row>
          <h1 className="p-5 text-center">
            Welcome to your guide for outdoor living in Las Vegas
          </h1>
        </Row>
        <hr></hr>
        <Row>
          <h2 className="p-3 m-3">Right now in Las Vegas:</h2>
        </Row>
        /**Each of these cards conditionally renders depending on what season it
        is in Las Vegas at the time the page is loaded */
        <Row className="g-3 justify-content-center">
          {season === "Winter" && (
            <Col sm={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="src\components\images\winter.jpg"
                />
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
            <Col sm={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="src\components\images\spring.jpg"
                />
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
            <Col sm={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="src\components\images\summer.jpg"
                />
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
            <Col sm={6}>
              <Card>
                <Card.Img variant="top" src="src\components\images\fall.jpg" />
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
          <Col sm={6}>
            /**This is the component for react-open-weather
            https://github.com/farahat80/react-open-weather */
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
        /**These buttons allow the user to override the season and see the
        averages for other seasons */
        <Row className="m-3">
          <hr></hr>
          <h4>Click to see another season's averages.</h4>
          <Button
            variant="info"
            className="col col-xs-2 m-3"
            onClick={() => setSeason("Winter")}
          >
            Winter
          </Button>
          <Button
            variant="success"
            className="col col-xs-2 m-3"
            onClick={() => setSeason("Spring")}
          >
            Spring
          </Button>
          <Button
            variant="danger"
            className="col col-xs-2 m-3"
            onClick={() => setSeason("Summer")}
          >
            Summer
          </Button>
          <Button
            variant="warning"
            className="col col-xs-2 m-3"
            onClick={() => setSeason("Fall")}
          >
            Fall
          </Button>
        </Row>
        <Row>
          {/* <Carousel>
            <Carousel.Item>
              <ExampleCarouselImage text="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
        </Row>
      </Container>
    </>
  );
}
