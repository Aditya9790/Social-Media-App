import React from "react";
import "./share.css";
import PermMediaRoundedIcon from "@mui/icons-material/PermMediaRounded";
import LabelImportantRoundedIcon from "@mui/icons-material/LabelImportantRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";

export default function Share() {
    return (
        <div className="share">
            Share Photos
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg "
                        src="/assets/person/1.jpeg"
                        alt=""
                    />
                    <input
                        placeholder="What's on your mind?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaRoundedIcon
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                        </div>

                        <div className="shareOption">
                            <LabelImportantRoundedIcon
                                htmlColor="blue"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                            <RoomRoundedIcon
                                htmlColor="green"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Location</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotionsRoundedIcon
                                htmlColor="goldenrod"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}
