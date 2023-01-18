const account = () => {
    return <>
    <div className="m-auto w-[1000px] mt-5 grid grid-cols-5">
        <div className="col-span-5 grid grid-cols-5">
            <div className="col-span-1">
                <img src="https://picsum.photos/id/237/200/200" className="rounded-full" width={200} height={200} />
            </div>
            <div className="col-span-2 ml-3">
                <p>Name</p>
                <p>desc</p>
            </div>
        </div>
        <div className="border mt-32 rounded-2xl w-auto bg-slate-200 col-span-5 h-56"></div>
    </div>
    </>
}

export default account;