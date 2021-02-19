import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class GenreView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movies, movie } = this.props;

    if (!movie) return null;

    return (
      <Container className="wrapper container-fluid">
      <Row>
        <Col className="col-3" />
        <Col className="genre-view container-fluid align-items-center col-6">
          
          <div className="genre-title ">
            {/* <span className="label">Name: </span> */}
            <span className="value">{movie.Genre.Name}</span>
          </div>
          <div className="genre-description ">
            {/* <span className="label">Description: </span> */}
            <span className="value">{movie.Genre.Description}</span>
          </div>
          <Link to={`/`}>
            <Button variant="link">Return</Button>
          </Link>
        </Col>
        <Col className="col-3" />
      </Row>
     
    </Container>
  );
}
}

GenreView.propTypes = {
Movie: PropTypes.shape({
  Genre: {
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    // ImagePath: PropTypes.string.isRequired,
  },
}),
};