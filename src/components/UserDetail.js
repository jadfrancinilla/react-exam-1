import React from 'react';

const UserDetail = (props) => {
    return (
        <div>
            <img className="right floated mini ui image" src={props.avatar} alt="avatar"/>
            <div className="header">
                {props.email}
            </div>
            <div className="meta">
                {props.jobTitle}
            </div>
        </div>
    );
};

export default UserDetail;