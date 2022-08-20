import React from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
    return (
        <>
            <Topbar />
            {/*Fragments to include multiple components*/}
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src="/assets/post/3.jpeg"
                                className="profileCoverImg"
                                alt=""
                            />
                            <img
                                src="/assets/post/7.jpeg"
                                className="profileUserImg"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Aditya Gole</h4>
                            <h4 className="profileInfoDesc">Hey Guys !! </h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}
