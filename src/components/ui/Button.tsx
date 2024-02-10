import React, { ComponentProps } from 'react';

type Props = {
    solid?: boolean;
    danger?: boolean;
    children: React.ReactNode;
} & ComponentProps<"button">;

const Button = ({ solid, children, danger, ...props }: Props) => {


    if (danger)
        return <button
            {...props}
            className={`w-full min-w-max ${solid ? "bg-red-400 text-gray-100" : "border border-red-400 text-red-400 bg-transparent"} focus:outline-none focus:ring ring-red-400 ring-offset-2 hover:scale-105 transition-all duration-200 px-6 py-4 rounded-md flex items-center flex-row justify-center font-bold disabled:cursor-not-allowed disabled:hover:scale-100`}
        >
            {children}
        </button>

    return <button
        {...props}
        className={`w-full min-w-max ${solid ? "bg-primary text-gray-100" : "border-primary border text-primary bg-transparent"} focus:outline-none focus:ring ring-primary ring-offset-2 hover:scale-95 transition-all duration-200 px-6 py-4 rounded-md flex items-center flex-row justify-center font-semibold disabled:cursor-not-allowed disabled:hover:scale-100`}
    >
        {children}
    </button>
}

export default Button