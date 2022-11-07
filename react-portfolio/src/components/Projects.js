import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "http://google.ca",
        },
    ];


    const vanilla_projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            link: "http://github.com",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            link: "http://google.ca",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "http://google.ca",
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>I am always looking for fun and challenging projects to work on. You can check out some of my recent projects below. I would appreciate any feedback you may have.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        vanilla_projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Currently working on some cool projects using plain HTML and CSS. Check back later.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}