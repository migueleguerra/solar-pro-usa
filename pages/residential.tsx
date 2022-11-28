
import Head from "next/head"
import Link from "next/link"
import { CallToAction } from "../components/CallToAction"
import { HeroServices } from "../components/HeroServices"
import { ResidentialCard } from "../components/ResidentialCard"

const Residential = () => {
  return (
    <div>
      <Head>
        <title>Solar Pro USA</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Hero Services */}

      <HeroServices 
        imageUrl="https://images.unsplash.com/photo-1605980413988-9ff24c537935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        heading="Residential"
        headingColor="Solar"
        message="Solar Pro is one of the fastest growing solar energy companies in the Atlanta area. Our professional staff will guide you through the solar design and installation process to maximize your energy efficiency and savings. 
        A skilled solar technician will provide you with a custom photovoltaic (PV) solar system design, proposal, and energy saving analysis and answer all your questions on battery backups, solar rebates and incentives, solar savings, system specs, and installation, making sure you have all of the information you need to make an informed decision."/>

      {/* Residential Services System */}

      <section className="my-40 grid grid-cols-8 gap-4 text-center primary-font-color">
        <h2 className="text-3xl font-bold col-start-2 col-span-6">Residential Services Systems</h2>
        <p className="text-xl col-start-3 col-span-4 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <div className="col-start-3">
          <ResidentialCard 
            imageUrl="residential/electric-tower.svg"
            heading="Grid Tied"
            message="Lorem ipsum when is to up and down with."/>
        </div>
        <div className="col-start-4">
          <ResidentialCard 
            imageUrl="residential/grid.svg"
            heading="Grid Tied"
            message="Lorem ipsum when is to up and down with."/>
        </div>
        <div className="col-start-5">
          <ResidentialCard 
            imageUrl="residential/storage.svg"
            heading="Grid Tied"
            message="Lorem ipsum when is to up and down with."/>
        </div>
        <div className="col-start-6">
          <ResidentialCard 
            imageUrl="residential/product.svg"
            heading="Grid Tied"
            message="Lorem ipsum when is to up and down with."/>
        </div>
      </section>

      {/* Premium Solar Roof */}

      <section className="pt-20 pb-60 grid grid-cols-8 gap-4 primary-font-color">
        <div className="text-3xl font-bold col-start-2 col-span-6 text-center">
          <h2>Premium Solar Roof Systems, Backed By The Industry's</h2>
          <h2 className="secondary-font-color">Best Warranty</h2>
        </div>
        <p className="text-xl col-start-3 col-span-4 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <div className="col-start-2 col-span-3 p-10">
          <img className="rounded-md shadow-xl" src="https://images.unsplash.com/flagged/photo-1566838634698-48b165cb0a9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="solar panels" />
        </div>
        <div className="col-start-5 col-span-3 p-10 flex flex-col space-y-4 justify-center items-start">
          <h3 className="text-2xl font-bold">Solar Panels</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <Link className="px-8 py-2 secondary-bg-color text-white rounded-md" href='contact'>Get a quote</Link>
        </div>
        <div className="col-start-2 col-span-3 p-10 flex flex-col space-y-4 justify-center items-start">
          <h3 className="text-2xl font-bold">Solar Shingles</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <Link className="px-8 py-2 secondary-bg-color text-white rounded-md" href='contact'>Get a quote</Link>
        </div>
        <div className="col-start-5 col-span-3 p-10">
          <img className="rounded-md shadow-xl" src="https://images.unsplash.com/photo-1630608354129-6a7704150401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="solar panels" />
        </div>
        <div className="col-start-2 col-span-3 p-10">
          <img className="rounded-md shadow-xl" src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="solar panels" />
        </div>
        <div className="col-start-5 col-span-3 p-10 flex flex-col space-y-4 justify-center items-start">
          <h3 className="text-2xl font-bold">Solar Tiles</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <Link className="px-8 py-2 secondary-bg-color text-white rounded-md" href='contact'>Get a quote</Link>
        </div>
      </section>

      {/* How it works? */}

      <section className="grid grid-cols-8 primary-font-color relative">
        <div className='absolute -top-40 col-start-2 col-end-8 w-full'>
          <CallToAction
            header="We can help you calculate"
            headerColor="financing!"
            button={true}/>
        </div>
        <div className="col-start-1 col-end-5 flex flex-col justify-center p-20 space-y-6">
          <div className="text-3xl font-bold flex">
            <h2>How Solar</h2>
            <h2 className="secondary-font-color">works</h2>
          </div>
          <p className="text-xl pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <div className="flex items-center space-x-4">
            <img src="residential/solarworks-sun.png" alt="sunlight" />
            <div>
              <h3 className="font-bold dark-gray-font-color">Sunlight</h3>
              <p className="text-sm">Activates the panels</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="residential/solarworks-cells.png" alt="cells" />
            <div>
              <h3 className="font-bold dark-gray-font-color">The Cells</h3>
              <p className="text-sm">Produce electrical current</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="residential/solarworks-plug.png" alt="electrical energy" />
            <div>
              <h3 className="font-bold dark-gray-font-color">The electrical Energy</h3>
              <p className="text-sm">Is converted</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="residential/solarworks-converted.png" alt="converted" />
            <div>
              <h3 className="font-bold dark-gray-font-color">The converted</h3>
              <p className="text-sm">Electricity powers your home</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="residential/solarworks-ruler.png" alt="net meter" />
            <div>
              <h3 className="font-bold dark-gray-font-color">A net meter</h3>
              <p className="text-sm">Measure usage</p>
            </div>
          </div>
        </div>
        <div className="col-start-5 col-end-9">
          <img src="https://images.unsplash.com/photo-1542336391-ae2936d8efe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="how solar works" />
        </div>
      </section>

    </div>
  )
}

export default Residential