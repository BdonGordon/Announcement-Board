export interface IAnnouncement {
    message: string;
    cycles?: number;
    duration?: number;
    color?: number;
    caps?: boolean;
}

/**
 * This is just a type that will be used in conjuction with IAnnouncement in the reducer module
 **/
export interface IAnnouncementAction {
    type: string;
    payload: IAnnouncement;
}