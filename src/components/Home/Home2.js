import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I am Rajasekhar, A Seasoned DevOps/SRE Engineer Having 2 years+ Experience in various DevOps Tools and Technologies.

              <br />
              <br />I am proficient in cloud service providers like
              <i>
                <b className="purple"> AWS Cloud and Azure Cloud and DevOps practices as well!</b>
              </i>
              <br />
              <br />
              My field of Interest's are  &nbsp;
              <i>
                <b className="purple">developing Automations, streamlining the product developement through CI/CD Practices </b> and
                also in areas related to{" "}
                <b className="purple">
                  IaC and Deployments & Managing Kubenetes Deployments
                </b> 
              </i>
              <br />
              <br />
              My Tops Skills can be considered as <br /> <br /> <b className="purple"> - Linux Sys Admin (RHEL/Ubuntu/CentOS), UNIX</b> <br /> <br />
              <i>
                <b className="purple">
                  {" "}
                  - AWS services - EC2, AWS CLI, EBS/EFS, S3, CloudWatch, Elastic Beanstalk, ELB, Route53, RDS, CloudFront <br /> <br />
                  - Azure services - VM, ARM, VNet, RBAC, NSG, Azure DevOps server, Repos, Boards, Pipelines.. etc <br /> <br />
                </b>
              </i>
                            <i>
                <b className="purple"> - Good Experience in Docker, Kubenetes, Vagrant, IaC</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iamrajasekhar?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajasekhar-betha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i_am.rajasekhar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
