import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Booking from '../Pages/Booking/Booking';
import DoctorPage from '../Pages/Doctor-Page/DoctorPage';


export const Route = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {
                index: true,
                path:"/",
                loader:()=>fetch('../../public/doctor.json'),
                Component: Home
            },
            {
                path:"/booking",
                loader:()=>fetch('../../public/doctor.json'),
                Component: Booking
            },
            {
                path:"/blogs",
                Component: ()=><div className='text-center text-3xl font-bold py-20'>Blogs Page Coming Soon...</div>
            },
            {
                path:"/contact",
                Component: ()=><div className='text-center text-3xl font-bold py-20'>Contact Us Page Coming Soon...</div>
            },
            {
                path: "/doctor/:id",
                loader: async ({ params }) => {
                    const response = await fetch('/doctor.json');
                    const doctors = await response.json();
                    
                    const specificDoctor = doctors.find(doc => doc.id === params.id);
                    return specificDoctor; 
                },
                Component: DoctorPage
            }
        ]
    }
])

