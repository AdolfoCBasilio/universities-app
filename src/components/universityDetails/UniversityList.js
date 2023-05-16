import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UniversityItem from './UniversityItem';
import UniversityDetails from '../universityList/UniversityDetails';

const UniversityList = () => {
    const [universities, setUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://universities.hipolabs.com/search?country=United+States',
                    {
                        params: {
                            limit: 10,
                            offset: offset,
                        },
                    }
                );
                setUniversities(response.data);
            } catch (error) {
                console.error('Error fetching universities:', error);
            }
        };

        fetchData();
    }, [offset]);

    const handleUniversityClick = (university) => {
        setSelectedUniversity((prevSelectedUniversity) =>
            prevSelectedUniversity === university ? null : university
        );
    };

    const handleNextResults = () => {
        setOffset((prevOffset) => prevOffset + 10);
    };

    const handlePreviousResults = () => {
        if (offset >= 10) {
            setOffset((prevOffset) => prevOffset - 10);
        }
    };

    const getClicsToFirst = Math.ceil(offset / 10);

    return (
        <div>
            <h2 style={{ fontSize: '25px', margin: '10px 0px',color:'white' }}>List of Universities</h2>

            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    padding: '0',
                    margin: '0',
                    listStyle: 'none',
                    gap: '30px',
                }}
            >
                {universities.map((university) => (
                    <UniversityItem
                        key={university.name}
                        university={university}
                        onClick={handleUniversityClick}
                        isSelected={selectedUniversity === university}
                    />
                ))}
            </ul>

            <div style={{ height: '200px',display:'flex',justifyContent:'center' }}>
                {selectedUniversity && (
                    <UniversityDetails university={selectedUniversity} />
                )}
            </div>
            <div>
                <button
                    style={{ fontSize: '18px', padding: '10px 20px', marginRight: '10px' }}
                    onClick={handlePreviousResults}
                    disabled={offset < 10}
                >
                    Previous 10 ({getClicsToFirst} clicks to first)
                </button>
                <button
                    style={{ fontSize: '18px', padding: '10px 20px' }}
                    onClick={handleNextResults}
                >
                    Next 10
                </button>
            </div>
        </div>
    );
};

export default UniversityList;
