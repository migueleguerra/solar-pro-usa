import Link from "next/link"

export const VideoSection = () => {
  return (
    <div className="flex">
        <div className="primary-font-color p-4 ml-4 flex flex-col justify-center">
            <p className="text-xl">Hey you!</p>
            <h3 className="text-3xl font-bold">Contact Us for more</h3>
            <h3 className="text-3xl secondary-font-color font-bold">Information!</h3>
            <p className="py-4">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt. </p>
            <div className="py-4">
                <input className="border pl-2 w-2/3 py-2 mr-4 rounded-md" placeholder="Enter your email"></input>
                <button className="px-8 py-2 primary-bg-color text-white rounded-md">Notify me</button>
            </div>
            <p className="text-xs">We care about the protection of your data Read our <Link className="secondary-font-color" href="/">Privacy Policy</Link></p>
        </div>
        <iframe className="w-full rounded-md shadow-md"  src="https://www.youtube.com/embed/-MJcAUNPeU4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  )
}