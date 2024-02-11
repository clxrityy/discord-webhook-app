import { ComponentProps, useState } from "react";
import Button from "./Button";
import { Action, EmbedFormInput, EmbedOptions, FormInput } from "@/util/types";
import { IoMdAddCircle } from "react-icons/io";


/*
    default form
*/

type FormProps = {
    buttonTxt: string;
    inputs: FormInput[];
    actions: Action[];
    submitInfo: () => Promise<void>;
} & ComponentProps<"form">;


const Form = ({ buttonTxt, inputs, actions, submitInfo, ...props }: FormProps) => {

    return <form
        {...props}
        className="flex flex-col items-baseline 2xl:items-center rounded-lg px-8 py-5 md:w-3/4 lg:w-2/3 2xl:w-2/5 h-auto mx-auto mt-5 justify-start bg-gray-500/25 border border-white/50"
        onSubmit={(e) => {
            e.preventDefault();
            submitInfo();
        }}
    >

        <div className="grid grid-flow-row items-center py-4 w-full text-center justify-center gap-5 divide-y xl:divide-none divide-white/25">

            {inputs && inputs.map((info, idx) => (
                <div key={idx} className="add-form-label">
                    <span className="flex flex-col gap-2 items-center justify-center text-center w-full">
                        {info.label}
                    </span>
                    {
                        info.required &&
                        <span className="text-xs text-red-400/85">
                            Required
                        </span>
                    }
                    <input id={info.label} placeholder={info.placeholder && info.placeholder} required={info.required} type={info.type} onChange={(e) => {
                        actions.forEach((action) => {
                            if (action.name === info.label) {
                                info.onChange && info.onChange(e, action.dispatch);
                            }
                        })
                    }}
                    />
                </div>
            ))}
        </div>
        <Button type="submit">
            {buttonTxt}
        </Button>
    </form>;
}

/*
    embed form
*/

interface EmbedProps extends FormProps {
    inputs: EmbedFormInput<EmbedOptions>[];
}

export const EmbedForm = ({ buttonTxt, inputs, actions, submitInfo, ...props }: EmbedProps) => {

    const [fieldsCount, setFieldsCount] = useState<number>(0);

    return <form
        {...props}
        onSubmit={(e) => {
            e.preventDefault();
            submitInfo();
        }}
        className="w-full flex items-center justify-center py-5 mx-auto"
    >
        <div className="grid grid-rows-10 lg:grid-rows-5 grid-flow-col items-center py-4 w-full text-center justify-center gap-2 divide-y divide-white/30 lg:divide-none">

            {inputs && inputs.map((info, idx) => (
                <div key={idx} className="flex flex-row items-center gap-2 w-full add-form-label">
                    <div className="flex mx-auto flex-row-reverse items-center gap-2">
                        <label className="mx-auto font-semibold flex flex-row items-center gap-3">
                            {info.label}
                        </label>
                        {info.label === "Fields" && (
                            <button onClick={() => setFieldsCount(fieldsCount + 1)}>
                                <IoMdAddCircle
                                    className=""
                                    size={20}
                                />
                            </button>
                        )}
                    </div>
                    {!info.params &&
                        <input className="w-full" type={info.type} onChange={(e) => {
                            actions.forEach((action) => {
                                if (action.name === info.label) {
                                    info.onChange && info.onChange(e, action.dispatch)
                                }
                            })
                        }} />
                    }
                    {
                        info.params && (
                            <div className="flex items-center flex-col-reverse gap-2 text-center w-full justify-center">
                                {info.params.map((param, idx) => (
                                    <div key={idx} className="grid grid-cols-2 items-center gap-3 w-full justify-center">
                                        <label className="w-full text-gray-300 text-sm">
                                            {param.label}
                                        </label>
                                        <input type={param.type} className="w-full" onChange={(e) => {
                                            actions.forEach((action) => {
                                                if (action.name === param.label) {
                                                    param.onChange(e, action.dispatch);
                                                }
                                            })
                                        }} />
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
            ))}

        </div>
        <Button type="submit">
            {buttonTxt}
        </Button>
    </form>
}


export default Form;