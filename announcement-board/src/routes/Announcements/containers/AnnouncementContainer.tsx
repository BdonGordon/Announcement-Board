import * as React from 'react';
import Announcement from '../components/Announcement';
import { postAnnouncement } from '../../../modules/announcement';
import { connect } from 'react-redux';
import { IAnnouncement } from '../../../models/Announcement';

export namespace AnnouncementProps {
    //in this case, we will just want to define IAnnouncement variable
    export interface IStateProps {
        announcement: IAnnouncement;
    }

    export interface IDispatchProps {
        //A Promise since I'm "setting something in state"
        postAnnouncement: (announcement: IAnnouncement) => Promise<void>;
    }

    export interface IOwnProps { } 
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { }

    //in this case, we will just want to define IAnnouncement variable in order to access properties of IAnnouncement
    export interface IState {
        announcement: IAnnouncement;
    }
}

/**
 * Just want to return the announcement object
 * @param state
 */
function mapStateToProps(state: any) {
    return {
        announcement: state.announcement
    };
}

/**
 * Same signature as per modules/announcement. Nothing crazy
 * @param dispatch
 */
function mapDispatchToProps(dispatch: any) {
    return {
        postAnnouncement: (announcement: IAnnouncement): Promise<void> => dispatch(postAnnouncement(announcement))
    };
}

//connect
export default connect<AnnouncementProps.IStateProps, AnnouncementProps.IDispatchProps, AnnouncementProps.IOwnProps>(mapStateToProps, mapDispatchToProps)(Announcement);