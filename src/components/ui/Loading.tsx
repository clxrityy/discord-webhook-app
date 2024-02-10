import { displayOptions } from "@/config/constants";
import { ComponentProps } from "react";
import { IconType } from "react-icons";

type Props = {
    size?: number;
} & ComponentProps<IconType>;

export default async function Loading({ size, ...props }: Props) {

    return <displayOptions.icons.loading
        {...props}
        size={size ? size : 50}
        className="animate-spin text-white"
    />;
}