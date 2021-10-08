import React from 'react';
import Header from './Header/Header';
import useAuth from '../useAuth';

export default function Dashboard( {code} ){
    const accessToken = useAuth(code)
    return(
        <div>
            {code}
            <Header></Header>
        </div>
    )
}