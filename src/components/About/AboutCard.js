import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajasekhar Betha </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently working as DevOps Engineer at Infosys.
            <br />
            I have completed B.Tech at GIET (A) College, Rajahmundry
            
            <br />
            <br />
            Apart from Work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech World
            </li>
            <li className="about-activity">
              <ImPointRight /> Mythological stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "consistency is the key to success!"{" "}
          </p>
          <footer className="blockquote-footer">Rajasekhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
