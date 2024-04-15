/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Land = ({ land }) => {

    const { title, image, description, id } = land;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image}alt="Land Images" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/Land/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Land;