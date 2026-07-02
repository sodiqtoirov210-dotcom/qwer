const App = () => {
return (
<div className="container">
    <div className="left">
        <img src="/images.jpg" alt="Profile" />
        <button type="button">Change Image</button>
    </div>

    <div className="right">
        <div className="formgroup">
            <label>Firstname</label>
            <input type="text" placeholder="Enter firstname" />
    </div>

        <div className="formgroup">
            <label>Surname</label>
            <input type="text" placeholder="Enter surname" />
        </div>

        <div className="formgroup">
            <label>Birthday</label>
            <input type="date" />
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
            <input type="password" placeholder="Enter password" />
        </div>

        <div className="formgroup">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
        </div>

        <div className="formgroup">
            <label>Passport Series</label>
            <input
                type="text"
                placeholder="AA1234567"
                pattern="[A-Za-z]{2}[0-9]{7}"
            />
        </div>

        <div className="formgroup">
            <label>Skill Set</label>
            <select multiple size="4">
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
                <option value="Windows">Windows</option>
                <option value="Linux">Linux</option>
            </select>
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
            <input
                type="number"
                placeholder="Enter number of cars"
                min="0"
            />
        </div>

        <div className="formgroup">
            <label>About Info</label>
            <textarea
                placeholder="Write about yourself"
                rows="5"
            ></textarea>
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