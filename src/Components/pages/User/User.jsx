import "./user.css"
import userOne from "./imgs/woman-3990680_1280.jpg"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={userOne} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <div className="userShowUsername">Aina Parker</div>
                            <div className="userShowUserTitle">Software Engineer</div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">ainaparker99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">9 Dec 1997</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+44-000-0000</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">ainaparker99gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">London | United Kingdom</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder="ainaparker99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Fullname</label>
                                <input type="text" placeholder="Aina Parker" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="email" placeholder="ainaparker99gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="tel" placeholder="+44-000-0000" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder="London" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={userOne} alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish /> </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
