export interface IAnnouncement {
    message: string;
    cycles?: number;
    duration?: number;
    color?: number;
    caps?: boolean;
}

export interface IAnnouncementAction {
    type: string;
    payload: IAnnouncement;
}