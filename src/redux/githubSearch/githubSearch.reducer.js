import * as githubActions from './githubSearch.action';
export const githubFeatureKey = 'githubSearch';

let initialstate = {
    loading: false,
    error: '',
    gitHubProfile : {},
    githubRepo: []
};

export const reducer = (state= initialstate, action) => {
    switch(action.type) {
        case githubActions.FETCH_GITHUB_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case githubActions.FETCH_GITHUB_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                gitHubProfile: action.payload
            };
        case githubActions.FETCH_GITHUB_PROFILE_FAILURE:
            return {
                ...state,
                gitHubProfile: action.payload
            };
        case githubActions.FETCH_GITHUB_REPO_REQUEST:
            return {
                ...state,
                loading: true
            };
        case githubActions.FETCH_GITHUB_REPO_SUCCESS:
            return {
                ...state,
                loading: false,
                githubRepo: action.payload
            };
        case githubActions.FETCH_GITHUB_REPO_FAILURE:
            return {
                ...state,
                githubRepo: action.payload
            };
        default: return state;

    }
};
