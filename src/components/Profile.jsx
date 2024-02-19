import React from "react";
import classes from "../modules/Profile.module.scss";

const Profile = (props) => {
  
    return (
    <div>    
        <div>
          <img src={props.value.avatar_url} alt="" />
          <div className={classes["profile-box"]}>
            <div className={classes["profile-title"]}>
              <h2>{props.value.name}</h2>
              <p>Joined {props.value.created_at}</p>
            </div>
            <p>{props.value.login}</p>
            <p>{props.value.bio}</p>
            {/* <p>🟢 Architecture & hardware</p>
            <p>🟢 Typescript</p>
            <p>🟢 Node JS</p>
            <p>🟢 SQL</p> */}
            <div className={classes["profile-title"]}>
              <div>
                <p>repos</p>
                <h1>{props.value.public_repos}</h1>
              </div>
              <div>
                <p>Followers</p>
                <h1>{props.value.followers}</h1>
              </div>
              <div>
                <p>Following</p>
                <h1>{props.value.following}</h1>
              </div>
            </div>
            <div className={classes["profile-title"]}>
              <div>
                <img src="" alt="" />
                <p>{props.value.location}</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Not Available</p>
              </div>
            </div>
            <div className={classes["profile-title"]}>
              <div>
                <img src="" alt="" />
                <p>{props.value.blog === '' ? 'none' : props.value.blog}</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>{props.value.company === '' ? 'none' : props.value.company}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Profile;
