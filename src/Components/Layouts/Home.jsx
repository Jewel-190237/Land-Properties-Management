import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Land from "./Land";
import UseTitle from "../Title/UseTitle";
import BreakingNews from "./BreakingNews";


const Home = () => {

    UseTitle("Home")
    const lands = useLoaderData()

    return (
        <div>
            <BreakingNews></BreakingNews>
            <Banner></Banner>
            <div>
                <h2 className="text-3xl text-center mt-5">Land Properties: {lands.length}</h2>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    {
                        lands.map(land => <Land key={land.id} land={land}>
                        </Land>)
                    }
                </div>
                <h2 className="text-3xl my-6 text-center">FAQ</h2>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Have any Discount ?
                        </div>
                        <div className="collapse-content">
                            <p>Yes</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Have Replace
                        </div>
                        <div className="collapse-content">
                            <p>No</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Contact Any time ?
                        </div>
                        <div className="collapse-content">
                            <p>Yes</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;