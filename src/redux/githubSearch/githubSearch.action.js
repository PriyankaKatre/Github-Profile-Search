import {CLIENT_ID, CLIENT_SECRET} from "../../Components/GtihubCredentials";
import Axios from 'axios';

export const FETCH_GITHUB_PROFILE_REQUEST = 'FETCH_GITHUB_PROFILE_REQUEST';
export const FETCH_GITHUB_PROFILE_SUCCESS = 'FETCH_GITHUB_PROFILE_SUCCESS';
export const FETCH_GITHUB_PROFILE_FAILURE = 'FETCH_GITHUB_PROFILE_FAILURE';

export const FETCH_GITHUB_REPO_REQUEST = 'FETCH_GITHUB_REPO_REQUEST';
export const FETCH_GITHUB_REPO_SUCCESS = 'FETCH_GITHUB_REPO_SUCCESS';
export const FETCH_GITHUB_REPO_FAILURE = 'FETCH_GITHUB_REPO_FAILURE';


export const githubProfileInfo = (githubUser) => {
    return async (dispatch) => {
        dispatch({type: FETCH_GITHUB_PROFILE_REQUEST});
        try {
            let dataURL = `https://api.github.com/users/${githubUser}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
            let response = await Axios.get(dataURL);
            dispatch({type:FETCH_GITHUB_PROFILE_SUCCESS, payload:response.data});
        }
        catch (error) {
            dispatch({type:FETCH_GITHUB_PROFILE_FAILURE, payload:error});
        }
    };
};

export const githubRepoInfo = (githubUser) => {
    return async (dispatch) => {
        dispatch({type: FETCH_GITHUB_REPO_REQUEST});
        try {
            let dataURL = `https://api.github.com/users/${githubUser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
            let response = await Axios.get(dataURL);
            dispatch({type:FETCH_GITHUB_REPO_SUCCESS, payload:response.data});
        }
        catch (error) {
            dispatch({type:FETCH_GITHUB_REPO_FAILURE, payload:error});
        }
    };
};
