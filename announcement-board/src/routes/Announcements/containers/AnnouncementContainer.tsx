import * as React from 'react';
import Announcement from '../components/Announcement';
import { postAnnouncement } from '../../../modules/announcement';
import { connect } from 'react-redux';
import { IAnnouncement } from '../../../models/Announcement';

export namespace AnnouncementProps {
    //IStateProps is state values from the store
    export interface IStateProps {
        valid: boolean;
    }

    export interface IDispatchProps {
        postAnnouncement: (message: string) => string;
    }

    export interface IOwnProps { } 
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { }

    //IState is the component state
    export interface IState {
        message: string;
    }
}

function mapStateToProps(state: any) {
    return {
        valid: state.announcement.isValid
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        postAnnouncement: (message: string): string => dispatch(postAnnouncement(message))
    };
}

//connect
export default connect<AnnouncementProps.IStateProps, AnnouncementProps.IDispatchProps, AnnouncementProps.IOwnProps>(mapStateToProps, mapDispatchToProps)(Announcement);