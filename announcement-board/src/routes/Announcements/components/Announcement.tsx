import * as React from 'react';
import { AnnouncementProps } from '../containers/AnnouncementContainer';
import { IAnnouncement } from '../../../models/Announcement';

/*
const initialState: AnnouncementProps.IState = {
    message: '',
    cycles: 0,
    duration: 0,
    color: 0,
    caps: false
};*/

const initialAnnouncement: IAnnouncement = {
    message: '',
    cycles: 0,
    duration: 0,
    color: 0,
    caps: false
};

const initialState: AnnouncementProps.IState = {
    announcement: initialAnnouncement
};

class Announcement extends React.Component<AnnouncementProps.IProps, AnnouncementProps.IState> {
    constructor(props: AnnouncementProps.IProps) {
        super(props);

        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        let updateAnnouncement: IAnnouncement = this.state.announcement;
        updateAnnouncement.message = e.currentTarget.value;
        this.setState({
            announcement: updateAnnouncement
        });
    }

    handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        this.props.postAnnouncement(this.state.announcement);
        console.log(this.state.announcement.message);
    }

    render() {
        return (
            <div>
                <h5> Announcements </h5>
                <input type="text" className="textarea-dimens" onChange={this.handleChange} />
                <br />
                <button className="submit-button" onClick={this.handleSubmit} > Submit</button>
                <label />
            </div>
        ); 
    }
}

export default Announcement;