const Picture = ({ car }) => {
    const {
        src: { large },
        photograph,
        desc,
    } = car;
    return (
        <div className="picture">
            <div className="imageContainer">
                <img src={large} alt="img" />
                <div className="description">
                    <p className="desc">{desc}</p>
                </div>
            </div>
            <div className="info">
                <p>{photograph}</p>
            </div>
        </div>
    );
};

export default Picture;