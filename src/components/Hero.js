import { BrowserRouter } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";

function Hero() {
    return (
        <BrowserRouter>
            <div className='bg-gradient-to-r from-orange-400 to-rose-400 h-screen' id="home">
                <div className='flex justify-center items-center flex-col h-screen'>
                    <p className='font-bold text-5xl text-white'>Hey! I'm <span className='text-white'>Ozan</span> 👋🏻</p>
                    <p className='font-bold text-2xl mt-4 text-white'>I'm a <span className='text-pink-700'>UI Developer</span><span className='text-white'>.</span></p>
                    <div className='flex mt-6'>
                        <Link to="#contact" smooth>
                            <div className='py-2 px-6 mr-2 rounded-3xl text-white bg-transparent duration-200 hover:bg-pink-800 hover:text-white hover:border-pink-800 border-white border-2'>
                                React Out
                            </div>
                        </Link>
                        <Link to="#portfolio" smooth>
                            <div className='py-2 px-6 ml-2 rounded-3xl text-white bg-transparent duration-200 hover:bg-pink-800 hover:text-white hover:border-pink-800 border-2'>My Portfolio</div>
                        </Link>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Hero;