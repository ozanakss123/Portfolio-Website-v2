import { GrCode } from 'react-icons/gr';
import { MdOutlineDesignServices } from 'react-icons/md';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

function About() {
    return (
        <div className='p-12 md:px-32 lg:px-42 xl:px-72' id='about'>
            <h1 className="text-center text-pink-700 text-4xl font-bold mb-8">About Me</h1>
            <p className="text-center text-gray-700 md:px-12 lg:px-24">I'm a new graduate CS student at Middle East Technical University. I'm working as a Part Time UI Developer at Jotform Inc. I had the chance to learn and use tools like React, SASS, CSS and many more. As I see examples of design and development in this field, I continue to be motivated.</p>
            <div className='max-w-sm mt-8 mx-auto border-t-2 border-gray-300'></div>
            <h1 className="text-center text-pink-700 text-3xl font-bold my-8">Skills</h1>
            <div className='flex justify-center flex-wrap basis-1/3 gap-2 my-8'>
                <div className='flex p-2 items-center flex-col'>
                    <div className='w-12 h-12 flex items-center justify-center bg-gray-300 hover:bg-pink-800 group rounded-2xl'>
                        <DiHtml5 className='text-2xl group-hover:text-white' />
                    </div>
                    <p className='mt-2 text-sm'>HTML</p>
                </div>
                <div className='flex p-2 items-center flex-col'>
                    <div className='w-12 h-12 flex items-center justify-center bg-gray-300 hover:bg-pink-800 group rounded-2xl'>
                        <DiCss3 className='text-2xl group-hover:text-white' />
                    </div>
                    <p className='mt-2 text-sm'>CSS</p>
                </div>
                <div className='flex p-2 items-center flex-col'>
                    <div className='w-12 h-12 flex items-center justify-center bg-gray-300 hover:bg-pink-800 group rounded-2xl'>
                        <SiJavascript className='text-2xl group-hover:text-white' />
                    </div>
                    <p className='mt-2 text-sm'>Javascript</p>
                </div>
                <div className='flex p-2 items-center flex-col'>
                    <div className='w-12 h-12 flex items-center justify-center bg-gray-300 hover:bg-pink-800 group rounded-2xl'>
                        <FaReact className='text-2xl group-hover:text-white' />
                    </div>
                    <p className='mt-2 text-sm'>React</p>
                </div>
                <div className='flex p-2 items-center flex-col'>
                    <div className='w-12 h-12 flex items-center justify-center bg-gray-300 hover:bg-pink-800 group rounded-2xl'>
                        <DiSass className='text-2xl group-hover:text-white' />
                    </div>
                    <p className='mt-2 text-sm'>SASS</p>
                </div>
                <div className='flex p-2 items-center flex-col'>
                    <div className='w-12 h-12 flex items-center justify-center bg-gray-300 hover:bg-pink-800 group rounded-2xl'>
                        <SiTailwindcss className='text-2xl group-hover:text-white' />
                    </div>
                    <p className='mt-2 text-sm'>Tailwind</p>
                </div>
            </div>
            <div className='max-w-sm mx-auto border-t-2 border-gray-300'></div>
        </div>
    );
}

export default About;