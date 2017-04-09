import actionConstants from './constants';
import moment from 'moment';

export function addPublication(from, text) {

    return {
        type: actionConstants.ADD_PUBLICATION,
        payload: {
            from,
            text,
            time: moment().format(),
            comments: [],
            reactions: []
        }
    }
}

export function addComment(idx, from, text) {

    return {
        type: actionConstants.ADD_COMMENT,
        payload: {
            idx,
            comment: {
                from,
                text,
                time: moment().format(),
            }
        }
    };
}

export function addReaction(idx, reaction = '1') {
    return {
        type: actionConstants.ADD_REACTION,
        payload: {
            idx,
            reaction
        }
    };
}

export function switchUser(user = 'Juan Rodriguez') {
    return {
        type: actionConstants.SWITCH_USER,
        payload: user
    };
}