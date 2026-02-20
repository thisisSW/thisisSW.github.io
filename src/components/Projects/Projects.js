import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 스마트 크린 의정부
import cleanujb from "../../Assets/Projects/ujb/Scene_1.png";
import ujbscreen1 from "../../Assets/Projects/ujb/screen1.webp";
import ujbscreen2 from "../../Assets/Projects/ujb/screen2.webp";
import ujbscreen3 from "../../Assets/Projects/ujb/screen3.webp";
import ujbscreen4 from "../../Assets/Projects/ujb/screen4.webp";
import ujbscreen5 from "../../Assets/Projects/ujb/screen5.png";


// 광주다움 통합돌봄
import gjcare from "../../Assets/Projects/gjcare/logo2.png";
import gjscreen1 from "../../Assets/Projects/gjcare/screen1.webp";
import gjscreen2 from "../../Assets/Projects/gjcare/screen2.webp";
import gjscreen3 from "../../Assets/Projects/gjcare/screen3.webp";
import gjscreen4 from "../../Assets/Projects/gjcare/screen4.webp";
import gjscreen5 from "../../Assets/Projects/gjcare/screen5.png";


// 우리동네 Do 반장
import dobanjang from "../../Assets/Projects/dobanjang/logo7.png";
import doscreen1 from "../../Assets/Projects/dobanjang/screen1.webp";
import doscreen2 from "../../Assets/Projects/dobanjang/screen2.webp";
import doscreen3 from "../../Assets/Projects/dobanjang/screen3.png";
import doscreen4 from "../../Assets/Projects/dobanjang/screen4.webp";
import doscreen5 from "../../Assets/Projects/dobanjang/screen5.webp";


// 동구라미 ON
import donggu from "../../Assets/Projects/donggu/logo3.png";
import donggu1 from "../../Assets/Projects/donggu/screen1.png";
import donggu2 from "../../Assets/Projects/donggu/screen2.png";
import donggu3 from "../../Assets/Projects/donggu/screen3.png";
import donggu4 from "../../Assets/Projects/donggu/screen4.png";
import donggu5 from "../../Assets/Projects/donggu/screen5.png";
import donggu6 from "../../Assets/Projects/donggu/screen6.png";
import donggu7 from "../../Assets/Projects/donggu/screen7.png";
import donggu8 from "../../Assets/Projects/donggu/screen8.png";
import donggu9 from "../../Assets/Projects/donggu/screen9.png";
import donggu10 from "../../Assets/Projects/donggu/screen10.png";

// 동구라미 bluetooth
import main from "../../Assets/Projects/bluetooth/main.png";

// 수원 새빛 돌봄
import suwon from "../../Assets/Projects/suwon/logo.png";
import suwon1 from "../../Assets/Projects/suwon/행정_메인.049de6a52923e721a710.png";
import suwon2 from "../../Assets/Projects/suwon/행정_로그인.fb454ba936af72950a4e.png";
import suwon3 from "../../Assets/Projects/suwon/행정_돌봄계획 목록.b512519a587b0156d20c.png";
import suwon4 from "../../Assets/Projects/suwon/행정_돌봄계획_계획수립.6703fe91d686446cf476.png";
import suwon5 from "../../Assets/Projects/suwon/행정_신청,접수 목록.4634a3f77e3a27297325.png";
import suwon6 from "../../Assets/Projects/suwon/기관_통합로그인.c88397868e3f1cba20ec.png";


// ─── 이미지 슬라이드쇼 컴포넌트 ───
function ImageSlideshow({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, goToSlide]);

  // 자동 전환 (4초)
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [images.length, goNext]);

  // 모달이 열릴 때 첫 이미지로 리셋
  useEffect(() => {
    setCurrentIndex(0);
  }, [title]);

  if (!images || images.length === 0) return null;

  return (
    <div className="modal-slideshow">
      <div className="slideshow-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} ${index + 1}`}
            className={`slideshow-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}

        {images.length > 1 && (
          <>
            <button className="slideshow-arrow slideshow-prev" onClick={goPrev}>
              ‹
            </button>
            <button className="slideshow-arrow slideshow-next" onClick={goNext}>
              ›
            </button>
            <div className="slideshow-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`slideshow-dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}


// ─── 메인 Projects 컴포넌트 ───
function Projects() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const PROJECTS = [
    {
      imgPath: cleanujb,
      title: "스마트 크린 의정부",
      description: "의정부시의 환경보호를 위해 시민들이 직접 참여하는 쓰레기 문제해결 서비스 앱",
      view: "https://blog.naver.com/hope_city/223442195800",
      store: "https://play.google.com/store/apps/details?id=kr.co.nubiz.cleanujb&hl=ko-KR",
      period: "2022.12 ~ 2023.03",
      images: [cleanujb, ujbscreen1, ujbscreen2, ujbscreen3, ujbscreen4, ujbscreen5],
      overview: "의정부시의 환경보호를 위해 시민들이 직접 참여하는 쓰레기 문제해결 서비스 앱입니다. 도내 최초! 스마트크린 앱에 쓰레기 신고 등록이 되는 즉시 수거 업체가 신속히 처리합니다.",
      roles: [
        "React/TypeScript 기반 웹·앱 화면 구현 및 반응형 UI 개발",
        "Axios / Redux를 통해 REST API 통신 및 상태관리",
        "WebView와 React Native 간 양방향 브릿지 통신 구현",
        "카메라, 앨범, GPS, 파일 업로드 등 네이티브 기능 인터페이스 연동",
        "JWT 기반 자동 로그인 및 토큰 자동 갱신 로직 구현",
        "Android/iOS 스토어 배포 및 버전 관리, 심사 대응",
      ],
      stack: ["React", "TypeScript", "React-Native", "kakao Map API", "소셜로그인", "Redux", "Axios", "REST API", "Git"],

      achievements: [
        "의정부시 도내 최초 스마트 쓰레기 신고 앱 출시",
        "신고 즉시 수거 업체 연결되는 실시간 처리 흐름 구현",
        "신고 접수 즉시 수거 업체 연결되는 실시간 처리 흐름 구현으로 수거 대응 속도 개선",
        "시민 직접 참여 기반의 환경 문제 해결 서비스 실서비스 배포 및 운영",
      ],
    },
    {
      imgPath: gjcare,
      title: "광주다움 통합돌봄",
      description: "광주광역시 5개구와 함께하는 전 생애주기 지역사회 통합돌봄 서비스 관리 앱",
      view: "https://www.gwangju.go.kr/welfare/contentsView.do?pageId=welfare190",
      store: "https://play.google.com/store/apps/details?id=kr.co.nubiz.gwanjuCare&hl=ko-KR",
      period: "2023.03 ~ 2023.11",
      images: [gjcare, gjscreen5, gjscreen1, gjscreen2, gjscreen3, gjscreen4],
      overview: "광주광역시가 5개구와 실행하는 전국 어디에도 없는 돌봄체계입니다. 돌봄이 필요한 광주시민이면 누구나 이용할 수 있는 빈틈없는 전 생애주기 지역사회 통합돌봄 서비스의 사례관리 앱입니다.",
      roles: [
        "React/TypeScript 기반 웹·앱 화면 구현 및 반응형 UI 개발",
        "React Native를 활용한 하이브리드 앱 개발",
        "WebView와 React Native 간 양방향 브릿지 통신 구현",
        "Kakao Map API를 활용한 시설 및 돌봄 위치 지도 표시 기능 구현",
        "카메라, 앨범, GPS, 파일 업로드 등 네이티브 기능 인터페이스 연동",
        "Axios / Zustand를 통해 REST API 통신 및 상태관리",
        "Android/iOS 스토어 배포 및 버전 관리, 심사 대응",
        "출시 이후 지속적인 유지보수 및 이슈 대응",
      ],
      stack: ["React", "TypeScript", "React Native", "Kakao Map API", "Zustand", "Axios", "Git"],
      achievements: [
        "광주광역시 5개구 통합 실서비스 출시 및 운영",
        "돌봄 대상자 위치 기반 서비스 연계 기능 구현으로 현장 업무 효율화 기여",
        "사례관리 앱 안정적 배포 및 지속 운영",
        "광주광역시 복지 정책 전산 시스템 개발",
      ],
    },
    {
      imgPath: dobanjang,
      title: "우리동네 Do 반장",
      description: "광주광역시 동구 주민이면 누구나 이용할 수 있는 생활밀착 문제해결 디지털 플랫폼",
      store: "https://play.google.com/store/apps/details?id=kr.co.nubiz.dobanjang&hl=ko-KR",
      view: "https://www.donggu.kr/dobanjang/",
      period: "2023.05 ~ 2023.07",
      images: [dobanjang, doscreen1, doscreen2, doscreen3, doscreen4, doscreen5],
      overview: "광주광역시 동구 주민이면 누구나 이용할 수 있는 생활밀착 문제해결 디지털 플랫폼입니다. 동네 문제를 주민이 직접 제보하고 해결하는 참여형 서비스입니다.",
      roles: [
        "React/TypeScript 기반 웹 화면 구현 및 반응형 UI 개발",
        "Kakao/Naver 소셜 로그인 연동 및 사용자 인증 구현",
        "Kakao Map API를 활용한 마을 생활지도 기능 구현",
        "FullCalendar 라이브러리를 활용한 공유공간 예약 및 일정 관리 기능 개발",
        "Kakao 공유하기 API를 활용한 예약·게시글 공유 기능 구현",
        "카메라, GPS, 앨범, 파일업로드 등 네이티브 기능 연동 및 모바일 환경 대응",
        "Android/iOS 스토어 배포 및 버전 관리, 심사 대응",
      ],
      stack: ["React", "TypeScript", "React-Native", "Axios", "Kakao Map API", "소셜 로그인", "Zustand", "Axios", "Git", "jQuery"],
      achievements: [
        "카카오·네이버 소셜 로그인 연동으로 사용자 접근성 향상",
        "지도 기반 생활정보 및 예약 시스템 구축으로 주민 편의성 개선",
        "카카오 공유하기 기능으로 커뮤니티 내 정보 공유 활성화",
      ],
    },
    {
      imgPath: donggu,
      title: "동구 거점수거 동구라미 ON",
      description: "광주광역시 동구 스마트그린도시 플랫폼 — 자원순환활동 및 포인트 적립",
      store: "https://play.google.com/store/apps/details?id=kr.co.nubiz.donggucollect",
      view: "https://www.donggurami.kr/",
      period: "2023.11 ~ 2024.03",
      images: [donggu, donggu1, donggu2, donggu3, donggu4, donggu5, donggu6, donggu7, donggu8, donggu9, donggu10],
      overview: "광주광역시 동구 쓰레기 수거차량 현황지도, 클린동구 신고 및 해결 등 자원순환활동을 하고 포인트를 모아 깨끗한 동구를 만드는 스마트그린도시 플랫폼입니다.",
      roles: [
        "React/TypeScript 기반 웹 화면 구현 및 반응형 UI 개발",
        "QGIS를 활용한 광주 전역 좌표 데이터 생성 및 Polygon Map 구현",
        "Kakao Map API 기반 자원순환 데이터 지도 시각화 및 필터링 기능 구현",
        "WebSocket 및 실시간 API 요청을 활용한 쓰레기 수거차량 관제 페이지 구현",
        "자원회수기기 연동 태블릿 WebView 페이지 개발",
        "jQuery를 활용한 레거시 환경 대응 및 UI 구성",
        "카메라, GPS, 앨범, 파일업로드 등 네이티브 기능 연동 및 모바일 환경 대응",
        "Android/iOS 스토어 배포 및 버전 관리, 심사 대응",
      ],
      stack: ["React", "TypeScript", "Axios", "Kakao Map API", "QGIS", "WebSocket", "소셜 로그인", "Git", "GitLab"],
      achievements: [
        "QGIS 기반 Polygon Map 구현으로 자원 순환 데이터 공간적 시각화 제공",
        "실시간 수거차량 관제 페이지 개발로 운영 효율성 향상",
        "현장 태블릿 WebView 페이지 개발로 자원회수기기 현장 업무 지원",
      ],
    },
    {
      imgPath: main,
      title: "동구 거점수거 동구라미 ON - 자원회수 기기 키오스크",
      description: "블루투스 저울과 연동된 자원회수 키오스크 앱으로 무게 측정 후 포인트를 지급하는 스마트 자원순환 시스템",
      store: "https://play.google.com/store/apps/details?id=kr.co.nubiz.donggucollect",
      view: "https://www.donggurami.kr/",
      period: "2023.11 ~ 2024.03",
      images: [main,],
      overview: "광주광역시 동구 쓰레기 수거차량 현황지도, 클린동구 신고 및 해결 등 자원순환활동을 하고 포인트를 모아 깨끗한 동구를 만드는 스마트그린도시 플랫폼입니다.",
      roles: [
        "Kotlin을 활용한 Android 네이티브 앱 개발",
        "Bluetooth 통신을 통한 저울 기기 연동 및 실시간 무게 데이터 수신 구현",
        "측정된 무게 기반 포인트 계산 및 번호 등록 기능 구현",
        "React 기반 키오스크 UI 개발 및 WebView를 통한 Kotlin 앱 내 화면 출력",
        "Kotlin ↔ React 간 WebView 브릿지 통신으로 데이터 송수신 처리",
        "동구라미 ON 플랫폼과 포인트 적립 시스템 연계",
      ],
      stack: ["Kotlin", "React", "TypeScript", "WebView", "Bluetooth", "Axios", "Git"],
      achievements: [
        "블루투스 저울 연동부터 포인트 지급까지 전체 흐름을 단일 앱으로 구현",
        "네이티브(Kotlin)와 웹(React)을 WebView 브릿지로 연결하는 하이브리드 구조 설계 및 구현",
        "동구라미 ON과 포인트 연계로 자원순환 생태계 확장에 기여",
      ],
    },
    {
      imgPath: suwon,
      title: "수원 새빛 돌봄",
      description: "수원시 돌봄 플랫폼 — 돌봄신청부터 만족도 조사까지 원스톱 처리",
      store: "https://play.google.com/store/apps/details?id=kr.co.nubiz.suwoncare&hl=ko",
      view: "https://www.suwon.go.kr:22891/care/",
      period: "2024.03 ~ 2024.10",
      images: [suwon, suwon1, suwon2, suwon3, suwon4, suwon5, suwon6],
      overview: "수원새빛돌봄은 언제 어디서나 사용할 수 있는 시스템으로서 포털을 통해 돌봄신청, 계획수립, 서비스 제공기록, 만족도 조사까지 원스톱으로 처리할 수 있는 돌봄 플랫폼입니다.",
      roles: [
        "React/TypeScript 기반 웹 화면 구현 및 반응형 UI/UX 개발",
        "Zustand를 활용한 상태 관리 및 비즈니스 로직 적용",
        "웹 세션 기반 SSO 로그인 및 브라우저 종료 시 세션 만료 처리 구현",
        "JWT 기반 앱 자동 로그인 및 액세스·리프레시 토큰 자동 갱신 로직 구현",
        "React Native를 활용한 하이브리드 앱 개발 및 WebView 연동",
        "React Native ↔ 네이티브 간 브릿지 통신을 통한 기능 연동",
        "카메라, 앨범, 서명, GPS, 파일 업로드 등 네이티브 기능 인터페이스 연동",
        "Android/iOS 스토어 배포 및 버전 관리, 심사 대응",
      ],

      stack: ["React", "TypeScript", "React Native", "Zustand", "Axios", "WebView", "JWT", "Git", "GitLab"],
      achievements: [
        "수원시 돌봄 서비스 디지털 전환 완료",
        "돌봄 신청~만족도조사 원스톱 프로세스 실현",
        "오프라인 중심의 돌봄업무를 전산화하여 공무원 현장 업무 효율화 기여",
        "웹·앱 통합 시스템 구축으로 사무·현장 환경 모두 대응 가능한 서비스 제공",
      ],
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          제가 참여한 완료된, 혹은 진행 중인 프로젝트 목록입니다.
          <br />
          아래 프로젝트들은 회사에서 진행한 프로젝트 및 개인 및 팀원과 함께 진행한 프로젝트입니다.
          <br />
          (카드를 클릭하면 상세 내용을 볼 수 있습니다)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                store={project.store}
                view={project.view}
                onClick={() => handleShow(project)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* ─── 프로젝트 상세 모달 ─── */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        className="project-detail-modal"
        dialogClassName="project-modal-dialog"
      >
        <Modal.Header closeButton className="project-modal-header">
          <Modal.Title className="project-modal-title">
            {selectedProject?.title}
            {selectedProject?.period && (
              <span className="project-modal-period">{selectedProject.period}</span>
            )}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="project-modal-body">
          {selectedProject && (
            <>
              {/* 이미지 슬라이드쇼 */}
              <ImageSlideshow
                images={selectedProject.images}
                title={selectedProject.title}
              />

              {/* 1. 개요 */}
              <div className="project-modal-section">
                <h4 className="project-modal-section-title">
                  <span className="section-number">1</span>
                  개요
                </h4>
                <p className="project-modal-overview">{selectedProject.overview}</p>
              </div>

              {/* 2. 주요 역할 및 담당 업무 */}
              <div className="project-modal-section">
                <h4 className="project-modal-section-title">
                  <span className="section-number">2</span>
                  주요 역할 및 담당 업무
                </h4>
                <ul className="project-modal-list">
                  {selectedProject.roles?.map((role, i) => (
                    <li key={i}>{role}</li>
                  ))}
                </ul>
              </div>

              {/* 3. Stack */}
              <div className="project-modal-section">
                <h4 className="project-modal-section-title">
                  <span className="section-number">3</span>
                  Stack
                </h4>
                <div className="project-modal-stack">
                  {selectedProject.stack?.map((tech, i) => (
                    <span key={i} className="stack-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* 4. 성과 및 기여도 */}
              <div className="project-modal-section">
                <h4 className="project-modal-section-title">
                  <span className="section-number">4</span>
                  성과 및 기여도
                </h4>
                <ul className="project-modal-list achievements">
                  {selectedProject.achievements?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Modal.Body>

        {/* <Modal.Footer className="project-modal-footer">
          {selectedProject?.store && (
            <Button
              className="project-modal-btn"
              href={selectedProject.store}
              target="_blank"
            >
              🏪 Store
            </Button>
          )}
          {selectedProject?.view && (
            <Button
              className="project-modal-btn"
              href={selectedProject.view}
              target="_blank"
            >
              🔗 View
            </Button>
          )}
          <Button className="project-modal-btn-close" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Container>
  );
}

export default Projects;
