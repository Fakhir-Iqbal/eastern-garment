import React from "react";

export default function Contact() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto py-20 gap-5 md:gap-0" >
            <div className="px-5" >
                <h1 className="text-5xl md:text-8xl font-bold italic" >FEEL FREE TO CONTACT US</h1>
                <p className="mt-5" ><span className="font-bold italic" >Address: </span>B-58, S.I.T.E. Karachi, Pakistan</p>
                <p><span className="font-bold italic" >Phone: </span>(92-21) 111-704- 704</p>
                <p><span className="font-bold italic" >Fax: </span>(92-21) 2561452</p>
                <p><span className="font-bold italic" >Email: </span> info@eastern-garments.com</p>
            </div>
            <div>
                <form className="space-y-4 px-5">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full p-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300 resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-100 py-3 rounded-md font-bold hover:bg-blue-950 hover:text-white transition duration-500"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};


