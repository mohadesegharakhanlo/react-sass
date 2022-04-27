import React from 'react'
import PropTypes from 'prop-types'

const Hemlet = props => {
    document.title = 'yolo_' + props.title
    return (        
        <div>
            {props.children}
        </div>
    )
}

Hemlet.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Hemlet
