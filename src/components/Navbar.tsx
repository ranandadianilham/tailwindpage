export const Navbar = () => {
    return (<>
        <div className="rounded-all w-auto h-20 bg-blue-600 flex justify-between shadow-xl">
            <div className="flex justify-start font-semibold text-4xl m-auto">
                <a href="/">HOME</a>
            </div>
            <div className="flex justify-start w-auto m-auto">
                <a href="/page/product" className="mx-3 hover:underline active:font-semibold">Product</a>
                <a href="/page/about" className="mx-3 hover:underline active:font-semibold">About</a>
                <a href="/page/contact" className="mx-3 hover:underline active:font-semibold">Contact</a>
                <a href="/page/account" className="mx-3 hover:underline active:font-semibold">Account</a>
            </div>
        </div>
    </>);
}