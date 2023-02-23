import facebook from '../assets/facebook.png'
import medium from '../assets/medium.png'
import google from '../assets/google.png'
import umut from '../assets/umut.png'
import gradient from '../assets/gradient.png'
import tictactoe from '../assets/tictactoe.png'

function Portfolio() {
    return (
        <div className="py-12 md:px-32 lg:px-42 xl:px-72" id='portfolio'>
            <h3 className="text-center text-sm font-normal text-gray-500">My Recent Work</h3>
            <h1 className="text-center text-pink-700 text-4xl font-bold mt-2">Portfolio</h1>
            <div className="flex flex-col flex-grow-0 flex-shrink-0 basis-2/6 justify-evenly flex-wrap gap-8 mt-8 md:flex-row">
                <div className="max-w-xs w-80 mx-auto md:mx-0 lg:basis-1/3 flex flex-col justify-evenly bg-white border border-gray-200 rounded-lg shadow-lg group">
                    <div>
                        <img src={facebook} alt="Facebook Clone" className='h-36 w-64 mx-auto mt-3' />
                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">Facebook UI Clone</h5>
                            <p className='text-sm tracking-tighter font-bold text-pink-900'>HTML | SASS</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly mb-4 group-hover:opacity-100 xl:opacity-0">
                        <a href="https://github.com/ozanakss123/Facebook-UI-Clone" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Source Code</a>
                        <a href="https://ozanakss123.github.io/Facebook-UI-Clone/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Live Preview</a>
                    </div>
                </div>
                <div className="max-w-xs w-80 mx-auto md:mx-0 lg:basis-1/3 flex flex-col justify-evenly bg-white border border-gray-200 rounded-lg shadow-lg group">
                    <div>
                        <img src={medium} alt="Medium Clone" className='h-36 w-64 mx-auto mt-3' />
                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">Medium UI Clone</h5>
                            <p className='text-sm tracking-tighter font-bold text-pink-900'>HTML | CSS | Bootstrap</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly mb-4 group-hover:opacity-100 xl:opacity-0">
                        <a href="https://github.com/ozanakss123/Medium-UI-Clone" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Source Code</a>
                        <a href="https://ozanakss123.github.io/Medium-UI-Clone/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Live Preview</a>
                    </div>
                </div>
                <div className="max-w-xs w-80 mx-auto md:mx-0 lg:basis-1/3 flex flex-col justify-evenly bg-white border border-gray-200 rounded-lg shadow-lg group">
                    <div>
                        <img src={google} alt="Google Clone" className='h-36 w-64 mx-auto mt-3' />
                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">Google UI Clone</h5>
                            <p className='text-sm tracking-tighter font-bold text-pink-900'>HTML | CSS </p>
                        </div>
                    </div>
                    <div className="flex justify-evenly mb-4 group-hover:opacity-100 xl:opacity-0">
                        <a href="https://github.com/ozanakss123/Google-UI-Clone" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Source Code</a>
                        <a href="https://ozanakss123.github.io/Google-UI-Clone/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Live Preview</a>
                    </div>
                </div>
                <div className="max-w-xs w-80 mx-auto md:mx-0 lg:basis-1/3 flex flex-col justify-evenly bg-white border border-gray-200 rounded-lg shadow-lg group">
                    <div>
                        <img src={umut} alt="Umut Hotel Landing Page" className='h-36 w-64 mx-auto mt-3' />
                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">Umut Hotel Landing Page</h5>
                            <p className='text-sm tracking-tighter font-bold text-pink-900'>HTML | CSS | Bootstrap</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly mb-4 group-hover:opacity-100 xl:opacity-0">
                        <a href="https://github.com/ozanakss123/umut-otel" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Source Code</a>
                        <a href="https://ozanakss123.github.io/umut-otel/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Live Preview</a>
                    </div>
                </div>
                <div className="max-w-xs w-80 mx-auto md:mx-0 lg:basis-1/3 flex flex-col justify-evenly bg-white border border-gray-200 rounded-lg shadow-lg group">
                    <div>
                        <img src={gradient} alt="Google Clone" className='h-36 w-64 mx-auto mt-3' />
                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">Random Gradient Generator</h5>
                            <p className='text-sm tracking-tighter font-bold text-pink-900'>HTML | CSS | JavaScript</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly mb-4 group-hover:opacity-100 xl:opacity-0">
                        <a href="https://github.com/ozanakss123/random-gradient-generator" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Source Code</a>
                        <a href="https://ozanakss123.github.io/random-gradient-generator/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Live Preview</a>
                    </div>
                </div>
                <div className="max-w-xs w-80 mx-auto md:mx-0 lg:basis-1/3 flex flex-col justify-evenly bg-white border border-gray-200 rounded-lg shadow-lg group">
                    <div>
                        <img src={tictactoe} alt="Jotform Logo" className='h-36 w-64 mx-auto mt-3' />
                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">Tic-Tac-Toe</h5>
                            <p className='text-sm tracking-tighter font-bold text-pink-900'>HTML | CSS | JavaScript</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly mb-4 group-hover:opacity-100 xl:opacity-0">
                        <a href="https://github.com/ozanakss123/tic-tac-toe" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Source Code</a>
                        <a href="https://ozanakss123.github.io/tic-tac-toe/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">Live Preview</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;