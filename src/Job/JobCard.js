import React from "react";
import convertAndFormat from "../convertAndFormat";
import Card from "react-bootstrap/Card";
import "../Card.css";

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
    <div className="align">
      <Card className="card">
        <Card.Body>
          <Card.Header className="header">{title}</Card.Header>
          <div className="align">
            <Card.Text className="text">
              <div>🏢 Company: {companyHandle}</div>
              <div>{salary && `💲 Salary: ${formattedSalary}`}</div>
              <div>
                📈 Equity:{" "}
                {equity === "0" || equity === null ? (
                  <span>None</span>
                ) : (
                  <span>{equity}</span>
                )}
              </div>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;
