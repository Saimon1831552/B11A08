import React, { useEffect, useState, useRef } from 'react';

const ServiceProvide = () => {
    const [counts, setCounts] = useState({
        doctor: 0,
        review: 0,
        patient: 0,
        staff: 0
    });
    
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const targets = {
        doctor: 199,
        review: 467,
        patient: 1900,
        staff: 300
    };

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            }, { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    
    useEffect(() => {
        if (!isVisible) return;

        const duration = 6000; 
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCounts({
                doctor: Math.floor(easeProgress * targets.doctor),
                review: Math.floor(easeProgress * targets.review),
                patient: Math.floor(easeProgress * targets.patient),
                staff: Math.floor(easeProgress * targets.staff),
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible]);

    const stats = [
        { label: 'Total Doctors', value: counts.doctor, icon: "https://i.ibb.co.com/tMwdXjL3/fi-15536380.png" },
        { label: 'Total Reviews', value: counts.review, icon: "https://i.ibb.co.com/Kx6jyvp4/fi-7804340.png" },
        { label: 'Patients', value: counts.patient, icon: "https://i.ibb.co.com/NdsW8M3s/fi-2854545.png" },
        { label: 'Total Staff', value: counts.staff, icon: "https://i.ibb.co.com/2m12yMQ/fi-3160069.png" },
    ];

    return (
        <section ref={sectionRef} className='mb-10 px-4 md:mx-24'>
            <h1 className='text-center text-4xl font-extrabold mt-10'>We Provide Best Medical Services</h1>
            <p className='text-center text-gray-700 text-sm mt-3 mb-10'>
                Our platform connects you with verified, experienced doctors across various specialties.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {stats.map((stat, index) => (
                    <div key={index} className='flex flex-col items-center lg:items-start rounded-xl px-12 py-8 gap-3.5 bg-white shadow-sm'>
                        <img className='w-14 h-14 object-cover' src={stat.icon} alt={stat.label} />
                        <p className='text-black text-5xl font-extrabold'>{stat.value}+</p>
                        <p className='text-gray-400 text-2xl font-bold'>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceProvide;