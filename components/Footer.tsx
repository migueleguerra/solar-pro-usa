import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="grid grid-cols-8 primary-bg-color">
        <div className="col-start-2 pt-10">
            <Link className="w-60" href='/'>
                <img className="" src="solar-pro-logo-white.png" alt="solar pro logo" />
            </Link>
        </div>
        <ul className="col-start-5 pt-10 flex flex-col items-end">
            <li className="text-sm secondary-font-color pb-4">Mobile app</li>
            <li className="text-sm text-white"><Link href='/'>Features</Link></li>
            <li className="text-sm text-white"><Link href='/'>Live share</Link></li>
            <li className="text-sm text-white"><Link href='/'>Video record</Link></li>
        </ul>
        <ul className="col-start-6 pt-10 flex flex-col items-end">
            <li className="text-sm secondary-font-color pb-4">Mobile app</li>
            <li className="text-sm text-white"><Link href='/'>Features</Link></li>
            <li className="text-sm text-white"><Link href='/'>Live share</Link></li>
            <li className="text-sm text-white"><Link href='/'>Video record</Link></li>
        </ul>
        <ul className="col-start-7 pt-10 flex flex-col items-end">
            <li className="text-sm secondary-font-color pb-4">Mobile app</li>
            <li className="text-sm text-white"><Link href='/'>Features</Link></li>
            <li className="text-sm text-white"><Link href='/'>Live share</Link></li>
            <li className="text-sm text-white"><Link href='/'>Video record</Link></li>
        </ul>
        <hr className="col-start-2 col-end-8 my-10 gray-bg-color" />
        <div className="col-start-2 flex items-center pb-10">
            <p className="text-xs text-white">SolarProUSA 2021.</p>
        </div>
        <div className="col-start-6 col-end-8 flex items-center pb-10 justify-end
        ">
            <p className="text-sm text-white">Follow us:</p>
            <Link href='/'><img className="w-6 mx-2" src="footer/facebook.svg" alt="facebook" /></Link>
            <Link href='/'><img className="w-6 mx-2" src="footer/twitter.svg" alt="twitter" /></Link>
            <Link href='/'><img className="w-6 mx-2" src="footer/instagram.svg" alt="instagram" /></Link>
        </div>
    </footer>
  )
}
