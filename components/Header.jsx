import Link from "next/link";

function Header() {
    return (
        <header className="container flex justify-between mx-5 my-3">
            <h1 className="text-5xl py-5 px-5">
                    <Link href="/">Ishihara Tech</Link>
            </h1>
               <div className="flex">
                <Link href="/aboutme">
                    <img className="object-cover h-30 w-24 py-3 mr-6" src="/images/ishihara.jpg" />
                </Link>
                <Link href="/aboutblog">
                    <p className=
                    'py-8 opacity-50 underline hover:opacity-100 mr-8'>
                    About me ?
                    </p>
                </Link>
                </div> 
            </header>
    )
}

export default Header;
            
        