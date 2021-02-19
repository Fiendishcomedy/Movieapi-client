import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
// import './director-view.scss';

export class DirectorView extends React.Component {
  
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
          <Col className="director-view container-fluid align-items-center col-6">
           
            <div className="director-title">
              <span className="label">Name: </span>
              <span className="value">{movie.Director.Name}</span>
            </div>
            <div className="director-bio">
              <span className="label">Bio: </span>
              <span className="value">{movie.Director.Bio}</span>
            </div>
            <div className="director-birth">
              <span className="label">Born:  </span>
              <span className="value">{movie.Director.Birth}</span>
            </div>
            <div className="director-death">
              <span className="label">Died:  </span>
              <span className="value">{movie.Director.Death}</span>
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

DirectorView.propTypes = {
  Movie: PropTypes.shape({
    Director: {
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
    },
  }),
};