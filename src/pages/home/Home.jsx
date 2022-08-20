import React from "react";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css"

export default function Home() {
    return (
        <>
            <Topbar />
            {/*Fragments to include multiple components*/}
            <div className="homeContainer">
                <Sidebar />
                <Feed/>
                <Rightbar />
            </div>
        </>
    );
}
