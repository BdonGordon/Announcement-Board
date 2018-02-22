import * as React from 'react';
import { ListProps } from '../containers/AnnouncementListContainer';
import { IAnnouncement } from '../../../models/Announcement';

const initialAnnouncement: IAnnouncement = {
    message: '',
    cycles: 0,
    duration: 0,
    color: 0,
    caps: false
};

const initialState: ListProps.IState = {
    announcement: initialAnnouncement
};

class AnnouncementList extends React.Component<ListProps.IProps, ListProps.IState> {
    constructor(props: ListProps.IProps) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <ul>
                    <li>Announcement One</li>
                    <li>{this.props.announcement.message}</li>
                </ul>
            </div>
        );
    }
}


export default AnnouncementList;