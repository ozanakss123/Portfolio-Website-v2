import jotform from "../assets/jotform.png";
import metu from "../assets/metu.png";

function Work() {
    return (
        <div className="py-12 bg-gray-100 md:px-32 lg:px-42 xl:px-48">
            <h1 className="text-center text-pink-700 text-3xl font-bold mb-8">
                Work Experience
            </h1>
            <div className="flex flex-col justify-evenly flex-wrap gap-8 md:flex-row">
                <div className="max-w-xs mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <a href="https://www.jotform.com/">
                        <img
                            src={jotform}
                            alt="Jotform Logo"
                            className="h-32 mx-auto mt-3"
                        />
                    </a>
                    <div className="p-5">
                        <h5 className="text-2xl px-2 font-bold tracking-tight text-gray-800">
                            Jotform
                        </h5>
                        <h3 className="text-lg px-2 font-bold tracking-tight text-pink-900">
                            UI Development Support Engineer
                        </h3>
                        <p className="text-sm px-2 tracking-tighter text-gray-700">
                            November 2022 - Present
                        </p>
                        <ul className="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400 p-2">
                            <li className="before:content-['•'] before:mr-2 before:text-pink-900 before:text-2xl">Worked on minor UI bugs on New Data Export Tool.</li>
                            <li className="before:content-['•'] before:mr-2 before:text-pink-900 before:text-2xl">Converting New Data Export Tool elements to Jotform.css.</li>
                            <li className="before:content-['•'] before:mr-2 before:text-pink-900 before:text-2xl">Attended technical sessions and demos</li>
                            <li className="mt-2 text-gray-500"><strong className="text-pink-900">Tools: </strong>React, SASS, CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-xs mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <a href="https://www.jotform.com/">
                        <img
                            src={jotform}
                            alt="Jotform Logo"
                            className="h-32 mx-auto mt-3"
                        />
                    </a>
                    <div className="p-5">
                        <h5 className="text-2xl px-2 font-bold tracking-tight text-gray-800">
                            Jotform
                        </h5>
                        <h3 className="text-lg px-2 font-bold tracking-tight text-pink-900">
                            UI Developer Intern
                        </h3>
                        <p className="text-sm px-2 tracking-tighter text-gray-700">
                            August 2022 - September 2022
                        </p>
                        <ul className="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400 p-2">
                            <li className="before:content-['•'] before:mr-2 before:text-pink-900 before:text-2xl">Designed and developed the UI of the Retention Dashboard with the Jr. Growth Intelligence Team.</li>
                            <li className="before:content-['•'] before:mr-2 before:text-pink-900 before:text-2xl">Retention and churn rates are shown in separate tabs.</li>
                            <li className="before:content-['•'] before:mr-2 before:text-pink-900 before:text-2xl">3rd-party dependencies and chart libraries have been implemented in the dashboard.</li>
                            <li className="mt-2 text-gray-500"><strong className="text-pink-900">Tools: </strong>React, SASS, CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-xs mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <a href="https://www.metu.edu.tr/">
                        <img src={metu} alt="Jotform Logo" className="h-32 mx-auto mt-3" />
                    </a>
                    <div className="p-5">
                        <h5 className="text-2xl px-2 font-bold tracking-tight text-gray-800">
                            Middle East Technical University
                        </h5>
                        <h3 className="text-lg px-2 font-bold tracking-tight text-pink-900">
                            IT Support Assistant
                        </h3>
                        <p className="text-sm px-2 tracking-tighter text-gray-700">
                            September 2018 - November 2019
                        </p>
                        <ul className="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400 p-2">
                            <li className="before:content-['•'] before:mr-2 before:text-pink-900 before:text-2xl">Eliminated system errors that may occur in computers and other equipment in the classroom and laboratories.</li>
                            <li className="before:content-['•'] before:mr-2 before:text-pink-900 before:text-2xl">Formatting the computers and installing the programs that the users needed in laboratory and classroom computers.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
