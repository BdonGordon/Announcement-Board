import * as React from 'react';
import { AnnouncementProps } from '../containers/AnnouncementContainer';
import { IAnnouncement } from '../../../models/Announcement';

const initialAnnouncement: IAnnouncement = {
    message: ''
};

const initialState: AnnouncementProps.IState = {
    announcement: initialAnnouncement
};

class Announcement extends React.Component<AnnouncementProps.IProps, AnnouncementProps.IState> {
    constructor(props: AnnouncementProps.IProps) {
        super(props);

        this.state = initialState;
        this.state.announcement.message = '';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        return null;
    }

    handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        console.log(this.props.postAnnouncement(this.props.announcement));
    }

    render() {
        return (
            <div>
                <h5> Announcements </h5>
                <input type="text" className="textarea-dimens" onChange={this.handleChange} />
                <br />
                <button className="submit-button" onClick={this.handleSubmit} > Submit</button>

                <br /><br />

                <div className="announcement-strip">
                    <label>Announcement one</label>
                </div>
            </div>
        ); 
    }
}

export default Announcement;