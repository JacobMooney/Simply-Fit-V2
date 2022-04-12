import "./Nutrition.css";

function TDEEform(props) {
  return (
    <div className="tdeeForm">
      <legend>Input your Information</legend>
      <form>
        <div onChange={props.handleChange}>
          <label>Male</label>
          <input defaultChecked name="gender" type="radio" value={1} />
        </div>
        <div onChange={props.handleChange}>
          <label> // Female</label>
          <input name="gender" type="radio" value={2} />
        </div>
      </form>
      <div onChange={props.handleChange}>
        <label htmlFor="heightSelect">Height: </label>

        <select
          id="heightSelect"
          name="heightFoot"
          type="select"
          defaultValue={5}
          style={{ width: 80 }}
        >
          <option value={1}>1 ft</option>
          <option value={2}>2 ft</option>
          <option value={3}>3 ft</option>
          <option value={4}>4 ft</option>
          <option value={5}>5 ft</option>
          <option value={6}>6 ft</option>
          <option value={7}>7 ft</option>
        </select>

        <select
          id="heightSelect"
          name="heightInch"
          type="select"
          style={{ width: 80 }}
        >
          <option value={1}>0 in</option>
          <option value={1}>1 in</option>
          <option value={2}>2 in</option>
          <option value={3}>3 in</option>
          <option value={4}>4 in</option>
          <option value={5}>5 in</option>
          <option value={6}>6 in</option>
          <option value={7}>7 in</option>
          <option value={8}>8 in</option>
          <option value={9}>9 in</option>
          <option value={10}>10 in</option>
          <option value={11}>11 in</option>
        </select>
      </div>
      <div onChange={props.handleChange}>
        <label htmlFor="weightSelect">Weight: </label>
        <input
          style={{ width: "98%" }}
          placeholder="Weight"
          id="weightSelect"
          name="weight"
          type="text"
          maxLength={3}
          min={0}
          max={999}
        />
      </div>
      <div onChange={props.handleChange}>
        <label htmlFor="weightSelect">Age: </label>
        <input
          style={{ width: "98%" }}
          placeholder="Age"
          id="weightSelect"
          name="age"
          type="text"
          maxLength={2}
          min={0}
          max={99}
        />
      </div>
      <div onChange={props.handleChange}>
        <label htmlFor="activitySelect">Activity Level: </label>
        <select
          style={{ width: "98%" }}
          id="activitySelect"
          name="level"
          type="select"
        >
          <option value={1.2}>
            Sedentary (little to no exercise + work a desk job)
          </option>
          <option value={1.375}>
            Lightly Active (light exercise 1-3 days / week)
          </option>
          <option value={1.55}>
            Moderately Active (moderate exercise 3-5 days / week)
          </option>
          <option value={1.725}>
            Very Active (heavy exercise 6-7 days / week)
          </option>
          <option value={1.9}>
            Extremely Active (very heavy exercise, hard labor job, training 2x /
            day)
          </option>
        </select>
      </div>
    </div>
  );
}

export default TDEEform;
