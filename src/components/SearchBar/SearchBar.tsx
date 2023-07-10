import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

interface Search {
    className?: string;
}
const SearchBar: React.FC<Search> = ({ className }) => {
    return (
        <Form className={`d-flex ${className}`}>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
            />
            <Button className="rounded-pill" variant="primary">
                Search
            </Button>
        </Form>
    );
};

export default SearchBar;
