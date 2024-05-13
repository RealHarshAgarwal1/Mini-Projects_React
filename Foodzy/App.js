import React from "react"
import ReactDOM from "react-dom"


const Header = () => {
    return(
        <div className="Header">
            <div>
                <img className="logo" src="https://cdn.slidesharecdn.com/ss_thumbnails/startuprallyfoodzytnw2011v2-110502153937-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className = "res-img" alt= "none" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yss7iggbfqyg69rwk1i5"/>
            <h3>{props.resName}</h3>
        </div>
    )
}

const Body =()=> {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
            <RestaurantCard resName="Janaks Joint"/>
            <RestaurantCard resName="Meghna Foods"/>
            <RestaurantCard resName="KFC"/>
            <RestaurantCard resName="BurgerJoint"/>
            <RestaurantCard resName="HungryHeads"/>
            <RestaurantCard resName="BiryaniRasoi"/>
            <RestaurantCard resName="GharKitchen"/>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="Layout">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);