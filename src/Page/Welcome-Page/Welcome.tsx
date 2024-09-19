import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome-container flex flex-col items-center justify-center">
            <div className="text-5xl font-bold">
                Welcome!
            </div>
            <div className="text-sm">
                Please Login to Website...
            </div>
            <Link to="/Login-Page" type="submit" className='flex border border-gray-300 px-2 py-1 rounded mt-9 hover:bg-zinc-700 hover:rounded-full hover:text-white hover:transition-all'>Log in</Link>
        </div>
    )
}

export default Welcome;