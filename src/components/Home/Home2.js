import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myImg2 from "../../Assets/my.png";
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
              저는 <b className="purple">React와 TypeScript</b> 기반의 웹 애플리케이션 개발을 주로 담당해왔으며, 
              HTML, SCSS, JavaScript(ES6+)를 활용한 반응형 UI 구현 및 Axios를 통한 API 연동 경험이 있습니다.
              <br />
              <br />
              지도 기반 서비스 개발에 강점을 가지고 있으며, <b className="purple">Kakao Map API, Naver Map API</b>를 활용해 시설 정보를 지도에 표시하는 기능을 구현해왔습니다.
              <br />
              <br />
              앱 개발 분야에서도 <b className="purple">React Native를 활용한 하이브리드 앱 개발</b> 경험이 있으며, <b className="purple">CodePush를 통한 앱 업데이트, 안드로이드/iOS 앱 배포 및 관리</b>를 수행해왔습니다. 
              더불어 Flutter, Kotlin, Swift 등 다양한 모바일 플랫폼 기술에 대한 이해와 활용 경험도 보유하고 있습니다.
              <br />
              <br />
              WebView를 활용한 웹-앱 연동, 
              <b className="purple">Kakao SDK 및 Firebase Authentication 기반의 소셜 로그인(구글/애플)</b> 기능 개발 경험도 있으며, 
              SDK 환경 구성 및 모듈화 작업도 수행한 바 있습니다.
              <br />
              <br />
              <b className="purple">GitHub를 통한 협업과 Agile 방식의 프로젝트 관리</b>를 경험하였고, 코드 리팩토링, 렌더링 최적화, 웹 접근성 개선 등을 통해 사용자 경험 및 성능 향상에 기여해왔습니다. 
              또한 테스트 코드 작성(Jest, React Testing Library)을 통해 안정적인 서비스 제공을 지향하고 있습니다.
            </p>
            
            {/* <p className="home-about-body">
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
            </p> */}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div style={{
                width: '400px', // 원하는 원의 크기
                height: '400px',
                borderRadius: '80%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <img src={myImg2} className="img-fluid" alt="avatar" />
              </div>
              {/* <img src="../../Assets/my.png" /> */}
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
