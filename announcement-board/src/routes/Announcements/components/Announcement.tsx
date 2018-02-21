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
    isValid: true,
    canEdit: true //TRUE == input DISABLED             ||     FALSE == input ENABLED
};

class Announcement extends React.Component<AnnouncementProps.IProps, AnnouncementProps.IState> {
    constructor(props: AnnouncementProps.IProps) {
        super(props);

        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
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

        if (updatedAnnouncement.message.length < 5) {
            this.setState({
                isValid: true
            });
        }
        else {
            //Now we can setState legally by doing so:
            this.setState({
                announcement: updatedAnnouncement,
                isValid: false
            });
        }
    }

    handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        this.props.postAnnouncement(this.state.announcement); //Boom, we done here
        this.setState({
            isValid: true,
            canEdit: true
        });
        
    }

    /**
     * Enables and disables to input area
     * @param e
     */
    handleEdit(e: React.FormEvent<HTMLButtonElement>) {
        let clearAnnouncement: IAnnouncement = this.state.announcement;
        clearAnnouncement.message = '';
        this.setState({
            announcement: clearAnnouncement,
            canEdit: false
        });
    }

    render() {
        return (
            <div>
                <h5> Announcements </h5>
                <input type="text" className="textarea-dimens" onChange={this.handleChange} disabled={this.state.canEdit} />
                <br />
                <button className="submit-button" onClick={this.handleSubmit} disabled={this.state.isValid} > Post Announcement</button>
                <button className="submit-button" onClick={this.handleEdit}>Enter Announcement</button>

                <div className="announcement-strip">
                    <UpdateLabel submitted={this.state.canEdit} announcement={this.state.announcement.message} />
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
    return null;
}

function UpdateInput(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.value = '';
}

export default Announcement;