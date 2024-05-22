import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResults/SearchResult';
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
             <SearchResult /> 
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
