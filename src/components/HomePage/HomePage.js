import { Link } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import "./HomePage.css";

function HomePage() {
  return (
    <body>
      <Navbar />
      <div className="container">
        <header className="bannerArea">
          <div>
            <div>
              <div>
                <h1 className="banner">Simplifying Fitness</h1>
                <p>For Everyone</p>
              </div>
            </div>
            <div>
              <div>
                <Link to="/nutrition">
                  <button className="btn">Education</button>
                </Link>
                <Link to="/options">
                  <button className="btn">Training</button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <section className="cardArea">
          <div className="infoCard">
            <h2>NUTRITION</h2>
            <p>
              Learn the basics of nutrition, and get a better understanding of
              how to fuel yourself to reach your goals.
            </p>
            <Link to="/nutrition">
              <button className="btn">Get Started!</button>
            </Link>
          </div>
          <div className="infoCard">
            <h2>TRAINING</h2>
            <p>
              Explore the ideas and concepts that go into fitness and weight
              training.
            </p>
            <Link to="/education">
              <button className="btn">Get Started!</button>
            </Link>
          </div>
          <div className="infoCard">
            <h2>PROGRAM BUILDER</h2>
            <p>
              Use our routine maker to find a program for your specific goals.
            </p>
            <Link to="/options">
              <button className="btn">Get Started!</button>
            </Link>
          </div>
        </section>
      </div>
    </body>
  );
}

export default HomePage;
