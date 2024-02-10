import { displayOptions } from "@/config/constants"


const Header = () => {
    return (
        <header className="p-5 flex items-center justify-center gap-5">
            <div>
                <displayOptions.icons.logo size={50} />
            </div>
        </header>
    )
}

export default Header