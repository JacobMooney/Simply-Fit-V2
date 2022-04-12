import React, { Component } from "react";
import Navbar from "../Nav/Navbar";
import "./Nutrition.css";
import TDEEform from "./TDEEComponent";

class Nutrition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 25,
      heightFoot: 6,
      heightInch: 0,
      heightCent: 0,
      weight: 200,
      gender: 1,
      level: 1.2,
    };
    this.toggleChangeHandler = this.toggleChangeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    let { name, value } = event.target;
    value = parseFloat(value);
    if (typeof value === "number") {
      this.setState({
        [name]: value,
      });
    }
  }

  toggleChangeHandler(event) {
    const { name, value } = event.target;
    value === "false"
      ? this.setState({ [name]: true })
      : this.setState({ [name]: false });
  }

  render() {
    const cmHeight =
      this.state.heightInch * 2.54 + this.state.heightFoot * 30.48;
    const kgWeight = this.state.weight / 2.205;
    const maleOption = Math.round(
      (66 + 13.7 * kgWeight + 5 * cmHeight - 6.8 * this.state.age) *
        this.state.level
    );
    const femaleOption = Math.round(
      (655 + 9.6 * kgWeight + 1.8 * cmHeight - 4.7 * this.state.age) *
        this.state.level
    );
    let calcCalories = this.state.gender === 1 ? maleOption : femaleOption;
    return (
      <body>
        <Navbar />
        <main className="container infoArea">
          <h2>Basics of nutrition for training</h2>
          <p>
            In order to make the most out of your training journey, it is
            important to know the basics about nutrition and lifting. This
            section is dedicated to giving absolute beginners a foundation of
            knowledge in order to maximize results.
          </p>
          <h2>Nutrition</h2>
          <p>
            Before we dive into lifting, we will cover some basic information
            about calories, macronutrients, micronutrients, and supplements.
          </p>
          <h3>Calories</h3>
          <hr />
          <p>
            Calories are used to describe the energy amount that can be gained
            from consuming any given food or drink. This is the top number on
            any nutrition label you will see, it represents the sum total of all
            the nutrients. Everyone needs to take in a certain amount of
            calories per day based upon several factors;
          </p>
          <ul>
            <li>Height</li>
            <li>Weight</li>
            <li>Age</li>
            <li>Gender</li>
            <li>Activity Levels</li>
          </ul>
          <div>
            <div>
              <h3>Total Daily Energy Expenditure (TDEE)</h3>
              <p>
                The calories required per day to maintain your current weight is
                commonly abbreviated as TDEE (total daily energy expenditure).
                When trying to gain or lose weight this is the primary number
                used to determine how much you should be eating.{" "}
              </p>
              <br />
              <div>
                Below you can calculate your TDEE, and the result will be used
                at the bottom of the page for an example application.
              </div>
              <div>
                <TDEEform handleChange={this.handleChange} />
              </div>
            </div>
          </div>
          <h3>
            Daily Calories:
            <span> {calcCalories ? calcCalories : "Invalid Values"}</span>
          </h3>
          <h2>Macronutrients</h2>
          <p>
            Macronutrients are the largest types of nutrients that make up
            calories in the things we eat. In the context of fitness and weight
            training we are primarily interested in 3 major macronutrients;
          </p>
          <h4>Protein</h4>
          <hr />
          <p>
            Proteins are the building blocks your body uses to grow, build, and
            repair. This macronutrient is primarily found in meats, poultry,
            fish, eggs, milk, and other animal products. There are also many
            plant based protein sources like beans, lentils, nuts, seeds, and
            some leafy greens. When it comes to weight training and muscle
            building protein is one of the most important macronutrients since
            they provide the building materials to grow.
          </p>
          <h4>Carbohydrates</h4>
          <hr />
          <p>
            Carbohydrates are the most readily usable sources of energy for the
            cells. With the exception of fiber, all carbohydrates get broken
            down into simple sugars. Although they sometimes have a bad
            reputation, due to raising insulin levels (AKA blood sugar), they
            are vital and necessary in order to maintain energy levels
            especially when dieting or trying to lose weight.
          </p>
          <h4>Fat</h4>
          <hr />
          <p>
            Fats are similar to carbohydrates, but they are more dense and as a
            result contain more calories. While many fad diets may demonize
            them, fats contribute towards certain hormones, absorption of fat
            soluble vitamins, and energy storage.
          </p>
          <h2>Weight Loss and Gain</h2>
          <p>
            When it comes to weight loss or weight gain it's often easy to get
            confused or discouraged due to the many diets out there. Since there
            is a very large economy around weight loss, a lot of the information
            of how to do it is shrouded intentionally. There are countless diets
            out there all claiming to magically make it easier. But for any of
            them to work one fundamental criteria must be met.
          </p>
          <ul>
            <li>
              <strong>
                In order to GAIN weight you must consume more calories than you
                need per day.
              </strong>
            </li>
            <li>
              <strong>
                In order to LOSE weight you must consume less calories than you
                need per day.
              </strong>
            </li>
          </ul>
          <h2>Example Application</h2>
          <p>
            A common method used to gain or lose weight is to simply calculate
            your TDEE and either add or subtract 200-500 calories from the
            result. A smaller deficit/surplus is typically easier to follow but
            obviously will result in slower results. Below is an example table
            showing the calories needed to gain or lose weight for someone with
            a TDEE of <strong>{calcCalories ? calcCalories : "Invalid Values"}</strong>{" "}
            calories.
          </p>
          <table className="infoTable">
            <thead>
              <tr>
                <th>-/+ calories</th>
                <th>
                  Losing Weight
                  <span></span>
                </th>
                <th>
                  Gaining Weight
                  <span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0 calories</td>
                <td>{calcCalories} cal</td>
                <td>{calcCalories} cal</td>
              </tr>
              <tr>
                <td>200 calories</td>
                <td>{calcCalories - 200} cal</td>
                <td>{calcCalories + 200} cal</td>
              </tr>
              <tr>
                <td>500 calories</td>
                <td>{calcCalories - 500} cal</td>
                <td>{calcCalories + 500} cal</td>
              </tr>
            </tbody>
          </table>
        </main>
      </body>
    );
  }
}

export default Nutrition;
