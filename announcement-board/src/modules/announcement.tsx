﻿import { IAnnouncement, IAnnouncementAction, IAnnouncementState } from '../models/Announcement';

export const ANNOUNCEMENT_POST = 'ANNOUNCEMENT_POST';
export const ANNOUNCEMENT_STORE = 'ANNOUNCEMENT_STORE';
export const ANNOUNCEMENT_REMOVE = 'ANNOUNCEMENT_REMOVE';
//this will be the type that is used for the desired function and the action parameter in the reducer function
type IAnnouncementActions = IAnnouncementAction;

/**
 * We are returning the ENTIRE IAnnouncement object through the payload
 * @param announcement
 */
export function postAnnouncement(announcement: IAnnouncement): IAnnouncementAction {
    return {
        type: ANNOUNCEMENT_POST,
        payload: announcement
    };
}

/**
 * Just initializing an initialState for the state in the reducer function
 */
const initialState: IAnnouncementState = {
    mostRecent: {
        timeStamp: new Date().toLocaleTimeString(),
        message: '',
        cycles: 0,
        duration: 0,
        color: 0,
        caps: false
    },
    announcements: []
};
/*
const initialList: IAnnouncementList = {
    postedAnnouncement: initialState,
    announcementList: new Array()
};
*/

/**
 * In the ANNOUNCEMENT_POST, we just want to return the payload 
 * @param state => assigned to the initialState 
 * @param action => of type IAnnouncementActions which allows for action.payload.anyproperty to be accessed and seen via Intellisense
 */
export function announcementReducer(state: IAnnouncementState = initialState, action: IAnnouncementActions) {
    console.log(state.announcements);
    switch (action.type) {
        case ANNOUNCEMENT_POST:
            return Object.assign({}, state, {
                mostRecent: action.payload,
                announcements: [...state.announcements, action.payload]
            });

        default:
            break;
    }

    return state;
}

/* One version of case but it does not render the AnnouncementList class

case ANNOUNCEMENT_POST:
    let ann: IAnnouncement[] = state.announcements;
    ann.concat(action.payload);

    return Object.assign({}, state, {
        mostRecent: action.payload,
        announcements: ann
    });

*/