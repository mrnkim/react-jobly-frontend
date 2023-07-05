import React from "react";
import convertAndFormat from "../convertAndFormat";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

/** JobCard component.
 *
 * Props:
 * - job {companyHandle: ..., title: ...}
 *
 * JobCardListing -> JobCard
 *
 * Shows job card
 */

function JobCard({ job }) {
  const { companyHandle, title, salary, equity } = job;
  const formattedSalary = convertAndFormat(salary);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <Card style={{ width: "30rem" }} className="m-auto">
        <Card.Body>
          <Card.Header style={{ marginBottom: "2rem" }}>{title}</Card.Header>
          <Card.Text style={{ marginTop: "0.1rem" }}>
            🏢 Compny: {companyHandle}
          </Card.Text>
          {salary && <Card.Text>💲 Salary: ${formattedSalary}</Card.Text>}
          <Card.Text style={{ marginTop: "0.1rem" }}>
            📈 Equity:{" "}
            {equity === "0" || equity === null ? (
              <span>None</span>
            ) : (
              <span>{equity}</span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;
