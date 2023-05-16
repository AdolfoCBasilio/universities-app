import React from 'react';

const UniversityItem = ({ university, onClick, isSelected }) => {
    if (!university) {
        return null;
    }

    const handleClick = () => {
        onClick(university);
    };

    const itemStyles = {
        border: '4px solid #333A45',
        background: isSelected ? '#0D6D8C' : '#149ECA',
        width: '150px',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        overflow: 'hidden'
    };

    const listItemStyles = {
        fontSize: '20px',
        padding: '5px',
        cursor: 'pointer',
        color: 'white'
    };

    return (
        <div onClick={handleClick} style={itemStyles}>
            <li style={listItemStyles}>
                {university.name}
            </li>
        </div>
    );
};

export default UniversityItem;
