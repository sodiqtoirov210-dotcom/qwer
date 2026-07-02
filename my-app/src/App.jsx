import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import Profiler from "./assets/images (1).jpg";

// --- Skill Set Component ---
const skills = ["Android", "iOS", "Windows", "Linux"];

const SkillSelect = () => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const toggle = (skill) => {
    setSelected((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const remove = (skill, e) => {
    e.stopPropagation();
    setSelected((prev) => prev.filter((s) => s !== skill));
  };

  return (
    <div className="skill-wrapper">
      <div className="skill-box" onClick={() => setOpen(!open)}>
        <div className="tags">
          {selected.map((s) => (
            <span key={s} className="tag">
              {s}
              <button className="tag-remove" onClick={(e) => remove(s, e)}>×</button>
            </span>
          ))}
          {selected.length === 0 && (
            <span className="placeholder">Choose skills</span>
          )}
        </div>
        <span className="arrow">{open ? "▴" : "▾"}</span>
      </div>

      {open && (
        <div className="dropdown">
          {skills.map((skill) => (
            <div
              key={skill}
              className={`option ${selected.includes(skill) ? "active" : ""}`}
              onClick={() => toggle(skill)}
            >
              {selected.includes(skill) ? "✓ " : ""}{skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Main App ---
const App = () => {
  const [birthDate, setBirthDate] = useState(null);

  return (
    <div className="container">
      <div className="left">
        <img src={Profiler} alt="Profile" />
        <button type="button" className="change-photo">Change photo</button>
      </div>

      <div className="right">
        <div className="formgroup">
          <label>Firstname</label>
          <input type="text" placeholder="Enter fullname" />
        </div>

        <div className="formgroup">
          <label>Surname</label>
          <input type="text" placeholder="Enter fullname" />
        </div>

        {/* ✅ DatePicker */}
        <div className="formgroup">
          <label>Birthday</label>
          <DatePicker
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            placeholderText="Enter birthday"
            dateFormat="MM/dd/yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="date-input"
          />
        </div>

        <div className="formgroup">
          <label>Gender</label>
          <select>
            <option value="">Choose gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="formgroup">
          <label>Contact Number</label>
          <input type="tel" placeholder="Enter phone number" />
        </div>

        <div className="formgroup">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>

        <div className="formgroup">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>

        <div className="formgroup">
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter Confirm Password" />
        </div>

        <div className="formgroup">
          <label>Passport Series</label>
          <input type="text" placeholder="Enter passport series" pattern="[A-Za-z]{2}[0-9]{7}" />
        </div>

        {/* ✅ Skill Set */}
        <div className="formgroup">
          <label>Skill set</label>
          <SkillSelect />
        </div>

        <div className="formgroup">
          <label>Role</label>
          <select>
            <option value="">Choose a role</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
            <option value="Accountant">Accountant</option>
          </select>
        </div>

        <div className="formgroup">
          <label>Number of Cars</label>
          <input type="number" placeholder="Enter number of cars" min="0" />
        </div>

        <div className="formgroup">
          <label>About Info</label>
          <textarea placeholder="Write about yourself" rows="5"></textarea>
        </div>

        <div className="buttons">
          <button type="reset">Reset</button>
          <button type="submit">Save</button>
        </div>
      </div>
    </div>
  );
};

export default App;