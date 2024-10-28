import React from 'react';

function About() {
    return (
        <div id="about" className='w-full h-auto flex flex-wrap-reverse items-center justify-around mt-10 py-6'>
            <div className='mt-5'>
                <img 
                    className='w-[400px] h-[400px] mt-6 rounded-2xl' 
                    src='https://www.nestleprofessional.in/sites/default/files/2021-08/Espresso_0.jpg' 
                    alt="Espresso"
                />
            </div>
            <div className='bg-red-950 w-[500px] h-[400px] border-2 border-red-900 rounded-xl mt-10'>
                <h1 className='text-center text-3xl text-white mt-4'>About Us</h1>
                <p className='flex-wrap p-4 text-white text-xl'> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eos at atque, explicabo dignissimos alias consequatur quasi ea aut maiores pariatur labore laudantium. Hic natus tenetur sunt eos, obcaecati maiores? 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nulla.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eos at atque, explicabo dignissimos alias consequatur quasi ea aut maiores 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eos at .
                </p>
            </div>
        </div>
    );
}

export default About;
