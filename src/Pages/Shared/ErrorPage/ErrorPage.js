import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../Assets/error.jpg"
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img src={img} alt="" />
            <p className='text-3xl position'>Back to <Link to="/" className='text-primary underline' >Home</Link>  Page</p>
        </div>
    );
};

export default ErrorPage;