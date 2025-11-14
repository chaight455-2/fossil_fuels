import '../styles/Pages.css'
import busImage from '../assets/cityscape_with_bikers_and_buses.webp'
import veggiesImage from '../assets/Vegetables_on_plates.webp'

function HowToHelp() {
  return (
    <div className="page">
      <section className="hero">
        <h1>How to Help</h1>
        <p className="subtitle">Actions you can take to reduce fossil fuel use and environmental impact</p>
      </section>

      <section className="content-section">
        <h2>Transportation</h2>

        <div className="subsection">
          <div>
            <h3>Use Public Transportation</h3>
            <p>
            Taking a bus or train is one of the most straightforward ways for people to reduce their personal 
            fossil fuel consumption in everyday life. Rather than each person driving a car, case where one 
            vehicle can take dozens of people, so emissions and air pollution per passenger is cut by a large amount. 
            Wisconsin has public transportation systems that provide service to cities, suburbs, college campuses, 
            and rural areas, including local bus systems, shared-ride taxis, and intercity bus routes that connect 
            towns across the whole state.
          </p>
          <ul className="action-list">
            <li>
              Visit your local transit agency&apos;s website (for example, Metro Transit in Madison or
              Milwaukee County Transit System) to plan a route to school, work, or errands.
            </li>
            <li>
              Use Wisconsin&apos;s statewide public transit map and &quot;Get-Around Guide&quot; to find
              bus and intercity routes near your community.
            </li>
            <li>
              Try replacing one regular car trip each week with a bus ride and see how it fits into your
              routine.
            </li>
          </ul>
          </div>
          <img src={busImage} alt="Cityscape with bikers and buses" className="section-image" />
        </div>

        <div className="subsection">
          <h3>Carpool or Vanpool</h3>
          <p>
            When ride-sharing occurs, each person&apos;s share of fuel burned (and emissions produced) is 
            made smaller. Carpooling and vanpooling are especially beneficial for longer commutes when it 
            is not realistic to bike or walk. Wisconsin supports ride-sharing with state and local ride-sharing 
            programs that help with matching rides, coordinating schedules, and in some cases even provide a 
            convenient place to meet.
          </p>
          <ul className="action-list">
            <li>
              Use Wisconsin&apos;s RIDESHARE program to find or start a carpool or vanpool with people
              who live and work near you.
            </li>
            <li>
              Meet at a nearby park-and-ride lot so drivers can leave extra cars in a safe, free parking
              area and share one vehicle for the rest of the trip.
            </li>
            <li>
              Ask your school, employer, or community group to promote carpooling through bulletin boards,
              email lists, or commuter challenges.
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Walk or Bike</h3>
          <p>
            For shorter trips, it is often just as fast to walk or bike as it is to drive when considering 
            parking and traffic. These activities use zero fossil fuel, produce zero tailpipe emissions, 
            and provide major health benefits (e.g. more physical activity and less stress). Communities in 
            Wisconsin are spending money and time on sidewalks, bike lanes, and multi-use trails so that it 
            is safer and easier to get around without using cars.
          </p>
          <ul className="action-list">
            <li>
              Choose one or two regular trips—like going to a friend&apos;s house, a nearby store, or
              campus—that you commit to walking or biking instead of driving.
            </li>
            <li>
              Explore local trail maps and bike routes to find comfortable paths away from heavy traffic.
            </li>
            <li>
              Advocate for better sidewalks, crosswalks, and bike lanes by contacting local officials or
              supporting organizations that work on walking and biking infrastructure.
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Switch to Electric or Hybrid Vehicles</h3>
          <p>
            Compared to conventional gasoline vehicles, electric and hybrid vehicles utilize energy more 
            effectively and can substantially reduce fossil fuel usage and tailpipe emissions. Hybrid vehicles 
            utilize a gasoline engine in combination with an electric motor to decrease fuel usage, while plug-in 
            hybrids and fully electric vehicles (EVs) can travel many miles on electric power alone. The benefits 
            of transitioning from internal combustion engines to fully electric vehicles will increase as the 
            electricity grid added more renewable energy.
          </p>
        </div>
        <ul className="action-list">
            <li>
              Learn about different EV and hybrid models, including their driving range, charging needs,
              and total cost of ownership compared to a conventional car.
            </li>
            <li>
              Check for federal tax credits and Wisconsin-specific incentives, such as rebates from local
              utilities or special electricity rates for charging at night.
            </li>
            <li>
              Use charging station maps to find public chargers at workplaces, shopping centers, and along
              major highways so you can plan longer trips with confidence.
            </li>
          </ul>
      </section>

      <section className="content-section">
        <h2>Home Energy</h2>
        <div className="subsection">
          <h3>Improve Home Insulation</h3>
          <p>
            [PLACEHOLDER TEXT: Tips for improving insulation, sealing air leaks, and reducing heating/cooling needs. Information about energy audit services available in Wisconsin.]
          </p>
        </div>
        <div className="subsection">
          <h3>Switch to Renewable Energy</h3>
          <p>
            [PLACEHOLDER TEXT: Information about renewable energy options in Wisconsin including solar panels, wind power programs, and how to switch to renewable energy providers.]
          </p>
        </div>
        <div className="subsection">
          <h3>Energy-Efficient Appliances</h3>
          <p>
            [PLACEHOLDER TEXT: Guidance on selecting ENERGY STAR certified appliances and how to calculate long-term savings from using efficient appliances.]
          </p>
        </div>
        <div className="subsection">
          <h3>Upgrade Heating Systems</h3>
          <p>
            [PLACEHOLDER TEXT: Information about high-efficiency furnaces, heat pumps, and other modern heating systems that use less fossil fuel.]
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Consumption & Lifestyle</h2>
        <div className="subsection">
          <h3>Buy Local Products</h3>
          <p>
            [PLACEHOLDER TEXT: Explanation of how local purchases reduce transportation emissions and support Wisconsin communities and economy.]
          </p>
        </div>
        <div className="subsection">
          <h3>Reduce, Reuse, Recycle</h3>
          <p>
            [PLACEHOLDER TEXT: Information about how reducing consumption, reusing items, and recycling helps reduce the fossil fuels needed for production and waste management.]
          </p>
        </div>
        <div className="subsection">
          <div>
            <h3>Eat Less Meat</h3>
            <p>
              [PLACEHOLDER TEXT: Explanation of how meat production uses significant fossil fuels and how reducing meat consumption helps the environment.]
            </p>
          </div>
          <img src={veggiesImage} alt="Vegetables on plates" className="section-image" />
        </div>
        <div className="subsection">
          <h3>Support Sustainable Businesses</h3>
          <p>
            [PLACEHOLDER TEXT: Guidance on identifying and supporting businesses with strong environmental practices in Wisconsin.]
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Community Involvement</h2>
        <div className="subsection">
          <h3>Advocate for Policy Change</h3>
          <p>
            [PLACEHOLDER TEXT: Information about contacting elected officials, supporting clean energy policies, and participating in advocacy for renewable energy in Wisconsin.]
          </p>
        </div>
        <div className="subsection">
          <h3>Support Environmental Organizations</h3>
          <p>
            [PLACEHOLDER TEXT: List of Wisconsin-based environmental organizations working on fossil fuel reduction and how to get involved or donate.]
          </p>
        </div>
        <div className="subsection">
          <h3>Educate Others</h3>
          <p>
            [PLACEHOLDER TEXT: Ways to share information with friends and family about fossil fuels and encourage them to take action.]
          </p>
        </div>
        <div className="subsection">
          <h3>Participate in Community Events</h3>
          <p>
            [PLACEHOLDER TEXT: Information about climate action events, Earth Day activities, and other community initiatives in Wisconsin focused on sustainability.]
          </p>
        </div>
      </section>
    </div>
  )
}

export default HowToHelp
