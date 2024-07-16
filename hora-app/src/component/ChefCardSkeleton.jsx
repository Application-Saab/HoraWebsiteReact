import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import dummyImage from "../assets/dummyPlaceholder.webp";
import '../css/chefcardskeleton.css'

export const ChefCardSkeleton = ({ ...props }) => {
  return (
    <div className="chef-card-container" {...props}>
      <Card>
        <Placeholder
          as={Card.Img}
          variant="top"
          className="glow"
          src={dummyImage}
          height={150}
        />
        <Card.Body className="card-body">
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={7} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={5} />
            <Placeholder xs={4} />
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
  
};

export const CardSkeletonGrid = ({ loading = false }) => {
  return (
    <div className="chef-card-grid">
      {loading &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
          (item, index) => <ChefCardSkeleton key={index} />
        )}
    </div>
  );
};