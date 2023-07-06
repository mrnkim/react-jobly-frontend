import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import defaultLogo from "../office-building.png";
import "../Card.css";

/** CompanyCard component.
 *
 * Props:
 * - company {handle: ..., name: ...}
 *
 * CompanyList -> CompanyCard
 *
 * Shows company card
 */
function CompanyCard({ company }) {
  const { handle, name, description, logoUrl } = company;

  return (
    <div className="align">
      <Link
        to={`/companies/${handle}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card className="card">
          <Card.Body>
            <Card.Header className="header">{name}</Card.Header>
            <Card.Text className="text">{description}</Card.Text>
            {logoUrl && (
              <img src={logoUrl} alt={name} style={{ marginBottom: "2rem" }} />
            )}
            {!logoUrl && (
              <img
                src={defaultLogo}
                alt={name}
                style={{ margin: "2rem", width: "90px" }}
              />
            )}
            <div>
              <Button variant="primary">Show All Jobs</Button>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CompanyCard;
