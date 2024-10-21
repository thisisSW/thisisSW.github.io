import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiFillGithub, AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    // <Container fluid className="project-section">
    //   <Particle />
    //   <Container>
    //     <h1 className="project-heading">
    //       <strong className="purple">저의 연락처입니다.</strong>
    //     </h1>
    //     <p style={{ color: "white" }}>
    //     제가 참여한 완료된, 혹은 진행 중인 프로젝트 목록입니다.
    //     <br />
    //     아래 프로젝트들은 회사에서 진행한 프로젝트 및 개인 및 팀원과 함께 진행한 프로젝트입니다.

    //     </p>
        
    //   </Container>
    // </Container>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" , textAlign: "left" }}>
              <span className="purple"> 저의 연락처 입니다. </span>
            </h1>
            <p className="home-about-body">
            <AiFillGithub
                  style={{ marginBottom: "2px" }}
                />{" "}
            Github
            <br />
            <a
                  href="https://github.com/thisisSW"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b className="purple">https://github.com/thisisSW</b>
                </a>
            
            {/* <b className="purple">Follow on GitHub</b> */}
            <br />
            <br />
            <AiOutlineMail
                  style={{ marginBottom: "2px" }}
                />{" "}
                Email
                <br />  
            <b className="purple">thisissw66@gmail.com</b>
            <br />
            <br />
            <h3>저의 포트폴리오를 봐주셔서 감사합니다!</h3>
            <br />
            - 포트폴리오 참고 템플릿 : https://github.com/soumyajit4419/Portfolio
            <br />
            <br />
            - React → React Typescript 로 재구성
            <br />
            <br />
            - 기타 컴포넌트 변경 및 추가
            {/* <br /> */}
            {/* <b className="purple"></b> */}
            </p>
            
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
