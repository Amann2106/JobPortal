function Searchbar() {
    return(
        <div className="flex gap-4 my-10 justify-center px">
            <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="" disabled hidden selected>Job Role</option>
                <option value="IOS Developer">IOS Developer</option>
                <option value="Frontend Developer">Frontend developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
            </select>
            <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="" disabled hidden selected>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>
            <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="" disabled hidden selected>Location</option>
                <option value="Remote">Remote</option>
                <option value="Office">Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="" disabled hidden selected>Experience</option>
                <option value="IOS Developer">Fresher</option>
                <option value="Frontend Developer">Junior level</option>
                <option value="Backend Developer">Mid level</option>
                <option value="Android Developer">Senior level</option>
            </select>
            <button className="bg-blue-500 text-white font-bold py-2 px-2">Search</button>
        </div>
    )
}
export default Searchbar;