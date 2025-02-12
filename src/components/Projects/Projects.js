import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dobanjang from "../../Assets/Projects/dobanjang.png";
import suwon from "../../Assets/Projects/suwon.png";
import cleanujb from "../../Assets/Projects/cleanujb.png";
import anafor from "../../Assets/Projects/anafor.png";
import donggu from "../../Assets/Projects/donggu.png";
import gjcare from "../../Assets/Projects/gjcare.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">진행 프로젝트</strong>
        </h1>
        <p style={{ color: "white" }}>
        제가 참여한 완료된, 혹은 진행 중인 프로젝트 목록입니다.
        <br />
        아래 프로젝트들은 회사에서 진행한 프로젝트 및 개인 및 팀원과 함께 진행한 프로젝트입니다.

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anafor}
              isBlog={false}
              title="아나포"
              description = "저희 아나포는 '아픈 나를 위하여'를 모티브로 시작하였습니다. 현재도 진행 중인 코로나19를 겪으며 '건강'이라는 단어가 화두에 오르고 있습니다. 과거 건강관리 방식과 함께 디지털 헬스케어가 주목 받고 있는데 저희 아나포는 WEB, APP, IoT를 연계한 토탈 헬스케어 서비스를 개발하게 되었습니다."
              view="https://www.hanuledu.co.kr/p/?j=95&ej_code=portfolio&st=100&sv=&pno=9&sort=0&page=2&act=view&bbs_uid=14217"
            />  
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cleanujb}
              isBlog={false}
              title="스마트 크린 의정부"
              description="의정부 내에서 쓰레기 문제를 해결하기 위해 만들어진 어플리케이션 입니다. 신고하기를 통해 무단투기된 쓰레기의 위치와 사진을 공유해 보세요."
              view="http://m.gnsisa.com/view.php?idx=1226"
              store="https://play.google.com/store/apps/details?id=kr.co.nubiz.cleanujb&hl=ko-KR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gjcare}
              isBlog={false}
              title="광주다움 통합돌봄"
              description="광주광역시가 광주광역시 내의 5개구와 실행하는 전국 어디에도 없는 돌봄체계로 함께합니다. 돌봄이 필요한 광주시민이면 누구나 이용할 수 있는 빈틈없는 전 생애주기 지역사회 통합돌봄 서비스 이 어플리케이션은 광주다움 통합돌봄의 서비스 관리를 위한 사례관리담"
              store="https://play.google.com/store/apps/details?id=kr.co.nubiz.gwanjuCare&hl=ko-KR"
              view="https://news.gwangju.go.kr/gallery.es?mid=a20401000000&bid=0011&list_no=1050&act=view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dobanjang}
              isBlog={false}
              title="우리동네 Do 반장"
              description="광주광역시 동구 주민이면 누구나 이용할 수 있는 생활밀착 문제해결 디지털 플랫폼"
              store="https://play.google.com/store/apps/details?id=kr.co.nubiz.dobanjang&hl=ko-KR"
              view="https://www.donggu.kr/dobanjang/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={donggu}
              isBlog={false}
              title="동구 거점수거 동구라미 ON"
              description="광주광역시 동구 쓰레기 수거차량 현황지도, 클린동구 신고 및 해결 등 자원순환활동을 하고 포인트를 모아 깨끗한 동구를 만드는 스마트그린도시 플랫폼"
              store="https://play.google.com/store/apps/details?id=kr.co.nubiz.donggucollect"
              view="https://www.donggurami.kr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suwon}
              isBlog={false}
              title="수원 새빛 돌봄"
              description="수원새빛돌봄은 언제 어디서나 사용할 수 있는 시스템으로서 포털을 통해 돌봄신청, 계획수립, 서비스 제공기록, 만족도 조사까지 원스톱으로 처리할 수 있는 돌봄 플랫폼입니다."
              store="https://play.google.com/store/apps/details?id=kr.co.nubiz.suwoncare&hl=ko"
              view="https://www.suwon.go.kr:22891/care/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
