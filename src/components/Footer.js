import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
    return (
        <div>
            <div className="text-center py-12 justify-center bg-gray-600 h-54">
                <h3 className="text-white font-bold text-xl mb-2">Contact Information</h3>
                <ul className="text-gray-400 text-lg">
                    <li>Ankara / Turkey</li>
                    <li>ozanaksoy123@gmail.com</li>
                    <li>+90 (539) 381 1709</li>
                </ul>
            </div>
            <div className='flex items-center justify-center lg:justify-between lg:px-24 bg-zinc-900 h-24'>
                <p className='hidden lg:inline-block text-sm text-white'>©2023 Copyright All Rights Reserved - Ozan Aksoy Portfolio V2</p>
                <div className="flex items-center justify-center gap-4">
                    <a href="https://www.linkedin.com/in/ozanaksoyy/" className='flex justify-center items-center h-14 w-14 rounded-2xl bg-gray-600 transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300'>
                        <BsLinkedin className='text-2xl text-white' />
                    </a>
                    <a href='https://github.com/ozanakss123' className="flex justify-center items-center h-14 w-14 rounded-2xl bg-gray-600 transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">
                        <BsGithub className='text-2xl text-white' />
                    </a>
                    <a href='https://www.instagram.com/ozanaks/' className="flex justify-center items-center h-14 w-14 rounded-2xl bg-gray-600 transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">
                        <BsInstagram className='text-2xl text-white' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;