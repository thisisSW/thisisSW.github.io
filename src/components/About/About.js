import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import SkillCards from "./SkillCards";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="home-about-body">
              <strong className="purple">React 기반 웹 개발과 모바일 앱 출시</strong>를 모두 경험한 개발자입니다.
              <br />
              공공 프로젝트 환경에서 5개 이상의 앱을 배포·운영하며,
              유지보수와 안정성을 고려한 실서비스 중심의 개발을 이어왔습니다.
              <br />
              <br />
              단순히 동작하는 코드보다, 함께 일하는 팀원이 읽기 쉽고
              <br />
              <strong className="purple">나중에 수정하더라도 부담 없는 코드를 만드는 것을 중요</strong>하게 생각합니다.
              <br />
              <br />
              기능을 구현할 때는 <strong className="purple">항상 사용자 입장</strong>에서 먼저 바라봅니다.
              <br />
              실제로 쓰는 사람이 불편하지 않을지, 예외 상황에서도
              자연스럽게 동작하는지를 놓치지 않으려 합니다.
              <br />
              <br />
              앞으로는 <strong className="purple">웹과 앱의 경계 없이 다양한 플랫폼을 아우르는 개발자</strong>로,
              <br />
              그리고 <strong className="purple">팀 안에서 함께 성장하며 긍정적인 영향</strong>을 줄 수 있는
              시니어 개발자로 나아가고 싶습니다.
            </p>


            {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: 'left' }}>

              <strong className="purple">성능 최적화와 효율적인 코드로<br /> 뛰어난 사용자 경험을 제공하며,<br /> 새로운 기술 도전에 열려 있는 프론트엔드 개발자<br /> 김상우입니다.</strong>

            </h1> */}
            {/* <Aboutcard /> */}
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <SkillCards />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
