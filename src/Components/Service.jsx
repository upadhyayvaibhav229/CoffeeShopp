import React from 'react';

function Services() {
    return (
        <>
            <div id="services" className="w-full h-auto p-8 flex flex-col items-center">
                <h1 className="text-center text-3xl mt-9 text-white">Our Services</h1>
                <div className="border-2 rounded-md border-sky-700 w-20 mt-1 mb-4"></div>
                <div className="w-full h-auto flex flex-wrap flex-row justify-center items-center">
                    {/* Service Card 1 */}
                    <div className="shadow-lg bg-white md:w-[400px] w-[250px] h-auto flex flex-col rounded-lg m-4 p-4">
                        <div className="flex justify-center mb-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwPTJnOfSed9QufzbfRFKoFIwun-5LgU5DA&s"
                                alt="Service 1"
                                className="rounded-full w-24 h-24"
                            />
                        </div>
                        <h2 className="text-xl text-center font-bold">Coffee Brewing</h2>
                        <p className="text-center mt-2">
                            Learn how to brew the perfect cup of coffee using various techniques and equipment.
                        </p>
                    </div>

                    {/* Service Card 2 */}
                    <div className="shadow-lg bg-white md:w-[400px] w-[250px] h-auto flex flex-col rounded-lg m-4 p-4">
                        <div className="flex justify-center mb-2">
                            <img
                                src="https://kaapimachines.com/wp-content/uploads/2022/04/coffee-latte-art-2021-09-03-01-05-38-utc.png"
                                alt="Service 2"
                                className="rounded-full w-24 h-24"
                            />
                        </div>
                        <h2 className="text-xl text-center font-bold">Coffee Tasting</h2>
                        <p className="text-center mt-2">
                            Join us for a coffee tasting experience, where you can explore different flavors and aromas.
                        </p>
                    </div>

                    {/* Service Card 3 */}
                    <div className="shadow-lg bg-white md:w-[400px] w-[250px] h-auto flex flex-col rounded-lg m-4 p-4">
                        <div className="flex justify-center mb-2">
                            <img
                                // src="https://via.placeholder.com/150"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwPTJnOfSed9QufzbfRFKoFIwun-5LgU5DA&s"
                                alt="Service 3"
                                className="rounded-full w-24 h-24"
                            />
                        </div>
                        <h2 className="text-xl text-center font-bold">Barista Training</h2>
                        <p className="text-center mt-2">
                            Enhance your skills with our barista training sessions, covering everything from espresso to latte art.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
