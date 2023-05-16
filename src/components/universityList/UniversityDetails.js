import React from 'react';

const UniversityDetails = ({ university }) => {
    return (
        <div
            style={{marginTop:'10px',
                border: '5px solid #333A45',
                width: '80%',
                boxSizing: 'border-box',
                borderRadius:'10px',
                marginBottom:'10px',
                color:'white'
            }}
        >
            <div>
                <h2>University Details</h2>
                <p>Name: {university.name}</p>
                <p>City: {university.country}</p>
                <p>URL: <a href={university.web_pages} target="_blank" rel="noopener noreferrer">{university.web_pages}</a></p>

            </div>
        </div>
    );
};

export default UniversityDetails;

