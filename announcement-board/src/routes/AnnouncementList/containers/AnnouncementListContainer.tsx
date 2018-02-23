import * as React from 'react';
import AnnouncementList from '../components/AnnouncementList';
import { IAnnouncement } from '../../../models/Announcement';
import { connect } from 'react-redux';

export namespace ListProps {
    export interface IStateProps {
        announcements: IAnnouncement[];
    }

    export interface IDispatchProps {
    }

    export interface IOwnProps { }
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { }

    export interface IState {
        announcements: IAnnouncement[];
    }
}

function mapStateToProps(state: any) {
    return {
        announcements: state.announcement.announcements
    };
}

function mapDispatchToProps(dispatch: any) {
    return {}; //squiggles is an object
}


export default connect<ListProps.IStateProps, ListProps.IDispatchProps, ListProps.IOwnProps>(mapStateToProps, mapDispatchToProps)(AnnouncementList);