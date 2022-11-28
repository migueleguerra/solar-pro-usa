interface HeroServicesParams {
    heading: string,
    headingColor: string,
    message: string,
    imageUrl: string
}

export const HeroServices = ({heading, headingColor, message, imageUrl}: HeroServicesParams) => {
  return (
    <section className="grid grid-cols-8">
        <div className="col-start-1 col-span-4" >
          <img className="w-full h-screen" src={imageUrl} alt="residential" />
        </div>
        <div className="col-start-5 col-span-4 flex flex-col justify-center p-10 space-y-6 items-center">
            <div className="flex">
              <h1 className="text-5xl font-bold primary-font-color">{heading}</h1>
              <h1 className="text-5xl font-bold secondary-font-color">{headingColor}</h1>
            </div>
            <p className="py-5 text-xl font-normal primary-font-color">{message}</p>
        </div>
    </section>
  )
}
