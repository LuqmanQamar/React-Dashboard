import "./newuser.css"

export default function NewUser() {
    return (
        <div className='newuser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" />
                </div>
                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />
                </div>
                <div className="newUserItem">
                    <label>Phone No.</label>
                    <input type="tel" placeholder="Enter mobile number" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Enter address" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Others</label>
                    </div>

                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

            </form>
            <button className="newUserButton">Create</button>
        </div>
    )
}
