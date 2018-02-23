export interface IAnnouncement {
    message: string;
    cycles?: number;
    duration?: number;
    color?: number;
    caps?: boolean;
}

export interface IAnnouncementState {
    mostRecent: IAnnouncement;
    announcements: IAnnouncement[];
}

export interface IAnnouncementAction {
    type: string;
    payload: IAnnouncement;
}

//export interface IListAction {
//    type: string;
//    payload: {
//        announcements: IAnnouncement[]
//    };
//}