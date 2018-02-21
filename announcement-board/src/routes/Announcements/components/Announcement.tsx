import * as React from 'react';
import { AnnouncementProps } from '../containers/AnnouncementContainer';
import { IAnnouncement } from '../../../models/Announcement';

const initialState: AnnouncementProps.IState = {
    message: '',
    cycles: 0,
    duration: 0,
    color: 0,
    caps: false
};

class Announcement extends React.Component<AnnouncementProps.IProps, AnnouncementProps.IState> {
    constructor(props: AnnouncementProps.IProps) {
        super(props);

        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            message: e.currentTarget.value,
            cycles: 1, 
            duration: 1,
            color: 1,  /**set values for testing**/
            caps: true
        });
    }

    handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        this.props.postAnnouncement(this.state);
        console.log(this.props.announcement.message);
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