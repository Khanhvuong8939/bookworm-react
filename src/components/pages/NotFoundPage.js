import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                
                <div className="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>404 NOT FOUND</strong> 404 NOT FOUND.
                </div>
                
            </div>
        );
    }
}

export default NotFoundPage;