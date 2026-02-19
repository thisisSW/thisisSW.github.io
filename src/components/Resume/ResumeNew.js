import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import nubiz from "../../Assets/nubiz_logo.png";

function ResumeNew() {
  const contactItems = [
    {
      icon: <AiOutlineMail size={32} color="#c770f0" />,
      label: "Email",
      value: "thisissw66@gmail.com",
      href: "mailto:thisissw66@gmail.com",
    },
    {
      icon: <AiFillGithub size={32} color="#c770f0" />,
      label: "GitHub",
      value: "",
      href: "",
    },
    {
      icon: <AiFillLinkedin size={32} color="#c770f0" />,
      label: "LinkedIn",
      value: "",
      href: "",
    },
    {
      icon: <BsBook size={32} color="#c770f0" />,
      label: "Blog",
      value: "",
      href: "",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>

        {/* ───────── CAREER ───────── */}
        <Row className="justify-content-center" style={{ marginBottom: "60px" }}>
          <Col md={10}>
            <h1 className="project-heading" style={{ marginBottom: "10px" }}>
              CAREER
            </h1>
            <hr style={{ borderColor: "#c770f0", width: "60px", margin: "0 0 50px 0" }} />

            {/* 타임라인 아이템 */}
            <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>

              {/* 왼쪽: 회사 로고 */}
              <div style={{ flexShrink: 0, textAlign: "center", minWidth: "140px" }}>
                <div style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  background: "#f5f5f5",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden"
                }}>
                  {/* 회사 로고 이미지가 있다면 아래 img 태그 사용 */}
                  <img src={nubiz} alt="(주)엔유비즈" style={{ width: "80%" }} />
                  {/* <span style={{ color: "#333", fontWeight: "bold", fontSize: "13px" }}>(주)엔유비즈</span> */}
                </div>
              </div>

              {/* 가운데: 세로 라인 */}
              <div style={{
                width: "2px",
                background: "#c770f0",
                alignSelf: "stretch",
                marginTop: "10px",
                flexShrink: 0
              }} />

              {/* 오른쪽: 내용 */}
              <div style={{ color: "white", textAlign: "left" }}>
                <h3 style={{ color: "white", fontWeight: "700", marginBottom: "4px" }}>
                  (주) 엔유비즈
                </h3>
                <p style={{ color: "#c770f0", marginBottom: "16px", fontSize: "0.95em" }}>
                  프론트엔드, 앱 개발자 · 2022.12 ~ 2024.09
                </p>
                <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
                  React/TypeScript 기반 웹 개발과 React Native를 활용한 앱 개발 및
                  Android/iOS 스토어 배포를 담당했습니다.
                  외부 API 연동, WebView 기반 웹-앱 통합, 다수 프로젝트의 유지보수를 수행했습니다.
                </p>
                <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
                  실서비스 환경에서의 반복적인 배포와 유지보수 경험을 통해
                  안정성과 코드 품질을 중요하게 생각하는 개발자로 성장했습니다.
                  웹과 앱을 함께 다루며 플랫폼을 넘나드는 폭넓은 시각을 갖게 되었습니다.
                </p>
                {/* 기술스택 태그 */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["React", "TypeScript", "React Native", "Flutter", "JavaScript", "SCSS"].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "rgba(199, 112, 240, 0.15)",
                        border: "1px solid #c770f0",
                        color: "#c770f0",
                        borderRadius: "20px",
                        padding: "3px 14px",
                        fontSize: "0.85em"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* ───────── CONTACT ───────── */}
        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="project-heading" style={{ marginBottom: "10px" }}>
              CONTACT
            </h1>
            <hr style={{ borderColor: "#c770f0", width: "60px", margin: "0 0 20px 0" }} />

            <p style={{ color: "white", fontSize: "1.1em", marginBottom: "40px" }}>
              새로운 기회나 협업에 항상 열려 있습니다.{" "}
              언제든 편하게 연락 주세요!
            </p>

            {/* 가로 4개 카드 */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    flex: "1 1 180px",
                    background: "rgba(199, 112, 240, 0.08)",
                    border: "1px solid rgba(199, 112, 240, 0.3)",
                    borderRadius: "12px",
                    padding: "24px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    minHeight: "110px"
                  }}
                >
                  {item.icon}
                  <p style={{ color: "#aaa", margin: 0, fontSize: "0.8em" }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#c770f0", fontWeight: "bold", textDecoration: "none", fontSize: "0.9em" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: "#555", margin: 0, fontSize: "0.85em" }}>준비 중</p>
                  )}
                </div>
              ))}
            </div>

          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default ResumeNew;