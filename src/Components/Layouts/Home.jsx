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
            </div>

        </div>
    );
};

export default Home;