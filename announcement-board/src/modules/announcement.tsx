import { IAnnouncement, IAnnouncementAction } from '../models/Announcement';

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
const initialState: IAnnouncement = {
    message: '',
    cycles: 0,
    duration: 0,
    color: 0,
    caps: false
};

/**
 * In the ANNOUNCEMENT_POST, we just want to return the payload 
 * @param state => assigned to the initialState 
 * @param action => of type IAnnouncementActions which allows for action.payload.anyproperty to be accessed and seen via Intellisense
 */
export function announcementReducer(state: IAnnouncement = initialState, action: IAnnouncementActions) {
    switch (action.type) {
        case ANNOUNCEMENT_POST:
            return Object.assign({}, state, {
                announcement: action.payload
            });

        default:
            break;
    }

    return state;
}