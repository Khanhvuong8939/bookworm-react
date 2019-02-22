import React, { Component } from 'react'
//import PropTypes from 'prop-types'

// class ServerMessage extends Component {

//     render() {
//         var { message } = this.props;
//         return (
//             <div>
//                 < div className={`alert alert-${message.class}`} >
//                     <strong>{message.header}: </strong>
//                     <br />
//                     <span className="help-block">{message.content}</span>
//                 </div >
//             </div>
//         )
//     }
// }

const ServerMessage = ({ errStyle, header, content }) => (
    <div>
        < div className={`alert alert-${errStyle}`} >
            <strong>{header}</strong>
            <br />
            <span className="help-block">{content}</span>
        </div >
    </div>
)

// ServerMessage.propTypes = {
//     message: PropTypes.shape({
//         class: PropTypes.string.isRequired,
//         header: PropTypes.string.isRequired,
//         content: PropTypes.string.isRequired
//     })
// }


export default ServerMessage;