import bannerStack from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div >

            <section className="min-h-[80vh] bg-white flex items-center">
                <div className="container mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div>

                            <h1 className="text-4xl md:text-6xl font-bold ">
                                Build Your
                                <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                                    {" "}  Developer Stack
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-black">
                                Explore modern technologies and discover the tools you need
                                to build amazing web applications.
                            </p>

                          
                            <div className="mt-8 flex gap-4 items-center">

                                <button className="px-6 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-purple-600 to-pink-500">
                                    Explore Technologies
                                </button>

                                <button className="px-6 py-3 rounded-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                                    Learn More
                                </button>

                            </div>
                        </div>

                      
                        <div >
                            <img
                                src={bannerStack}
                                alt="Developer technologies"
                                className="w-full max-w-lg"
                            />
                        </div>

                    </div>

                </div>
            </section>
           
        </div>
    );
};

export default Banner;
