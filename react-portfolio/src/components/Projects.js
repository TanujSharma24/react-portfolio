import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import travelAppImg from "../assets/img/mntn.png";
import onlineStoreAppImg from "../assets/img/online_pet_store.jpg";
import projImg3 from "../assets/img/project-img3.png";
import passwordAppImg from "../assets/img/password.jpg";
import christmasCountdownImg from "../assets/img/ChristmasCountdown.png";
import onlinePetStoreAppImg from "../assets/img/online-pet-store.jpg";
import onlineStore from "../assets/img/online-store.jpg";

import handHero from "../assets/img/hand-hero.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Travel The World",
      description: "Currently in development. Check back later.",
      imgUrl: travelAppImg,
      link: "",
      codeLink: "",
    },
    {
      title: "E-commerce website",
      description: "Currently in development. Check back later.",
      imgUrl: onlineStore,
      link: "",
      codeLink: "",
    },
    {
      title: "Smart Finances",
      description: "Currently in development. Check back later.",
      imgUrl: handHero,
      link: "",
      codeLink: "",
    },
  ];

  const vanilla_projects = [
    {
      title: "Random Password Generator",
      description: "Safety first.",
      imgUrl: passwordAppImg,
      link: "https://password-generatorxyz.netlify.app/",
      codeLink: "https://github.com/TanujSharma24/password-generator",
    },
    {
      title: "Christmas Countdown",
      description: "Counting down the time till Christmas Eve.",
      imgUrl: christmasCountdownImg,
      link: "https://christmas-countdown2022.netlify.app/",
      codeLink: "https://github.com/TanujSharma24/countdown-timer",
    },
    {
      title: "Pet Accessories Store",
      description: "Your one shop stop for all your pet needs.",
      imgUrl: onlinePetStoreAppImg,
      link: "https://pet-planet-store.netlify.app/",
      codeLink: "https://github.com/TanujSharma24/vanilla-shopping-cart",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I am always looking for fun and challenging projects to work
                    on. You can check out some of my recent projects below. I
                    would appreciate any feedback you may have.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Vanilla JS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">HTML/CSS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {vanilla_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Currently working on some cool projects using plain
                          HTML and CSS. Check back later.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
