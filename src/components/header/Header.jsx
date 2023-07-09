import img from "../../assets/nba-logo.png";

const Header = ({ setSearch }) => {
    return (
        <div className="text-center mt-4 ">
            <img src={img} alt="" />
            <h1>NBA Legends</h1>
            <input
                onChange={(e) => setSearch(e.target.value)}
                className="form-control w-50 mx-auto"
                type="search"
                name="name"
                id="name"
                placeholder="Search Player..."
            />
        </div>
    );
};

export default Header;
