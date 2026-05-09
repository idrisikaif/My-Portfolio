import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Contact() {
    // 1. Initialize useForm with simple keys
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // 2. Form submission handler with Mapping
    const onSubmit = async (data) => {
        // Forminit ki requirement ke mutabiq keys map kar rahe hain
        const formData = new FormData();
        formData.append("fi-sender-fullName", data.name);
        formData.append("fi-sender-email", data.email);
        formData.append("fi-text-message", data.message);

        try {
            await axios.post("https://forminit.com/f/yng3no0czie", formData, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            toast.success("Message sent successfully!");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mb-16'>
            <div className='text-3xl font-bold mb-4'>Contact me</div>
            <span>Please fill out the form below to contact me</span>
            
            <div className='flex flex-col items-center justify-center mt-5'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-slate-200 w-96 px-8 py-6 rounded-xl'
                >
                    <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                    
                    {/* Full Name Field */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>FullName:</label>
                        <input 
                            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none' 
                            type="text" 
                            placeholder='Enter your fullname'
                            {...register("name", { required: "Full name is required" })}
                        />
                        {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Email:</label>
                        <input 
                            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none' 
                            type="email" 
                            placeholder='Enter your email'
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format"
                                }
                            })}
                        />
                        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                    </div>

                    {/* Message Field */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Message:</label>
                        <textarea 
                            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none' 
                            placeholder='Enter your message' 
                            rows="4"
                            {...register("message", { required: "Message cannot be empty" })}
                        ></textarea>
                        {errors.message && <span className='text-red-500 text-sm'>{errors.message.message}</span>}
                    </div>

                    <button 
                        type='submit' 
                        className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 w-full'
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;