import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condtions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem sunt minima officiis iure ratione eos praesentium explicabo culpa accusamus!</p>
            <p>Go Back To <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;