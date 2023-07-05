import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import defaultLogo from "../office-building.png";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <Link
        to={`/companies/${handle}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card style={{ width: "25rem", margin: "10rem" }} className="m-auto">
          <Card.Body>
            <Card.Header
              style={{ padding: "0.5rem", backgroundColor: "transparent" }}
            >
              {name}
            </Card.Header>
            <Card.Text style={{ margin: "1rem" }}>{description}</Card.Text>
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
              <Button variant="secondary">Show All Jobs</Button>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CompanyCard;
