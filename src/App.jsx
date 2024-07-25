import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Balloon from "./baloon";
import happyBirthdaySquidward from "./assets/HappyBirthdaySquidward.mp3";
import Timer from "./timer"
import useTimeUp from "./useTimeup";

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const [animate, setAnimate] = React.useState(false);
  const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];
  const audio = new Audio(happyBirthdaySquidward)
  const balloons = colors.map((color, index) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 5; // Random delay between 0 and 5 seconds
    return (
      <Balloon
        key={index}
        color={color}
        left={left}
        delay={delay}
        animate={animate}
      />
    );
  });
  const dueDate = "2024/9/1 0:00:00"
  const isTimeup = useTimeUp(dueDate)
  useEffect(() => {
    if (isTimeup) {
      document.title = "Happy Birthday Maeen!"
    }
  })

  return (
    <div >
      {isTimeup == false ? <Timer targetDate={dueDate} /> :
      <Container className="app">
        <Row align="center">
          <Col className="birthday-box">
            <Row className="flex-row">
              <Col>
                <h1>Hi!</h1>
              </Col>
              <Col>
                <motion.h1
                  animate={{ rotate: [25, -8, 25] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  👋
                </motion.h1>
              </Col>
            </Row>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="scroll-button"
              onClick={() => scrollToSection("birthday-card")}
            >
              Click Me
            </motion.button>
          </Col>

          <Col>
            <section className="spacer"></section>
            <section className="spacer"></section>
            <section className="spacer"></section>
            <section className="spacer"></section>
            <section className="spacer"></section>
          </Col>

          <Col>
            <div className="birthday-box" id="birthday-card">
              <motion.h2 className="birthday-text">Happy Birthday!</motion.h2>

              <h2 className="big-emoji">🥳🎂</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.7 }}
                className="scroll-button"
                onClick={() => {
                  setAnimate(!animate)
                
                  audio.play()
                }}
              >
                Celebrate
              </motion.button>
            </div>
            {balloons}

          </Col>
        </Row>
      </Container>
}
    </div>
  );
}

export default App;
