import * as React from 'react';
import AnnouncementList from '../components/AnnouncementList';
import { IAnnouncement } from '../../../models/Announcement';

export namespace ListProps {
    export interface IStateProps {
        announcement: IAnnouncement;
        isSubmitted: boolean;
    }

    export interface IDispatchProps {
    }
    export interface IOwnProps { }
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { }

    export interface IState {
        announcement: IAnnouncement;
    }
}

export default AnnouncementList;