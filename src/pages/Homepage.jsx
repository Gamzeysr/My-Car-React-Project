import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
    return (
        <div>
            <h1>Welcome To The Land Of Classic Cars :)) </h1>
            <div className="pictures">
                {data.map((item) => (
                    <Picture car={item} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;