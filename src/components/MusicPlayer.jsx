import React from "react";
import { Button, Col, Container, Row, ProgressBar } from "react-bootstrap";

class MusicPlayer extends React.Component {
  render() {
    return (
      <Container fluid className="mediaPlayerFooter ">
        <Row className="row">
          <Col xs={2} className="col-2 leftFooter d-none d-sm-none d-md-flex">
            <div className="currentlyPlayed  mt-1">
              <img
                src="./Asset/mediaiconpic-aligate.jfif"
                className="img-fluid"
                id="AligateSize"
              />
            </div>
            <div className="currentPlayedSongInfo ml-2 mt-1">
              <p className="card-text my-0 ">it's You</p>
              <p className="card-text my-0 ">
                <small className="text-muted">Ali Gate</small>
              </p>
            </div>
            <div id="heart">
              <Button id="footerButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  fill="white"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Button>
            </div>
          </Col>
          <Col xs={8} className=" middleFooter mt-2">
            <Col xs={12} className="col-12 mt-2">
              <div id="shuffle">
                <Button id="footerButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="white"
                    class="bi bi-shuffle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
                    />
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                  </svg>
                </Button>
              </div>

              <div id="backward">
                <Button id="footerButton">
                  <i className="fas fa-step-backward text-muted"></i>
                </Button>
              </div>

              <div id="play">
                <Button id="footerButton">
                  <i className="fas fa-play-circle text-white"></i>
                </Button>
              </div>

              <div id="forward">
                <Button id="footerButton">
                  <i className="fas fa-step-forward text-muted"></i>
                </Button>
              </div>

              <div id="repeat">
                <Button id="footerButton">
                  <i className="fas fa-redo-alt text-muted"></i>
                </Button>
              </div>
            </Col>
            <Col xs={12} className="col-12">
              <p id="minute1" className="mx-2 my-2 text-muted">
                1:32
              </p>
              <ProgressBar
                className="mx-2 my-2"
                id="file"
                now={50}
                fill="white"
              ></ProgressBar>
              <p id="minute2" className="mx-2 my-2 text-muted">
                2:34
              </p>
            </Col>
          </Col>
          <Col className="col-2 rightFooter mt-4 d-none d-sm-none d-md-flex">
            <div id="queue">
              <Button id="footerButton">
                <i className="fas fa-list text-muted"></i>
              </Button>
            </div>

            <div id="device">
              <Button id="footerButton">
                <i className="fas fa-laptop text-muted"></i>
              </Button>
            </div>

            <div id="volume" className="mr-1">
              <Button id="footerButton">
                <i className="fas fa-volume-up text-muted"></i>
              </Button>
            </div>

            <ProgressBar
              variant="light"
              id="volumeProgress"
              max={90}
              value={50}
              className="progress text-muted"
            ></ProgressBar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MusicPlayer;
