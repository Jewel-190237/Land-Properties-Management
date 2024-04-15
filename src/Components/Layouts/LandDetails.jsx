import { useLoaderData, useParams } from "react-router-dom";

const LandDetails = () => {

    const { id } = useParams()
    const lands = useLoaderData()
    const land = lands.find(land => land.id == id)

    return (
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <img className='w-96 rounded-2xl bg-[#1313130D] p-10' src={land.image} />
                        <div>
                            <h1 className="text-3xl font-bold w-96 p-4">{land.name}</h1>
                            <p className="p-4">By : {land.title}</p>
                            <hr />
                            <p className="font-bold p-4">Review: <span className="font-thin">{land.review}</span></p>
                            <hr />

                            <div className="flex">
                                <p className="p-4 my-4 font-bold">Facilities</p>
                                <p className="p-4 my-4 mx-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl font-bold">#{land.special_facilities[0]}</p>
                                <p className="p-4 my-4 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl font-bold">#{land.special_facilities[1]}</p>
                            </div>
                            <hr />
                            <div >
                                <div className="flex mt-3">
                                    <p className="mr-32">Number of page:</p>
                                    <p className="font-bold">{land.location}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-44">Publisher:</p>
                                    <p className="font-bold">{land.status}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-36">Year of Publish:</p>
                                    <p className="font-bold">{land.area}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-52">Rating:</p>
                                    <p className="font-bold">{land.area}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default LandDetails;