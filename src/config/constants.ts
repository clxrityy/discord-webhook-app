import { EmbedFormInput, EmbedOptions, FormInput, MenuItem } from "@/util/types";
import { LuWebhook } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { RiRobot2Fill } from "react-icons/ri";
import { MdWebhook } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";



export const menuItems: MenuItem[] = [
    {
        title: "Menu",
        path: "/menu",
        icon: BiSolidDashboard,
    },
    {
        title: "Bots",
        path: "/bots",
        icon: RiRobot2Fill
    },
    {
        title: "Webhooks",
        path: "/webhooks",
        icon: MdWebhook
    },
    {
        title: "Docs",
        path: "/docs",
        icon: IoDocumentText
    }
];

export const botFormInputs: FormInput[] = [
    {
        label: "Application ID",
        placeholder: "1111111111111111111",
        required: true,
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length === e.target.placeholder.length) {
                action(e.target.value);
            }
        },
        type: "text"
    },
    {
        label: "Token",
        placeholder: "eosfjesogIEG090eg8.9efok...",
        required: true,
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length === 59) {
                action(e.target.value);
            }
        },
        type: "password"
    },
    {
        label: "Name",
        placeholder: "botname",
        required: false,
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length >= 2) {
                action(e.target.value);
            }
        },
        type: "text"
    },
    {
        label: "Public Key",
        placeholder: "f32a1b47c2f18fe4ab4f2c1e4170577ccd2c67098aa923a73ddecf451ef98e33",
        required: false,
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length === e.target.placeholder.length) {
                action(e.target.value);
            }
        },
        type: "text"
    }
];

export const webhookFormInputs: FormInput[] = [
    {
        label: "ID",
        placeholder: "1111111111111111111",
        required: true,
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length === this.placeholder?.length) {
                action(e.target.value);
            }
        },
        type: "text"
    },
    {
        label: "Token",
        placeholder: "eosfjesogIEG090eg8.9fok...",
        required: true,
        type: "password",
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length >= e.target.placeholder.length) {
                action(e.target.value);
            }
        },
    },
];

export const embedFormInputs: EmbedFormInput<EmbedOptions>[] = [
    {
        label: "Author",
        type: "text",
        params: [
            {
                label: "Name",
                type: "text",
                onChange(e, action) {
                    e.preventDefault();
                    if (e.target.value.length > 0) {
                        action(e.target.value);
                    }
                },
            },
            {
                label: "Icon",
                type: "text",
                onChange(e, action) {
                    e.preventDefault();
                    if (e.target.value.length > 0)
                        action(e.target.value);
                },
            },
            {
                label: "Author URL",
                type: "text",
                onChange(e, action) {
                    e.preventDefault();
                    if (e.target.value.length > 0)
                        action(e.target.value)
                },
            }
        ]
    },
    {
        label: "Title",
        type: "text",
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length > 0) {
                action(e.target.value);
            }
        }
    },
    {
        label: "URL",
        type: "text",
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length > 0)
                action(e.target.value);
        },
    },
    {
        label: "Description",
        type: "text",
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length > 0)
                action(e.target.value);
        },
    },
    {
        label: "Color",
        type: "text",
        placeholder: "#ffffff",
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.startsWith('#') || e.target.value.includes("rgb")) {
                action(e.target.value)
            }
        },
    },
    {
        label: "Fields",
        type: "text",
        params: [
            {
                label: "Field title",
                type: "text",
                onChange(e, action) {
                    e.preventDefault();
                    if (e.target.value.length > 0)
                        action(e.target.value);
                },
            },
            {
                label: "Field value",
                type: "text",
                onChange(e, action) {
                    e.preventDefault();
                    if (e.target.value.length > 0)
                        action(e.target.value);
                },
            },
            {
                label: "Inline",
                type: "checkbox",
                onChange(e, action) {
                    e.preventDefault();
                    if (e.target.value) {
                        action(e.target.value)
                    }
                },
            }
        ]
    },
    {
        label: "Image",
        type: "text",
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length > 0)
                action(e.target.value);
        },
    },
    {
        label: "Thumbnail",
        type: "text",
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length > 0)
                action(e.target.value);
        },
    },
    {
        label: "Footer",
        type: "text",
        params: [
            {
                label: "Text",
                type: "text",
                onChange(e, action) {
                    e.preventDefault();
                    if (e.target.value.length > 0)
                        action(e.target.value);
                },
            },
            {
                label: "Icon URL",
                type: "text",
                onChange(e, action) {
                    e.preventDefault();
                    if (e.target.value.length > 0)
                        action(e.target.value);
                },
            }
        ]
    },
    {
        label: "Timestamp",
        type: "date",
        onChange(e, action) {
            e.preventDefault();
            if (e.target.value.length > 0)
                action(e.target.value);
        },
    }

]


export const webhookUserFormInputs: FormInput[] = [
    {
        label: "Username",
        onChange(e, action) {
            e.preventDefault();
            action(e.target.value);
        },
        type: "text"
    },
    {
        label: "Avatar",
        onChange(e, action) {
            e.preventDefault();
            action(e.target.value);
        },
        type: "text"
    }
]

export const displayOptions = {
    icons: {
        logo: LuWebhook,
        discord: FaDiscord,
        menu: FiMenu,
        loading: AiOutlineLoading3Quarters,
        plus: IoMdAdd
    }
}
