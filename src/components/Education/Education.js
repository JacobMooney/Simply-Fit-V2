import React from "react";
import { Link } from "react-router-dom";
import hierarchy from "../../shared/img/hierarchy.png";
import overlap from "../../shared/img/overlap.png";
import Navbar from "../Nav/Navbar";
import "./Education.css";

function Education() {
  return (
    <body>
      <Navbar />
      <div className="container eduArea">
        <h1>Training and Exercise</h1>
        <p>
          This section will cover the concepts and ideas around training that
          returns proven results. Fitness in general could be used to describe
          many types of athletics but we will be focusing primarily on weight
          lifting.
        </p>
        {/* How to stay motivated, change of lifestyle, things to drive motivation. Timelines for gains both in strength and size, diminishing returns over time of gains. */}
        <h2>Mindset and Expectations</h2>
        <hr />
        <p>
          In order to make the most out of your efforts in the gym, it is
          important to develope the correct mindset to stay focused on your
          goals. While it is common to expect immediate results and changes in
          your physique, visual changes to the body are often slow. Motivation
          to workout can come from many sources, but often times can be
          difficult to muster if you base it on slow changing things like
          physical changes. The most approprate mindset is to focus the long
          terms benefits for your health, and over time the physical changes
          will come aswell.
        </p>

        {/* Section to cover the terminology for lifting and exercise */}
        <h2>Common Terminology</h2>
        <div className="tableCenter">
          <table className="termTable">
            <thead>
              <tr>
                <th>Term</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Reps</strong>
                </td>
                <td>
                  The amount of repetitions preformed per set. | Example; 1
                  single push up is 1 rep or repetition.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Sets</strong>
                </td>
                <td>
                  The amount of times you preform a lift for a set of reps. |
                  Example; 5 push ups in sequence, followed by a break, and then
                  5 more push ups would be 2 sets of 5 reps.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Reps X Sets</strong>
                </td>
                <td>
                  Commonly how reps and sets are written in routines. | Example;
                  3 x 10 would mean 10 repetitions for each of the 3 sets.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>1 Rep Max</strong>
                </td>
                <td>
                  The absolute maximum amount of weight you can lift on a given
                  exercise for 1 repetition. Sometimes tested, but often
                  calculated using a 1 rep max calculator for safety.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Barbell</strong>
                </td>
                <td>
                  Long bars that can be loaded with individual weights/plates.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Dumbbell</strong>
                </td>
                <td>
                  Shorter bars that have fixed weights, often incrementing by
                  5lbs.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Compound Exercise</strong>
                </td>
                <td>
                  Exercises that work multiple muscle groups at once. Bench
                  Press, Deadlift, Squat, Pull Ups, Over Head Press, etc.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Isolation Exercise</strong>
                </td>
                <td>
                  Exercises that mainly target one specific muscle group.
                  Dumbbell Curl, Dumbbell or Machine Chest Fly, etc.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Strength</strong>
                </td>
                <td>Measures and describes how much weight can be lifted.</td>
              </tr>
              <tr>
                <td>
                  <strong>Hypertrophy</strong>
                </td>
                <td>Increasing muscular size and appearance.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Strength vs hypertrophy types of training */}
        <h2>Strength and Hypertrophy</h2>
        <hr />
        <h4>Strength</h4>
        <p>
          Strength is gained by lifting heavier weights than you have
          previously. This is commonly achieved by lifting weights in the 80-95%
          range of your 1 rep max with gradual increments over time. This
          primarily applies to compound lifts by adding 5 additional pounds each
          week. Exposing the body to high effort loads each week allows you to
          get stronger while minimizing risk of injury by increasing the weight
          lifted gradually.
        </p>

        <h5>Example routine with a strength goal example;</h5>
        <div>
          <strong>Week 1</strong> - Bench Press : 100lbs for 5 sets X 5 reps
        </div>
        <div>
          <strong>Week 2</strong> - Bench Press : 105lbs for 5 sets X 5 reps
        </div>
        <div>
          <strong>Week 3</strong> - Bench Press : 110lbs for 5 sets X 5 reps
        </div>
        <div>
          <strong>Week 4</strong> - Bench Press : 115lbs for 5 sets X 5 reps
        </div>

        <h4>Hypertrophy</h4>
        <p>
          Hypertrophy is primarily gained through a combination of volume and
          intensity. Volume referring to the number of sets per muscles group
          per week, and intensity as the relative effort per set. Lifting with
          hypertrophy as a goal requires lifting in the 65-80% of 1 rep max
          range. Since the weight used per set is lighter it allows you to do
          more reps, which translates to more total volume.
        </p>

        <h5>Example plan with a hypertrophy goal example;</h5>
        <div>
          <strong>Week 1</strong> - Bench Press : 80lbs for 3 sets X 8 reps
        </div>
        <div>
          <strong>Week 2</strong> - Bench Press : 80lbs for 3 sets X 10 reps
        </div>
        <div>
          <strong>Week 3</strong> - Bench Press : 80lbs for 3 sets X 12 reps
        </div>
        <div>
          <strong>Week 4</strong> - Bench Press : 85lbs for 3 sets X 8 reps
        </div>

        <h2>Training for Strength or Hypertrophy</h2>
        <hr />
        <p>
          A common misconception people have after learning the above concepts
          about strength and hypertrophy is that you can only train one at a
          time. While this is not entirely true or false, it is worth explaining
          that often routines will be oriented around a specific training goal.
          Because focusing on one goal at a time often is the most efficient way
          to train for each area. It's recommended to start with strength
          training, then change routines when the gains start to diminish and a
          good strength base is formed.
        </p>

        <ul>
          <li>
            <h5>Strength / PowerLifting</h5>
            <ul>
              <li>Primary goal to get stronger</li>
              <li>Also will increase muscles size but to a lesser degree</li>
            </ul>
          </li>

          <li>
            <h5>Hypertrophy / Bodybuilding</h5>
            <ul>
              <li>Primary goal to increase muscular size</li>
              <li>
                Likely will gain some additional strength but at a slower rate
              </li>
            </ul>
          </li>
        </ul>

        <p>
          So it's possible to gain both strength and size at the same time, but
          focusing on a specific goal often leads to faster results. The graph
          below illustrates this relationship between the two primary training
          targets.
        </p>

        <img className="diagram" alt="Strength vs Hypertrophy" src={overlap} />

        {/* Highlight the importance of exercise selections - compounds vs isolation / multi-joint vs single-joint */}
        <h2>Exercise Selection</h2>
        <hr />
        <p>
          When deciding on the exercises to include in a routine, it's worth
          considering which ones will provide the most results. In order to make
          steady progress building a routine intelligently can make it twice as
          effective. Below is general list of the catagories most equipment will
          fit into and should make up the bulk of any routine.
        </p>

        <img className="diagram" alt="hierarchy of exercises" src={hierarchy} />
        <ul>
          <h4>Barbell Exercises</h4>
          <p>
            Lifts using the barbell should make up the foundation of any good
            routine. Barbell movements are primarily compound movements, which
            means they work multiple muscles at once. Additionally most of these
            exercises can be loaded much heavier than other options, making them
            great for increasing strength.
          </p>

          <h4>Dumbbell Exercises</h4>
          <p>
            Dumbbell exercises are important because they can be used to train
            muscle groups together or in isolation. Additionally they can be
            used to train the body iso-laterally, or each side on it's own. This
            is very useful for strengthening and correcting muscular imbalances.
            Dumbbells force the body to stabilize and preform the lift without
            assistance from the other side of the body.
          </p>

          <h4>Machine Exercises</h4>
          <p>
            Machine exercises often get a bad rep for not being "real lifts" but
            they often excel in their specific muscle building goal. Machines
            allow you to train for certain lifts before you have the nessecarry
            strength to preform them. For example; using machines you can train
            the movement pattern for pull ups, building your arm and lat
            strength enough to eventually preform them with bodyweight. Another
            benefit of machines, is they allow you to push yourself closer to
            failure more safely without the need of a spotter.
          </p>
        </ul>

        {/* Talk about days per week and recovery */}
        <h2>Frequency of training</h2>
        <hr />
        <p>
          Beginners typically can recover from training fairly quickly, but as
          you get more advanced you will find what your body can handle.
          Generally larger muscles take longer to recover like the quadriceps of
          the legs, and smaller muscles take less time like the deltoids of the
          shoulders. Which is why some people will use routines that alternate
          between body parts. That being said, typically you can work each
          muscle group at least 3 times a week. I recommend full body routines
          as they take advantage of this recovery rate, while also keeping the
          workouts enjoyable.
        </p>

        {/* How to measure progress with volume or weight */}
        <h2>Tracking Progress</h2>
        <hr />
        <p>
          Just like monitoring your weight, and paying attention to what you
          eat, tracking your progress in the gym is important to getting
          results. The key part of tracking progress is that you have some sort
          of metric for showing you're improving each week. Increasing the
          weight used is a common variable, but you can also use volume, rest
          times, total number of exercises, or anything that gradually increases
          the challenge each week.
        </p>
        <p>
          Here is a link to an
          <a className="eduLink" href="http://www.fitnotesapp.com/"> Android </a>
          and
          <a className="eduLink" href="https://www.getfitnotes.com/"> IOS </a>
          version of the same app that is great for tracking your gym progress.
          Using these in combination with the routine builder, you will be able
          to start working out on the right foot.
        </p>

        <h2>About the routine builder</h2>
        <hr />
        <p>
          The routine builder is meant to give you a basic idea of what a
          routine might look like, and hopefully a starting point. The options
          on the builder are fairly straight forward but I wanted to elaborate a
          little on each of the routine types; Bodybuilding, Strength, and
          Hybrid. Each one of these routines I tried to encompass a total body
          fitness mindset, but each option does push towards a specific goal.
        </p>
        <ul>
          <h4>Bodybuilding</h4>
          <p>
            This routine is primarily focused on muscle size, but a complete
            beginner could expect to make some strength gains as well. The
            emphasis here is on training volume and taking the majority of sets
            to the 10-12 rep range while preforming more exercises total. Due to
            the volume of this type of routine, most of the work should be done
            in the 65% to 80% of 1 rep max range.
          </p>

          <h4>Strength</h4>
          <p>
            This option is focused on gaining strength by keeping the reps per
            set smaller in the beginning of the routine. While strength routines
            are about getting stronger faster, they also tend to benifit from
            less is more. So the first 2 lifts of each day should be the hardest
            part of the session in the 85% to 95% 1 rep max range. The remaining
            exercises for each day will help condition and provide some support
            for overall strength.
          </p>

          <h4>Hybrid</h4>
          <p>
            Finally the hybrid routine is aimed at taking the best of both
            training goals. The key point here is partially copying the strength
            routines hard first 2 lifts, but adding more total lifts/volume to
            the workout like the bodybuilding routine.
          </p>
        </ul>
        <div className="bottomBtn">
          <Link to="/routine">
            <button className="btn">{"Routine -->"}</button>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Education;
