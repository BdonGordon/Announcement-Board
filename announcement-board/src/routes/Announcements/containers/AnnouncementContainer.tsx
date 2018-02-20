import * as React from 'react';
import Announcement from '../components/Announcement';
import { postAnnouncement } from '../../../modules/announcement';
import { connect } from 'react-redux';
import { IAnnouncement } from '../../../models/Announcement';

export namespace AnnouncementProps {
    //IStateProps is state values from the store
    export interface IStateProps {
        valid: boolean;
        announcement: IAnnouncement;
    }

    export interface IDispatchProps {
        postAnnouncement: (message: IAnnouncement) => IAnnouncement;
    }

    export interface IOwnProps { } 
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { }

    //IState is the component state
    export interface IState {
        announcement: IAnnouncement;
    }
}

function mapStateToProps(state: any) {
    return {
        valid: state.announcement.isValid,
        announcement: state.announcement.announcement
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        postAnnouncement: (announcement: IAnnouncement): string => dispatch(postAnnouncement(announcement))
    };
}

//connect
export default connect<AnnouncementProps.IStateProps, AnnouncementProps.IDispatchProps, AnnouncementProps.IOwnProps>(mapStateToProps, mapDispatchToProps)(Announcement);