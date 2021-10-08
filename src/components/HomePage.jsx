import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  state = {
    albums: [],
  };

  fetchAlbum = async () => {
    try {
      const query = "random";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );

      const albums = await response.json();

      console.log("right after the fetch", albums);

      if (response.ok) {
        this.setState({
          albums: albums.data,
        });
        console.log("from the fetch", this.state.albums);
      } else {
        console.log("inside the else of Fetch");
      }
    } catch (e) {
      console.log(e);
      console.log("outside the try block");
    }
  };

  componentDidMount = async () => {
    this.fetchAlbum();
  };

  render() {
    return (
      <>
        <Container className="d-flex justify-content-start" id="homePage">
           
        <Row>     
        
          {this.state.albums.map((album) => (
              
            <Col xs={3}>
             <div
                  Key={album.id}
                  className="card-gallery card-text-area position-relative"
                >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={album.album.cover_medium} />
                <Card.Body>
                <Link to={"/albumpage/" + album.album.id} > <Card.Title>{album.album.title}</Card.Title></Link>
                  <Card.Text>
                    {album.artist.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            </Col>
            
          ))}
          
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePage;
