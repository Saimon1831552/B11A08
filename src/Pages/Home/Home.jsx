import React, { useState } from 'react';
import Hero from './Hero/Hero';
import DoctorList from './DoctorList/DoctorList';
import { useLoaderData } from 'react-router';
import ServiceProvide from './ServiceProvide';

const Home = () => {
    const allDoctors = useLoaderData(); 

    const [searchTerm, setSearchTerm] = useState('');

   
   const filteredDoctors= allDoctors.filter(b=> b.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className=''>
            <Hero setSearchTerm={setSearchTerm} />
            
            <DoctorList doctors={filteredDoctors} />

            <ServiceProvide></ServiceProvide>
        </div>
    );
};

export default Home;