import * as React from 'react';
import { AnnouncementProps } from '../containers/AnnouncementContainer';
import { IAnnouncement } from '../../../models/Announcement';

/**
 * This is needed as the initial state for the IState's property that is of IAnnouncement
 */
const initialAnnouncement: IAnnouncement = {
    message: '',
    cycles: 0,
    duration: 0,
    color: 0,
    caps: false
};

const initialState: AnnouncementProps.IState = {
    announcement: initialAnnouncement,
    isValid: false
};

class Announcement extends React.Component<AnnouncementProps.IProps, AnnouncementProps.IState> {
    constructor(props: AnnouncementProps.IProps) {
        super(props);

        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * This is where the magic happens. DO NOT forget that we can use "let" keyword to define a variable
     * @param e
     */
    handleChange(e: React.FormEvent<HTMLInputElement>) {
        //major key. Since we cannot and SHOULD NOT update the state directly, let's create a variable that is assigned to it
        let updatedAnnouncement: IAnnouncement = this.state.announcement;
        updatedAnnouncement.message = e.currentTarget.value; // this is where we get the inputted value from the InputElement
        //the other properties of the announcement can be modified like this too

        //Now we can setState legally by doing so:
        this.setState({
            announcement: updatedAnnouncement, 
            isValid: false
        });
    }

    handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        this.props.postAnnouncement(this.state.announcement); //Boom, we done here
        console.log(this.state.announcement.cycles);
        this.setState({
            isValid: true
        });
    }

    render() {
        return (
            <div>
                <h5> Announcements </h5>
                <input type="text" className="textarea-dimens" onChange={this.handleChange} />
                <br />
                <button className="submit-button" onClick={this.handleSubmit}>Submit</button>

                <div className="announcement-strip">
                    <UpdateLabel submitted={this.state.isValid} announcement={this.state.announcement.message} />
                </div>
                
            </div>
        ); 
    }
}
//announcement="hello"

/**
 * Might need a componentWillMount() kinda deal?
 * @param props
 */
function UpdateLabel(props: any) {
    if (props.submitted) {
        return <label> {props.announcement} </label>;
    }
    return <label>False</label>;
}

export default Announcement;