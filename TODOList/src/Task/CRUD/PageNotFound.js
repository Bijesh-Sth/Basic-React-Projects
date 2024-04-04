import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {
    let location = useLocation();
    return (
        <div style={styles.notFound}>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
        <Link to="/">Go Home</Link>
        </div>
    );
    };

const styles = {
    notFound: {
        fontSize: '18px',
        color: 'red',
        margin: '20px',
    },
};

export default PageNotFound;