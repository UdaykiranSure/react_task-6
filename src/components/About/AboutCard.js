import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            hELLO Everyone, I am <span className="purple">Sure Uday Kiran</span>
            I am a third year student at VIT-AP University studying Computer Science and engineering with specilaization in Artificial Intelligence and machine learning
            <br />
            <br />
            Also becoming a full stack web developer
            <br />
            <br />
            
          </p>          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
