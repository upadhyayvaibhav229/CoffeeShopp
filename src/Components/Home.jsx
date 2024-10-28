function Home() {
    return (
        <div id="home" className="h-screen w-full bg-hero-pattern bg-no-repeat md:bg-cover  flex items-start justify-center flex-col pl-8 bg-cover bg-center  md:bg-center lg:bg-top">
            <div className="px-4 mx-2">
                <h2 className="text-white text-xl flex-wrap">Black Coffee is Awesome</h2>
                <h1 className="text-white md:text-4xl text-2xl flex-wrap">Welcome to my <span className="text-red-500">Coffee Shop</span> </h1>
                <p className="w-full  md:w-1/2 text-white flex text-wrap">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eos at atque, explicabo dignissimos alias consequatur quasi ea aut maiores pariatur labore laudantium. Hic natus tenetur sunt eos, obcaecati maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nulla.
                </p>
            </div>

            <div className="px-4 my-2 mx-3">
                <button className="bg-transparent border-solid border-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default Home;
