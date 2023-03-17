import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardBody,
  Row,
  Col,
  NavLink,
} from "reactstrap";

function NewsCard({news}) {
  return (
    <div>
      <Card
        style={{
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Row>
          <Col sm="4">
            <img
              alt="Sample"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              src={news.image}
            />
          </Col>
          <Col sm="8">
            <CardBody>
              <CardTitle tag="h5">{news.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {news.subTitle}
              </CardSubtitle>
              <CardText>{news.text}</CardText>
              <div className="d-flex justify-content-end">
              <a href="https://www.livescience.com/topics/earthquakes">read more</a>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default NewsCard;
