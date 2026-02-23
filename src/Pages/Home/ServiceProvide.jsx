import React, { useEffect, useState, useRef } from 'react';

const ServiceProvide = () => {
    const [doctor, setDoctor] = useState(0);
    const [review, setReview] = useState(0);
    const [patient, setPatient] = useState(0);
    const [staff, setStaff] = useState(0); 
    
    const [isVisible, setIsVisible] = useState(false);
    
    const sectionRef = useRef(null);

    const totalDoctors = 199;
    const totalReview = 467;
    const totalPatients = 1900;
    const totalStaff = 300;

    useEffect(() => {
        const checkVisibility = new IntersectionObserver(
            ([check])=>{
                if (check.isIntersecting) {
                    setIsVisible(true);
                }
            }, {threshold: 0.3}
        )

        if(sectionRef.current){
            checkVisibility.observe(sectionRef.current);
        }
        else{
            checkVisibility.disconnect();
        }
    }, []);

    useEffect(() => {
        if (
            !isVisible || 
            (doctor >= totalDoctors && review >= totalReview && patient >= totalPatients && staff >= totalStaff)
        ) {
            return;
        }

        let currentSpeed = 1;
        if (doctor < 5 && review < 5 && patient < 5 && staff < 5) {
            currentSpeed = 200;
        }

        const interval = setInterval(() => {
            setDoctor(prev => ((prev<totalDoctors) ? prev+1 : prev));
            setReview(prev => ((prev<totalReview)? prev+1 : prev));
            setPatient(prev => ((prev<totalPatients) ? prev+1 : prev));
            setStaff(prev => ((prev<totalStaff) ? prev+1 : prev));
        }, currentSpeed);

        return () => clearInterval(interval);
    }, [doctor, review, patient, staff, isVisible]); 

    return (
        <section ref={sectionRef} className='mb-10 mx-24'>
            <h1 className='text-center text-4xl font-extrabold mt-10'>We Provide Best Medical Services</h1>
            <p className='text-center text-gray-700 text-sm mt-3 mb-5'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>

            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col rounded-xl px-12 py-8 gap-3.5 bg-white'>
                    <img className='w-14 h-14 object-cover' src="https://i.ibb.co.com/tMwdXjL3/fi-15536380.png" alt="Doctors icon" />
                    <p className='text-black text-5xl font-extrabold'>{doctor}+</p>
                    <p className='text-gray-400 text-2xl font-bold'>Total Doctors</p>
                </div>

                <div className='flex flex-col gap-3.5 rounded-xl px-12 py-8 bg-white'>
                    <img className='w-14 h-14 object-cover' src="https://i.ibb.co.com/Kx6jyvp4/fi-7804340.png" alt="Reviews icon" />
                    <p className='text-black text-5xl font-extrabold'>{review}+</p>
                    <p className='text-gray-400 text-2xl font-bold'>Total Reviews</p>
                </div>

                <div className='flex flex-col gap-3.5 rounded-xl px-12 py-8 bg-white'>
                    <img className='w-14 h-14 object-cover' src="https://i.ibb.co.com/NdsW8M3s/fi-2854545.png" alt="Patients icon" />
                    <p className='text-black text-5xl font-extrabold'>{patient}+</p>
                    <p className='text-gray-400 text-2xl font-bold'>Patients</p>
                </div>

                <div className='flex flex-col gap-3.5 rounded-xl px-12 py-8 bg-white'>
                    <img className='w-14 h-14 object-cover' src="https://i.ibb.co.com/2m12yMQ/fi-3160069.png" alt="Staff icon" />
                    <p className='text-black text-5xl font-extrabold'>{staff}+</p>
                    <p className='text-gray-400 text-2xl font-bold'>Total Staff</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceProvide;