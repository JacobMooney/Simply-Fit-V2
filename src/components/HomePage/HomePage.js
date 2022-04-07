import { Link } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  return (
    <body>
      <section>
        <nav>
          <a className="logo" href to="/home">
            Simply Fit
          </a>
          <div>
            <ul>
              <li>
                <Link to="/nutrition"> Nutrition</Link>
              </li>
              <li>
                <Link to="/education">Fitness</Link>
              </li>
              <li class="nav-item">
                <Link to="/options">Routine</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <header>
        <div>
          <div>
            <div>
              <h1>Simplifying Fitness</h1>
              <p>Fitness For Anyone</p>
            </div>
          </div>
          <div>
            <div>
              <Link to="/nutrition">
                <button>Learn</button>
              </Link>
              <Link to="/options">
                <button>Train</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div>
          <div>
            <div>
              <h2>NUTRITION</h2>
              <p>
                Learn the basics of nutrition, and get a better understanding of
                how to fuel yourself to reach your goals.
              </p>
              <Link to="/nutrition">
                <button>Get Started!</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div>
              <h2>TRAINING</h2>
              <p>
                Explore the ideas and concepts that go into fitness and weight
                training.
              </p>
              <Link to="/education">
                <button>Get Started!</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div>
              <h2>PROGRAM BUILDER</h2>
              <p>
                Use our routine maker to find a program for your specific goals.
              </p>
              <Link to="/options">
                <button>Get Started!</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default HomePage;
