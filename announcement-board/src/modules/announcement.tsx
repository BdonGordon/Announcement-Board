import { IAnnouncement, IAnnouncementAction } from '../models/Announcement';

export const ANNOUNCEMENT_POST = 'ANNOUNCEMENT_POST';

type IAnnouncementActions = IAnnouncementAction;

export function postAnnouncement(announcement: IAnnouncement): IAnnouncementAction {
    return {
        type: ANNOUNCEMENT_POST,
        payload: announcement
    };
}

const initialState: IAnnouncement = {
    message: '',
    cycles: 0,
    duration: 0,
    color: 0,
    caps: false
};

export function announcementReducer(state: IAnnouncement = initialState, action: IAnnouncementActions) {
    switch (action.type) {
        case ANNOUNCEMENT_POST:
            return Object.assign({}, state, {
                announcement: action.payload /**the value will be assigned to the payload since we want the entire object to be returned**/
            });

        default:
            break;
    }

    return state;
}