import {MoonLoader} from "react-spinners";

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center ">
            <MoonLoader
                color="#00bdff"
                cssOverride={{}}
                size={50}
                speedMultiplier={1}
            />
        </div>
    );
};

export default Loading;