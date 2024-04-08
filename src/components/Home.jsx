import React from "react";
import Navbar from "./Navbar";
import { useAuth } from "./AuthContext";

const Home = () => {
    const { user } = useAuth();

    // Dummy data for additional cards
    const additionalCards = [
        {
            id: 1,
            image: "https://www.spektrix.com/hubfs/Clients/the-wedding-gift-contemporary-american-theatre-festival-credit-seth-freeman-600-188.jpg",
            title: "Audit Your Income Streams",
            description: "A practical tool to identify the untapped revenue potential in your arts organization."
        },
        {
            id: 2,
            image: "https://www.spektrix.com/hubfs/Clusters/Marketing/working-together-increase-revenue-600-188.jpg",
            title: "Working Collaboratively to Increase Revenue",
            description: "Inspiration and ideas to get your whole team behind your income targets."
        },
        {
            id: 3,
            image: "https://www.spektrix.com/hubfs/Clients/opera-holland-park-pirates-penzance-credit-ali-wright-600-188.jpg",
            title: "Spektrix Data Insights",
            description: "Data points and best practice ideas to help you benchmark and grow success."
        },
        {
            id: 4,
            image: "https://www.spektrix.com/hs-fs/hubfs/Insights/Rethinking%20Recruitment/rethinking-recruitment-cover-600-188.jpg",
            title: "Rethinking Recruitment",
            description: "Practical, inclusive ideas for hiring great people into customer relationship management roles."
        }
    ];

    return(
        <>
            <Navbar />
            <h1>Welcome, {user.name}</h1>
            <div className="container">
                <div className="row">
                    {additionalCards.map(card => (
                        <div className="col-lg-3 col-md-6 mb-4" key={card.id}>
                            <div className="card h-100">
                                <img className="card-img-top" src={card.image} alt={card.title} />
                                <div className="card-block">
                                    <h5>{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-secondary btn-sm mt-2">Download Now!</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {additionalCards.map(card => (
                        <div className="col-lg-3 col-md-6 mb-4" key={card.id}>
                            <div className="card h-100">
                                <img className="card-img-top" src={card.image} alt={card.title} />
                                <div className="card-block">
                                    <h5>{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-secondary btn-sm mt-2">Download Now!</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
