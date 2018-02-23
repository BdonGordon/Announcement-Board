import * as React from 'react';
import { AnnouncementProps } from '../containers/AnnouncementContainer';
import { IAnnouncement } from '../../../models/Announcement';
import '../../../ListStyling.css';
import AnnouncementList from '../../AnnouncementList/containers/AnnouncementListContainer';

/**
 * This is needed as the initial state for the IState's property that is of IAnnouncement
 */
const initialAnnouncement: IAnnouncement = {
    timeStamp: new Date().toLocaleTimeString(),
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

    /**This portion right here shows a little bit about the life cycle of components. Nothing complex, but
    * whenever an action is done on the app, one - or several - of the messages will log to show what's happening
    **/
    //componentDidMount() {
    //    console.log("componentDidMount");
    //}
    //componentWillMount() {
    //    console.log("WillMount");
    //}
    //componentWillReceiveProps() {
    //    console.log("WillReceiveProps");
        
    //}
    //componentWillUpdate() {
    //    console.log("WillUpdate");
    //}
    //componentDidUpdate() {
    //    console.log("DidUpdate");
    //}
    /**END OF MOUNTING **/


    /**
     * This is where the magic happens. DO NOT forget that we can use "let" keyword to define a variable
     * @param e
     */
    handleChange(e: React.FormEvent<HTMLInputElement>) {
        //major key. Since we cannot and SHOULD NOT update the state directly, let's create a variable that is assigned to it
        let updatedAnnouncement: IAnnouncement = this.state.announcement;
        updatedAnnouncement.message = e.currentTarget.value; // this is where we get the inputted value from the InputElement
        updatedAnnouncement.timeStamp = new Date().toLocaleTimeString();
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
        this.props.postAnnouncement(this.state.announcement);

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
        console.log("render"); //just to show the lifecycle - nothing more
        console.log(this.props); 
        return (
            <div>
                <h5> Announcements </h5>
                <input type="text" className="textarea-dimens" onChange={this.handleChange} disabled={this.state.canEdit} value={this.state.announcement.message} />
                <br />
                <button className="submit-button" onClick={this.handleSubmit} disabled={this.state.isValid} > Post Announcement</button>
                <button className="submit-button" onClick={this.handleEdit}>Enter Announcement</button>

                <div className="announcement-strip">
                    <UpdateLabel submitted={this.state.canEdit} announcement={this.state.announcement.message} />
                </div>

                <div className="announcement-list">
                    <h4 className="h4-list"> Announcement List </h4>
                    <AnnouncementList/>
                </div>
                
            </div>
        ); 
    }
}

//<AnnouncementList><UpdateList submitted={this.state.canEdit} announcement={this.state.announcement} /></AnnouncementList>

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

export default Announcement;