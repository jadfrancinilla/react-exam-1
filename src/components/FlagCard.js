import React from 'react';

const FlagCard = (props) => {
    return (
        <div className="card">
             <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <img className="left floated mini ui image" src={`https://www.countryflags.io/${props.countryCode}/flat/64.png`} alt="avatar"/>
                {props.content}
            </div>
        </div>
    );
}

export default FlagCard;