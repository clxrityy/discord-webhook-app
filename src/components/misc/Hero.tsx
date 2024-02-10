import { displayOptions } from "@/config/constants";
import LogoSpin from "./LogoSpin";
import Button from "../ui/Button";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-evenly">
            <div className="w-full h-full flex items-center justify-center flex-col md:flex-row gap-5 mx-auto">
                <div className="w-56">
                    <LogoSpin />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                    Manage your discord webhooks
                </h1>
            </div>
            <div className="w-full flex justify-center items-center px-10">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col md:flex-row justify-stretch gap-5 md:gap-10">
                    <Button>
                        <Link href='/sign-in'>
                            <h1 className="text-lg flex flex-row items-center justify-center gap-2">
                                <displayOptions.icons.discord size={50} />
                                <span>
                                    Login with Discord
                                </span>
                            </h1>
                        </Link>
                    </Button>
                    <Button solid>
                        <Link href='/docs'>
                            <h1 className="">
                                Documentation
                            </h1>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Hero