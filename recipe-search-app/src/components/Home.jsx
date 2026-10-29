
import banner from "../assets/HeroBanner.png";

function Home() {
    return (
        <>
            <div className="hero">
                <img
                    src={banner}
                    alt="Hero Image of Recipe Hub"
                    className="hero-image"
                />
            </div>

            <h3 className="main-head">Welcome to RecipeHub</h3>

            <div className="homeContent">
                <h4>Discover. Cook. Enjoy.</h4>

                <p>
                    Your next favourite meal starts here! Explore a world of
                    delicious recipes, discover new flavours, and find
                    inspiration for every occasion.
                </p>

                <h4>Find Your Next Favourite Recipe</h4>

                <p>
                    From quick everyday meals to mouthwatering desserts,
                    RecipeHub helps you discover dishes you'll love.
                </p>

                <h4>What Would You Like to Cook Today?</h4>

                <p className="inner-points">
                    <b>Explore Recipes</b> — Discover recipes for every craving.
                    <br />
                    <b>Find Your Favourites</b> — Search for dishes using your
                    favourite ingredients.
                    <br />
                    <b>Save for Later</b> — Keep your favourite recipes in one
                    place.
                </p>

                <h4>Good Food. Great Moments. Happy Cooking!</h4>
            </div>
        </>
    );
}

export default Home;
