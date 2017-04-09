import actionConstants from '../config/constants';
import _ from 'lodash';
import { combineReducers } from 'redux';

function addPublication(state, action) {
    return [...state, action.payload];
}

function addComment(state, action) {
    const {
        idx,
        comment
    } = action.payload || {};
    const newState = _.cloneDeep(state);

    newState[idx].comments = [
        ...state[idx].comments,
        comment
    ];

    return newState;
}

function addReaction(state, action) {
    const {
        idx,
        reaction
    } = action.payload || {};
    const newState = _.cloneDeep(state);

    newState[idx].reactions = [
        ...state[idx].reactions,
        reaction
    ];

    return newState;
}

export function publications(state = [], action) {
    switch(action.type) {
        case actionConstants.ADD_PUBLICATION:
            return addPublication(state, action);
        case actionConstants.ADD_COMMENT:
            return addComment(state, action);
        case actionConstants.ADD_REACTION:
            return addReaction(state, action);
        default:
            return state;
    }
}

export function user(state = 'Juan Rodriguez', action) {
    if (action.type === actionConstants.SWITCH_USER) {
        return action.payload;
    }

    return state;
}

export default combineReducers({
  user,
  publications
});
