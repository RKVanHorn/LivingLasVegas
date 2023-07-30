import React from "react";
import { Card, Accordion } from "react-bootstrap";

/**This component houses the 10 FAQs that I had chatGPT write for me about living in Las Vegas
 * This seemed like a great way to utilize AI to help reduce a repetitive part of my project.
 * It is a simple card with an image and then 10 accordion items.
 */

export default function FAQs() {
  return (
    <div className="faqs">
      <Card className="faqs-card mx-3 mt-3 mb-5">
        <Card.Img
          variant="top"
          src="https://a.cdn-hotels.com/gdcs/production120/d1096/b0d9ad8d-314d-41a4-8e8b-315af527c04a.jpg"
        />
        <Card.Body>
          <Card.Title className="text-center">
            FAQs about life in Sin City
          </Card.Title>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the cost of living in Las Vegas compared to other cities
                in the United States?
              </Accordion.Header>
              <Accordion.Body>
                The cost of living in Las Vegas is generally lower than in many
                major cities across the United States.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What are the best neighborhoods to live in Las Vegas, and what
                are their key characteristics?
              </Accordion.Header>
              <Accordion.Body>
                Some popular neighborhoods in Las Vegas include Summerlin,
                Henderson, and Downtown, each offering unique amenities and
                lifestyles.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Is Las Vegas a safe city to live in, and what areas should I
                avoid?
              </Accordion.Header>
              <Accordion.Body>
                Las Vegas has a mix of safe and less safe areas. It's best to
                research specific neighborhoods before deciding where to live.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What are the job opportunities and industries that thrive in Las
                Vegas?
              </Accordion.Header>
              <Accordion.Body>
                The job market in Las Vegas is diverse, with a focus on tourism,
                hospitality, gaming, and entertainment industries.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                How hot does it get in Las Vegas during the summer, and how do
                residents cope with the extreme heat?
              </Accordion.Header>
              <Accordion.Body>
                Summers in Las Vegas can be extremely hot, with temperatures
                often exceeding 100°F. Residents rely on air conditioning and
                indoor activities to stay comfortable.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                What are the available options for public transportation in Las
                Vegas?
              </Accordion.Header>
              <Accordion.Body>
                Las Vegas has a public bus system, but most residents primarily
                rely on personal vehicles for transportation.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Are there any unique local laws or regulations that I should be
                aware of as a Las Vegas resident?
              </Accordion.Header>
              <Accordion.Body>
                Local laws in Las Vegas can vary, but one notable regulation is
                the prohibition of open containers of alcohol on the Strip and
                in public spaces.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                What are the top schools and educational resources in the area
                for families with children?
              </Accordion.Header>
              <Accordion.Body>
                Las Vegas offers a mix of public and private schools, with some
                highly rated educational institutions in the region.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                How does the entertainment scene in Las Vegas differ from other
                cities, and what are some must-visit places?
              </Accordion.Header>
              <Accordion.Body>
                Las Vegas is famous for its world-class entertainment, including
                live shows, concerts, and performances.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                What outdoor recreational activities are available near Las
                Vegas, and how accessible are they to residents?
              </Accordion.Header>
              <Accordion.Body>
                Residents of Las Vegas have access to various outdoor
                activities, such as hiking, golfing, and exploring nearby
                national parks like Red Rock Canyon and Lake Mead.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
}
