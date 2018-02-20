import * as React from 'react';
import RouterIndex from '../routes/index';

class CoreLayout extends React.Component {
    render() {
        return (
            <div>
                <h4> Annoucement Board </h4>
                <RouterIndex />
            </div>
        );
    }
}

export default CoreLayout;