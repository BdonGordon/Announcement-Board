import { IAnnouncement } from '../models/Announcement';

export const ANNOUNCEMENT_POST = 'ANNOUNCEMENT_POST';

export interface IAnnounceState {
    readonly isValid: boolean;
    readonly announcement: IAnnouncement;
}

/**
 * Making this up lol
 **/
const initialAnnouncement: IAnnouncement = {
    message: '',
    cycles: 0,
    duration: 0,
    color: 0,
    caps: false
};

const initialState: IAnnounceState = {
    isValid: false,
    announcement: initialAnnouncement
};

export function postAnnouncement(announcement: IAnnouncement) {
    return {
        type: ANNOUNCEMENT_POST,
        payload: announcement.message
    };
}

export function announcementReducer(state: IAnnounceState = initialState, action) {
    switch (action.type) {
        case ANNOUNCEMENT_POST:
            return Object.assign({}, state, {
                isValid: true
            });

        default:
            break;
    }

    return state;
}