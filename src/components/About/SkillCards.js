import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaCode,
  FaMobileAlt,
  FaWrench,
  FaRocket,
  FaJava
} from "react-icons/fa";
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiSass,
  DiGit,
  DiJava
} from "react-icons/di";
import {
  SiTypescript,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiGithub,
  SiFirebase,
  SiAppstore,
  SiGoogleplay,
  SiDart
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { MdOutlineSystemUpdate } from "react-icons/md";

const skillCategories = [
  {
    title: "Web Development",
    icon: <FaCode />,
    skills: [
      { icon: <DiReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <DiJavascript1 />, name: "JavaScript" },
      { icon: <DiHtml5 />, name: "HTML" },
      { icon: <DiSass />, name: "SCSS" },
    ],
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    skills: [
      { icon: <TbBrandReactNative />, name: "React Native" },
      { icon: <SiFlutter />, name: "Flutter" },
      { icon: <SiDart />, name: "Dart" },
    ],
  },
  {
    title: "Native Maintenance",
    icon: <FaWrench />,
    skills: [
      { icon: <SiKotlin />, name: "Kotlin" },
      { icon: <SiSwift />, name: "Swift" },
      { icon: <FaJava />, name: "JAVA" },
    ],
  },
  {
    title: "Collaboration & Deployment",
    icon: <FaRocket />,
    skills: [
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <DiGit />, name: "Git" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiAppstore />, name: "App Store" },
      { icon: <SiGoogleplay />, name: "Play Console" },
    ],
  },
];

function SkillCards() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skillCategories.map((category, index) => (
        <Col md={6} key={index} className="skill-card-col">
          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-card-category-icon">
                {category.icon}
              </span>
              <h3 className="skill-card-title">{category.title}</h3>
            </div>
            <div className="skill-card-icons">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-card-icon-item" key={skillIndex}>
                  <span className="skill-card-icon">{skill.icon}</span>
                  <span className="skill-card-icon-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default SkillCards;
