import React from 'react';
import { useGetPhotosQuery } from '../features/apiThunk/RTKUserApi.jsx';

const Photos = () => {
    const { data: users, error, isLoading } = useGetPhotosQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users!</p>;

    return (
        <ul>
            {users.map(user => <>
                <li key={user.albumId}>{user.title}</li>
                <p>url: {user.url}</p>

            </>)}
        </ul>
    );
};

export default Photos;