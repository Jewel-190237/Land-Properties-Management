import 'animate.css';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero rounded-xl sm:w-full md:w-full lg:w-full min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/nwbWrVF/beautiful-landscape-with-clear-sky.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft"> Welcome to Ideal Properties Ltd</h1>
                                <p className="mb-5 animate__animated animate__backInRight">Explore our stunning properties showcased in properties, featuring picturesque views, prime locations, and unmatched investment opportunities. Start your journey towards your dream property today</p>
                                <button className="btn btn-primary animate__animated animate__backInUp">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/j6fM7xf/beautiful-landscape-with-small-village.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft"> Welcome to Ideal Properties Ltd</h1>
                                <p className="mb-5 animate__animated animate__backInRight">Explore our stunning properties showcased in properties, featuring picturesque views, prime locations, and unmatched investment opportunities. Start your journey towards your dream property today</p>
                                <button className="btn btn-primary animate__animated animate__backInUp">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/BVrGbYV/rural-landscape-with-field-road.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft"> Welcome to Ideal Properties Ltd</h1>
                                <p className="mb-5 animate__animated animate__backInRight">Explore our stunning properties showcased in properties, featuring picturesque views, prime locations, and unmatched investment opportunities. Start your journey towards your dream property today</p>
                                <button className="btn btn-primary animate__animated animate__backInUp">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/7SNNwbF/wallpaperflare-com-wallpaper.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft"> Welcome to Ideal Properties Ltd</h1>
                                <p className="mb-5 animate__animated animate__backInRight">Explore our stunning properties showcased in properties, featuring picturesque views, prime locations, and unmatched investment opportunities. Start your journey towards your dream property today</p>
                                <button className="btn btn-primary animate__animated animate__backInUp">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;