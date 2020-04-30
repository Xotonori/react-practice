import React from 'react'
import classes from './Message.module.scss'

const Message = props => {

    return (
        <div className={classes.wrapMessage}>
            <div className={classes.avatar}
                 style={{backgroundImage: `url(${props.avatarURL})`}}>
            </div>
            <div className={classes.message}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.textMessage}>
                    {props.message}
                </div>
                <div className={classes.time}>
                    {new Date().toLocaleTimeString().split('').splice(0, 5).join('')}
                </div>
            </div>
        </div>

    );
};

export default Message;