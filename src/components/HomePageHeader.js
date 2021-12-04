export default function HomePageHeader(){
    return (
        <div className="mt-12 rounded-lg grid grid-cols-2 gap-4 max-w-7xl mx-auto pl-8 py-32 sm:px-16 h-full backgroundImageForHomepageHeader">
            <div>
                <h1 className="text-white text-left text-7xl pb-6">Search for <strong>Coffee Shops</strong> in your town</h1>
                <div>
                    <form className="w-full max-w-lg">
                        <div className="-mx-3 mb-6">
                            <div className="h-16 w-full m-full  px-3 mb-6 md:mb-0 flex appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                                <input class="h-full appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Search..."></input>
                                <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4  rounded h-full">
                                Go!
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>  
        </div>
    )
}