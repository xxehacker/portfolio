import React from 'react';
import '../styles/github.scss';
import useGithubInfo from '../hooks/useGithubInfo';

function Github() {
    const { data, error } = useGithubInfo();

    return (
        <div className='github'>
            <h1>Github</h1>
            <div>
                {error ? (
                    <div>
                        <h1 style={{ color: 'white', margin: 'auto' }}>Error</h1>
                    </div>
                ) : data ? (
                    <div className='gitInfo'>
                        <p>{data.followers}</p>
                        <img src={data.avatar_url} alt="image"/>
                    </div>
                ) : (
                    <div>
                        <h1 style={{ color: 'white', margin: 'auto' }}>Loading...</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Github;
