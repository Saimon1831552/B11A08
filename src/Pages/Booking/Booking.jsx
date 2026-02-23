import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Booking = () => {
    const [myDoctors, setMyDoctors] = useState([]);

    useEffect(() => {
        const savedBookings = JSON.parse(localStorage.getItem('doctorBookings')) || [];
        setMyDoctors(savedBookings);
    }, []);

    const handleCancelBooking = (id) => {
        const updatedBookings = myDoctors.filter(doc => doc.id !== id);
        setMyDoctors(updatedBookings);
        localStorage.setItem('doctorBookings', JSON.stringify(updatedBookings));
        toast.info("Booking cancelled successfully.",{
            position: "top-right",
            autoClose: 2000,
        });
    }

    return (
        <section className="mx-24 mt-10 p-6 bg-white rounded-2xl shadow-sm mb-10">
            <h2 className="text-2xl font-bold mb-4">My Booking List</h2>
            
            {myDoctors.length === 0 ? (
                <p className="text-gray-500">You haven't selected any doctors yet.</p>
            ) : (
                <section className="flex flex-col gap-4 ">
                    {myDoctors.map((doc, index) => (
                        <div key={index} className="border border-gray-200 p-4 rounded-xl flex justify-between items-center bg-gray-50">
                            <div className="flex gap-4 items-center">
                                <img src={doc.img} alt={doc.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-bold text-lg">{doc.name}</p>
                                    <p className="text-sm text-gray-500">{doc.specialities}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-blue-600">Tk {doc.fee}</p>
                            </div>

                            <button onClick={()=>handleCancelBooking(doc.id)} className="mt-4 text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
                               Cancel Booking
                           </button>
                        </div>
                        
                    ))}
                    
                </section>
            )}
            <ToastContainer position="top-right" autoClose={2000} />
        </section>
    );
};

export default Booking;