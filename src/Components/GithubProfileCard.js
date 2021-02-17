import React from "react";
import {useSelector} from "react-redux";
import * as githubReducer from "../redux/githubSearch/githubSearch.reducer";

let GithubProfileCard = () => {
    let githubProfileRepoInfo = useSelector((state) => {
        return state[githubReducer.githubFeatureKey];
    });
    let {loading, gitHubProfile, error} = githubProfileRepoInfo;
    return (
        <React.Fragment>
            <React.Fragment>
                <div className="card">
                    <img src={gitHubProfile.avatar_url} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <p className="h4">{gitHubProfile.name}</p>
                        <small>{gitHubProfile.bio}</small><br/>
                        <a href={gitHubProfile.html_url} target="_blank" className="btn btn-success btn-sm">Profile</a>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    );
};
export default GithubProfileCard;
