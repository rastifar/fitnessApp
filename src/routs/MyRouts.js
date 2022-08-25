import React from 'react';
import {Routes,Route } from 'react-router-dom';
import ExersiceDetail from '../pages/exerciseDetail/ExersiceDetail';
import Home from '../pages/home/Home';

const MyRouts = () => {
    return (
        
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='exersice/:id' element={<ExersiceDetail/>}/>                
            </Routes>
      
    );
};

export default MyRouts;