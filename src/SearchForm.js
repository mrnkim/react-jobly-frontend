import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

/** SearchForm component.
 *
 * State:
 * - searchTerm: "searchTerm"
 *
 * { CompanyList, JobList } -> SearchForm
 *
 * Accepts user's search term and handles change/submit
 */
function SearchForm({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setSearchTerm(input.value);
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  return (
    <Container className="mt-5">
      <Row style={{ dispaly: "flex", justifyContent: "center" }}>
        <Col sm={4}>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              id="searchTerm"
              name="searchTerm"
              placeholder="Search"
              onChange={handleChange}
              value={searchTerm}
              aria-label="Search"
            />
            <Button
              style={{ marginLeft: "3px" }}
              className="rounded"
              variant="primary"
            >
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
