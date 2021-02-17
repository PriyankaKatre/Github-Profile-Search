import React from "react";
import {useSelector} from "react-redux";
import * as githubReducer from "../redux/githubSearch/githubSearch.reducer";

let GithubProfileDetails = (props) => {
    let githubProfileRepoInfo = useSelector((state) => {
        return state[githubReducer.githubFeatureKey];
    });
    let {loading, gitHubProfile, error} = githubProfileRepoInfo;
    return (
        <React.Fragment>
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <span className="badge badge-success mx-2">{gitHubProfile.followers} Followers</span>
                        <span className="badge badge-warning mx-2">{gitHubProfile.public_repos} Repos</span>
                        <span className="badge badge-secondary mx-2">{gitHubProfile.public_gists} Gists</span>
                        <span className="badge badge-danger mx-2">{gitHubProfile.following} Following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                NAME : <span className="font-weight-bold">{gitHubProfile.name}</span>
                            </li>
                            <li className="list-group-item">
                                Location : <span>{gitHubProfile.location}</span>
                            </li>
                            <li className="list-group-item">
                                Email : <span>{gitHubProfile.email}</span>
                            </li>
                            <li className="list-group-item">
                                Company : <span>{gitHubProfile.company}</span>
                            </li>
                            <li className="list-group-item">
                                Blog : <span>
                                <a href={gitHubProfile.blog} target="_blank">Blog</a>
                            </span>
                            </li>
                            <li className="list-group-item">
                                Member Since : <span>{gitHubProfile.created_at}</span>
                            </li>
                            <li className="list-group-item">
                                Profile URL : <span>
                                <a href={gitHubProfile.html_url} target="_blank">{gitHubProfile.html_url}</a>
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    );
};
export default GithubProfileDetails;
