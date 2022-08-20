import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import InsertInvitationRoundedIcon from "@mui/icons-material/InsertInvitationRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import { Users } from "../../dummyData";
import CloseFriend from "../CloseFriend/CloseFriend";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Chats</span>
                    </li>

                    <li className="sidebarListItem">
                        <PlayCircleIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Videos</span>
                    </li>

                    <li className="sidebarListItem">
                        <GroupsRoundedIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Groups</span>
                    </li>

                    <li className="sidebarListItem">
                        <BookmarksRoundedIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">
                        <HelpOutlineRoundedIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Questions</span>
                    </li>

                    <li className="sidebarListItem">
                        <WorkOutlineRoundedIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Jobs</span>
                    </li>

                    <li className="sidebarListItem">
                        <InsertInvitationRoundedIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Events</span>
                    </li>

                    <li className="sidebarListItem">
                        <SchoolRoundedIcon className="sidebarIcon" />
                        <span className="sidebarListItemtext">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriend  key ={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}
