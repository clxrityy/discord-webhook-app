import { displayOptions } from "@/config/constants";
import { ComponentProps } from "react";


type Props = {
    size?: number;
    onClick?: () => void | Promise<void>;
    children: React.ReactNode;
} & ComponentProps<"div">;

const CreateBlock = ({ children, size, onClick, ...props }: Props) => {
    

    return <div
        {...props}
        className="w-full h-1/3 border-dashed border-2 border-primary transparent relative cursor-pointer rounded-md hover:scale-95 transition-transform flex items-center justify-center"
        onClick={onClick}
    >
        <div className="absolute w-full h-full bg-primary/50 hover:bg-primary/65 transition-colors" />

        <div className="flex flex-row items-center justify-center px-20 py-12 h-full w-full">
            <displayOptions.icons.plus size={size ? size : 50} />
            {children}
        </div>
    </div>
}

export default CreateBlock;