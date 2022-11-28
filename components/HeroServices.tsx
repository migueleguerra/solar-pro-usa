interface HeroServicesParams {
    heading: string,
    headingColor: string,
    message: string,
    imageUrl: string,
    reverse?: boolean
}

export const HeroServices = ({heading, headingColor, message, imageUrl, reverse = false}: HeroServicesParams) => {
  return (
    <section className="grid grid-cols-8">
      { reverse ? 
        <>
          <div className="col-start-1 col-span-4 flex flex-col justify-center p-10 space-y-6    items-center">
              <h1 className="text-4xl font-bold primary-font-color">{heading} <span className="secondary-font-color">{headingColor}</span></h1>
              <p className="py-5 text-lg font-normal primary-font-color">{message}</p>
          </div> 
          <div className="col-start-5 col-span-4" >
            <img className="w-full h-screen" src={imageUrl} alt="residential" />
          </div> 
        </> 
        : 
        <>
          <div className="col-start-1 col-span-4" >
            <img className="w-full h-screen" src={imageUrl} alt="residential" />
          </div>
          <div className="col-start-5 col-span-4 flex flex-col justify-center p-10 space-y-6 items-center">
              <h1 className="text-4xl font-bold primary-font-color">{heading} <span className="secondary-font-color">{headingColor}</span></h1>
              <p className="py-5 text-lg font-normal primary-font-color">{message}</p>
          </div>
        </> 
      }
    </section>
  )
}
