import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
    const router = useRouter()

    return (
        <div className="w-full py-2 px-36 h-16 z-10 bg-[#0f1b32] flex flex-row justify-between shadow-lg">
            <Link href="/">
                <img className="h-full object-cover cursor-pointer" src="/logo.png"></img>
            </Link>

            <div className="flex flex-row gap-10">
                <Link href="/explore">
                    <p className={`${router.pathname == "/explore" ? "text-[#96C6FF]" : "text-white"} font-[Audiowide] my-auto cursor-pointer transition-all hover:scale-110`}>Explore</p>
                </Link>
                <Link href="/cloud">
                    <p className={`${router.pathname.includes("/cloud") ? "text-[#96C6FF]" : "text-white"} font-[Audiowide] my-auto cursor-pointer transition-all hover:scale-110`}>Cloud</p>
                </Link>
                <Link href="https://proxima-aerospace.square.site">
                    <p className={`text-white font-[Audiowide] my-auto cursor-pointer transition-all hover:scale-110`}>Store</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar