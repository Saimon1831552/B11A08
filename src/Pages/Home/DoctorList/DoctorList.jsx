import React, { useState, useEffect } from 'react'; 
import Doctor from '../Doctor/Doctor';


const DoctorList = ({ doctors }) => { 
    
    const [visible, setVisible] = useState(6);

    useEffect(() => {
        setVisible(6);
    }, [doctors]);

    const handleShowCard = () => {
        setVisible(doctors.length);
    }

    return (
        <section className='py-10'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div>
                    <h1 className='text-center text-4xl font-bold'>Our Best Doctors</h1>
                    <p className='text-center text-sm font-normal mt-2 text-gray-600'>
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                </div>

                {doctors.length === 0 ? (
                    <p className="text-gray-500 text-lg mt-5">No doctors found matching your search.</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            doctors.slice(0, visible).map(doctor => (
                                <Doctor key={doctor.id} doctor={doctor} />
                            ))
                        }
                    </div>
                )}

                {visible < doctors.length && (
                    <button onClick={handleShowCard} className='bg-[#176AE5] px-6.5 py-3.5 text-white rounded-full font-medium hover:bg-white hover:text-black hover:border border-[#176AE5] transition-all'>
                        View All Doctors
                    </button>
                )}
            </div>
        </section>
    );
};

export default DoctorList;