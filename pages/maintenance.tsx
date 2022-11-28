import { CallToAction } from "../components/CallToAction"
import { HeroServices } from "../components/HeroServices"
import { VideoSection } from "../components/VideoSection"

const Maintenance = () => {
  return (
    <div>
        <HeroServices
            imageUrl="https://images.unsplash.com/photo-1615630859219-0459703c34e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            heading="Solar Maintenance"
            headingColor="Services"
            message="These systems can last for decades and provide your home with an abundant source of energy, but panels can lose efficiency due to a vast array of causes: dust accumulation, bird droppings, squirrels chewing through cables, and more. 
            Install and let them work for you for years capturing UV rays of clean energy, but if you ever notice a loss in output - or if you just want to confirm that everything is in peak working condition - give us a call and we'll figure it out for you.
            "
            />
        
        {/* Maintenance Services */}

        <section className="grid grid-cols-8 primary-font-color relative">
            <div className='absolute -top-28 col-start-2 col-end-8 w-full'>
            <CallToAction
                header="We can help you calculate"
                headerColor="financing!"
                button={true}/>
            </div>
            <div className="col-start-1 col-end-5 flex flex-col justify-center p-24 space-y-6">
            <div className="text-3xl font-bold flex">
                <h2>Maintenance <span className="secondary-font-color">Services</span></h2>
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
            <img className="h-screen" src="https://images.unsplash.com/photo-1542336391-ae2936d8efe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="how solar works" />
            </div>
        </section>

        <section className='grid grid-cols-8 py-20 my-20'>
            <div className='col-start-2 col-end-8'>
            <VideoSection />
            </div>
        </section>
    </div>
  )
}

export default Maintenance