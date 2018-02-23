import * as React from 'react';
import { ListProps } from '../containers/AnnouncementListContainer';
import { IAnnouncement } from '../../../models/Announcement';

class AnnouncementList extends React.Component<ListProps.IProps, ListProps.IState> {
    constructor(props: ListProps.IProps) {
        super(props);

        //this.createList = this.createList.bind(this);
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
        if (nextProps.announcements !== this.props.announcements) {
            this.setState({
                postedAnnouncement: nextProps.announcements
            });
        }
        console.log("WillUpdate");
    }

    componentDidUpdate() {
        console.log("DidUpdate");
    }

    //createList() {
    //    if (this.props.announcements.length === 0) {
    //        return "Empty";
    //    }
    //    console.log(this.props.announcements);
    //    return this.props.announcements.length;
    //}
    
    render() {
        return ( 
            <div>
                <ul>
                   <li>derp</li>
                </ul>
                
            </div>
        );
    }
}


export default AnnouncementList;