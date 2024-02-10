import { displayOptions } from "@/config/constants";

const LogoSpin = () => {
    return (
        <div className="flex items-center justify-center">
            <displayOptions.icons.logo size={150} className="animate-slow-spin" />
        </div>
    );
}

export default LogoSpin;