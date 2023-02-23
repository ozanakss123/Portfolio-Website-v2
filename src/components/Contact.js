function Contact() {
    return (
        <div className="bg-gray-100 py-12 px-16 md:px-48 lg:px-64" id="contact">
            <h3 className="text-center text-sm font-normal text-gray-500">Get In Touch</h3>
            <h1 className="text-center text-pink-700 text-4xl font-bold mt-2">Contact Me</h1>
            <p className="mt-8 text-center">If you need a website or UX research for your project, please send me a message from WhatsApp with the details.</p>
            <div className="flex items-center justify-center">
                <a href="https://wa.me/905393811709" className="flex justify-center items-center w-full md:w-6/12 lg:w-3/12 md:justify-center h-12 mt-8 md:mt-12 lg:mt-12 rounded-xl text-white bg-pink-700 transition hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300">CONTACT</a>
            </div>
        </div>
    )
}

export default Contact;