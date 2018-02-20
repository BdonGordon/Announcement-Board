import { IAnnouncement } from '../models/Announcement';

export const ANNOUNCEMENT_POST = 'ANNOUNCEMENT_POST';

export interface IAnnounceState {
    readonly isValid: boolean;
}

const initialState: IAnnounceState = {
    isValid: false
};

export function postAnnouncement(message: string) {
    return {
        type: ANNOUNCEMENT_POST,
        payload: message
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