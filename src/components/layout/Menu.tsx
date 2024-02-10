import { menuItems } from "@/config/constants"
import Link from "next/link"

type Props = {
    activeMenu?: boolean;
}

const Menu = ({ activeMenu }: Props) => {

    if (!activeMenu)
        return (
            <nav className="h-full w-full">
                <div className="hidden md:flex items-center">
                    <ul className="flex flex-row items-center justify-evenly w-1/2 lg:w-2/3 xl:w-1/3 px-6 py-4 rounded-md border border-primary">
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="text-lg">
                                <Link href={item.path} className="hover:underline underline-offset-4 uppercase font-mono">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    else
        return (
            <nav className="h-full w-full">
                <div className="flex md:hidden">
                    <ul className={`flex flex-col items-start justify-evenly bg-gradient-to-br from-primary/25 to-primary/5 rounded-md mt-2 border border-primary/75`}>

                        {menuItems.map((item, idx) => (
                            <li key={idx} className="w-full">
                                <Link href={item.path} className="nav-menu-link">
                                    {
                                        item.icon && <item.icon />
                                    }
                                    <span>
                                    {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </nav>
        );
}

export default Menu