import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
            저는 코드의 효율성을 최우선으로 하는 프론트엔드 개발자로, <b className="purple">React, React-Native</b>에 능숙합니다. 
            <br />
            이를 통해 웹과 모바일 하이브리드 앱에서 뛰어난 성능과 사용자 경험을 제공하는 애플리케이션을 구축해왔습니다.
            <br />
            <br />
            <br />
            비록 Java와 Kotlin에서는 전문가 수준은 아니지만, 해당 언어들로도 프로젝트를 진행할 수 있는 역량을 갖추고 있으며, 다양한 기술 스택을 활용해 문제를 해결하는 데 능합니다.
            <br />
            특히, Node.js, React.js, Next.js와 같은 모던 자바스크립트 라이브러리와 프레임워크를 통해 
            <b className="purple">
            빠르고 효율적인 제품 개발에 집중하고 있습니다.</b>
            <br />
            <br />
            <br />
            또한, AR과 AI 같은 최신 기술에도 관심이 많아, 이 분야에서도 <b className="purple">새로운 도전을 계속하고 있습니다.</b>
            <br />
            저는 성능 최적화와 유지보수성을 고려한 코드를 작성하며, 더 나은 사용자 경험을 위한 효율적인 솔루션을 만드는 데 항상 최선을 다합니다.
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
            {/* <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/thisisSW"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="https://www.instagram.com/soumyajit4419"
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
