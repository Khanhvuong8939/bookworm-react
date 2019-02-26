import React from 'react'
//import PropTypes from 'prop-types'

const ServerMessage = ({ errStyle, header, content }) => (
    <div>
        < div className={`alert alert-${errStyle}`} >
            <strong>{header}</strong>
            <br />
            <span className="help-block">{content}</span>
        </div >
    </div>
)


export default ServerMessage;