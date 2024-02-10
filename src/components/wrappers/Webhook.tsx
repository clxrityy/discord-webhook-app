import { WebhookData } from "@/util/types"
import { ComponentProps } from "react";
import { ImEmbed } from "react-icons/im";
import { MdEventRepeat } from "react-icons/md";
import { GrConnect } from "react-icons/gr";
import Button from "../ui/Button";
import Link from "next/link";

type Props = {
    webhook: WebhookData;
} & ComponentProps<"div">;

const WebhookWrapper = ({ webhook, ...props }: Props) => {

    return (
        <div
            {...props}
            className="w-full h-3/5 border border-primary/50 rounded-md mx-auto shadow-inner shadow-primary/75 px-4 py-6 my-10"
        >
            <div className="h-full w-full flex flex-col justify-center gap-10">
                <div className="grid grid-flow-row lg:grid-flow-col gap-8 m-5 lg:m-10 h-2/3 lg:h-1/2 xl:h-4/5 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">

                    <Button solid>
                        <Link className="flex flex-row text-center items-center gap-2" href={`/webhooks/${webhook.uuid}/embed`}>
                            <ImEmbed size={25} /> <span>
                                Embed sender
                            </span>
                        </Link>
                    </Button>

                    <Button solid disabled>
                        <div className="flex flex-row text-center items-center gap-2">
                            <MdEventRepeat size={25} /> <span>
                                Event listener
                            </span>
                        </div>
                    </Button>
                    <Button solid disabled>
                        <div className="flex flex-row text-center items-center gap-2">
                            <GrConnect size={25} /> <span>
                                Connect to an application
                            </span>
                        </div>
                    </Button>

                </div>

                <div className="flex flex-row items-center justify-center gap-5 mx-10 lg:mx-20 xl:mx-30 lg:gap-10">
                    <Button danger>
                        Edit
                    </Button>
                    <Button solid danger>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default WebhookWrapper;