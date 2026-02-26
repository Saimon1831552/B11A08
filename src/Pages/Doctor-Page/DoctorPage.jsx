import React from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DoctorPage = () => {
    const doctor = useLoaderData();
    const navigate = useNavigate();
    

const handleBookingClick = () => {
        const rawData = localStorage.getItem('doctorBookings');
        const savedBookings = Array.isArray(JSON.parse(rawData)) ? JSON.parse(rawData) : [];

        const isAlreadyBooked = savedBookings.some(item => item.id === doctor.id);

        if (!isAlreadyBooked) {
            const updatedBookings = [...savedBookings, doctor];
            
            localStorage.setItem('doctorBookings', JSON.stringify(updatedBookings));

            toast.success(`Appointment Sheduled with Dr. ${doctor.name} successfully!`, {
                position: "top-right",
                autoClose: 2000,
            });

            setTimeout(() => {
                navigate('/booking');
            }, 2500);
        } else {
            toast.error("Appointment with this doctor is already in your booking list.", {
                position: "top-right",
                autoClose: 2000,
                
            });
        }
       
    };

    if (!doctor) return <div className="text-center mt-10">Loading doctor details...</div>;

    return (
        <section className='mx-24 mt-3 mb-3'>
            <div className='flex flex-col justify-center items-center py-4 bg-white rounded-2xl'>
                <h2 className='text-3xl font-extrabold mb-2.5'>Doctor’s Profile Details</h2>
                <p className='text-center text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.
                </p>
            </div>

            <div className='flex flex-row bg-white rounded-2xl mt-6 px-8 py-10 gap-6'>
                {/* Image Container: Flex + h-full forces the image to exactly match the text column's height */}
                <div className='w-1/3 shrink-0 flex'>
                    <img src={doctor.img} alt="Doctor" className="w-full h-full object-cover rounded-2xl" />
                </div>

                {/* Details Container: Changed to justify-center for vertical alignment */}
                <div className='flex flex-col justify-center items-start w-full'>
                    <h3 className='text-xl font-bold'>{doctor.name}</h3>
                    <p className='text-gray-400 font-medium text-sm mt-2.5 mb-1'>
                        {doctor?.education?.join(', ')}
                    </p>
                    <p className='text-gray-400 font-medium text-sm'>{doctor.specialities}</p>
                    <p className='text-gray-500 mt-2'>Working at <br /> <span className='text-black font-bold mt-2'>{doctor.workplace}</span></p>
                    
                    <div className='border-y border-dashed border-gray-400 w-full my-2.5'>
                      <p className='text-sm text-gray-500 font-medium my-2.5'>Reg No : {doctor.registration_number}</p>
                    </div>
                    
                    <p className='font-semibold mb-2'>Availability : {
                        doctor?.availability?.map((d, index) => (
                            <span key={index} className='text-[#FFA000] text-xs font-semibold px-2 py-1 rounded-full bg-amber-100 mr-2 inline-block mb-1'>
                                {d}
                            </span>
                        ))
                    }</p>
                    <p className='font-semibold'>Consultation Fee : <span className='font-semibold text-blue-700'>Taka : {doctor.fee} <span className='text-xs text-gray-400'>(incl. Vat)</span> <span className='text-blue-400 font-thin'>Per consultation</span></span></p>
                </div>
            </div>

            <div className='py-4 bg-white rounded-2xl my-6 flex flex-col justify-center items-center hover:bg-gray-50 cursor-pointer transition-colors shadow-sm'>
                <h3 className='text-xl text-center font-extrabold text-black-600'>Book an Appointment</h3>
                <div className='flex flex-row justify-between border-y border-dashed border-gray-300 w-full mt-4 px-6 py-3 rounded-lg'>
                    <p>Availability</p>
                    <p className='text-green-600 bg-green-100 rounded-full px-3 py-2 text-xs'>Doctor Available Today</p>
                </div>
                <p className='text-sm text-start bg-amber-50 rounded-full px-3 py-2 text-amber-500 mt-2.5'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

                <button 
                    onClick={handleBookingClick} 
                    className="mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
                >
                    Book Now
                </button>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
        </section>
    );
};

export default DoctorPage;