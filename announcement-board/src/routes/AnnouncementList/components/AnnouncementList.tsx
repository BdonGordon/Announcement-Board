import * as React from 'react';
import { ListProps } from '../containers/AnnouncementListContainer';
import { IAnnouncement } from '../../../models/Announcement';

const initialList: ListProps.IState = {
    announcements: []
};

class AnnouncementList extends React.Component<ListProps.IProps, ListProps.IState> {
    constructor(props: ListProps.IProps) {
        super(props);
        this.state = initialList;

        this.createList = this.createList.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillMount() {
        console.log("WillMount");
    }
    componentWillReceiveProps() {
        console.log("WillReceiveProps");

    }
    componentWillUpdate(nextProps: ListProps.IProps) {
        console.log("WillUpdate");
        console.log(this.props);

        if (nextProps.announcements !== this.props.announcements) {
            this.setState({ announcements: nextProps.announcements });
        }
    }

    componentDidUpdate() {
        console.log("DidUpdate");
    }

    createList() {
        if (this.state.announcements.length === 0) {
            return null;
        }

        return this.props.announcements.map((announcement, index) => {
            return (
                <li key={index}> {announcement.message} </li>
            );
        });
    }
    
    render() {
        return ( 
            <div>
                <ul>
                    <span>{this.createList()}</span>
                </ul>
                
            </div>
        );
    }
}


export default AnnouncementList;