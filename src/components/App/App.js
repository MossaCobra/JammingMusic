import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <Container fluid>
        <Row>
          <Col md={6}>
            <SearchResults />
          </Col>
          <Col md={6}>
            <Playlist />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
