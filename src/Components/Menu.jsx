import React from 'react';

function Menu() {
    return (
        <>
            <div id="menu" className="w-full h-auto p-8 flex flex-col items-center">
                <h1 className="text-center text-3xl mt-9 text-white">Popular Coffee Menus</h1>
                <div className="border-2 border-sky-700 w-5 mb-4"></div>
                <div className="w-full h-auto flex flex-wrap flex-row justify- items-center">
                    {Array(4).fill(null).map((_, index) => (
                        <div key={index} className="shadow-lg bg-white md:w-[600px] w-[250px] h-auto flex md:flex-row flex-col rounded-lg m-4">
                            <div className="rounded-full md:w-full w-full">
                                <img src="https://www.nestleprofessional.in/sites/default/files/2021-08/Espresso_0.jpg" alt="Espresso" />
                            </div>
                            <div className="flex md:flex-row flex-col">
                                <div>
                                    <h1 className="p-2 text-2xl text-center font-bold">Espresso</h1>
                                    <p className="p-2 text-xl">A strong and bold coffee brewed by forcing hot water through finely-ground coffee.</p>
                                </div>
                                <div>
                                    <p className="mx-2 py-2 md:text-gray-500 text-xl">
                                        <span className="md:hidden">Price:</span> 100$
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Menu;
