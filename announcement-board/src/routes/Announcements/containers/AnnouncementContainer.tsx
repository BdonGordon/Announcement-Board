import * as React from 'react';
import Announcement from '../components/Announcement';
import { postAnnouncement } from '../../../modules/announcement';
import { connect } from 'react-redux';
import { IAnnouncement } from '../../../models/Announcement';

export namespace AnnouncementProps {
    //IStateProps is state values from the store
    export interface IStateProps {
        announcement: IAnnouncement;
    }

    export interface IDispatchProps {

        postAnnouncement: (announcement: IAnnouncement) => Promise<void>;
    }

    export interface IOwnProps { } 
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { }

    //IState is the component state
    export interface IState {
        message: string;
        cycles?: number;
        duration?: number;
        color?: number;
        caps?: boolean;
    }
}

function mapStateToProps(state: any) {
    return {
        //valid: state.announcement.isValid,
        announcement: state.announcement
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        postAnnouncement: (announcement: IAnnouncement): Promise<void> => dispatch(postAnnouncement(announcement))
    };
}

//connect
export default connect<AnnouncementProps.IStateProps, AnnouncementProps.IDispatchProps, AnnouncementProps.IOwnProps>(mapStateToProps, mapDispatchToProps)(Announcement);