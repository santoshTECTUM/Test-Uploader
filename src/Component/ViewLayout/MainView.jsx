import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Router } from '../../route';

const MainView = () => {
    console.log("------------vvvvv--------------");
    return (
        <Routes>
            {Router.map((item, key) => {
                return (<Route path={item.layout + item.path} element={<item.component />} />)
            })}
            <Route path="*" element={<>not found</>} />
        </Routes>
    );
}

export default MainView;
