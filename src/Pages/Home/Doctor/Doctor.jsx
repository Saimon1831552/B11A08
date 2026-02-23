import React from 'react';
import { NavLink } from 'react-router';

const Doctor = ({doctor}) => {

    const {name,experience_years,education,registration_number,id,img}= doctor

    return (
        <div className="p-4">
            <div className='w-full max-w-sm bg-white rounded-2xl flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden'>
                
                <div className='w-full h-64 overflow-hidden bg-gray-100'>
                    <img 
                        src={img} 
                        alt="Dr. Cameron Williamson" 
                        className="w-full h-auto object-cover"
                    />
                </div>

               
                <div className="p-6 flex flex-col gap-3">
                    
                    <div className="flex justify-start gap-2.5 items-center">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                            <p className="text-sm font-semibold text-green-600">Available</p>
                        </div>
                        <p className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                            {experience_years}+ Years Experience
                        </p>
                    </div>

                    <div>
                        <h3 className='text-xl font-bold text-gray-900'>{name}</h3>
                        <p className='text-sm font-medium text-[#176AE5] mt-1'>{education}</p>
                    </div>

                    <div className="border-t border-dashed border-gray-200 pt-3 mt-1">
                        <p className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>
                            Reg No: <span className="text-gray-600">{registration_number}</span>
                        </p>
                    </div>

                    <NavLink to={`/doctor/${id}`}
                      className="w-full mt-4 inline-flex items-center justify-center 
                                 border-2 border-[#176AE5] 
                                 text-[#176AE5] 
                                 hover:bg-[#176AE5] hover:text-white 
                                 active:scale-95
                                 transition-all duration-300 
                                 py-2.5 rounded-xl 
                                 font-semibold text-sm">
                      View Details
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Doctor;