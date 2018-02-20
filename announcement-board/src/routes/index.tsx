import * as React from 'react';
import Announcement from './Announcements/containers/AnnouncementContainer';

class RouterIndex extends React.Component {
    render() {
        return (
            <div>
                <Announcement />
            </div>
        );
    }
}

export default RouterIndex;