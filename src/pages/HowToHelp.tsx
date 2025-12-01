import '../styles/Pages.css'
import busImage from '../assets/cityscape_with_bikers_and_buses.webp'
import veggiesImage from '../assets/Vegetables_on_plates.webp'
import energySavingImage from '../assets/energy-saving-for-a-household.webp'
import advocacyImage from '../assets/environmental-advocacy.webp'

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
          <div>
            <h3>Improve Home Insulation</h3>
            <p>
              Homeowners in Wisconsin can greatly reduce the amount of fossil fuels used in their homes through insulation and by sealing air leaks. Many houses have multiple tiny openings around the attic, basement, windows and doors which can total to about the same size as an open window. The warm air that escapes through these little openings during winter months results in having to run your furnace longer and burn additional fossil fuel; whereas, during summer months the cold air that escapes results in having to run your air conditioning unit longer and using additional fossil fuels.
            </p>
            <p>
              Weatherstripping around your doorways, caulking around your windows, and sealing up holes and cracks around any plumbing/wiring are examples of small projects that can result in significant energy savings. In addition to sealing and weatherstripping your house, upgrading to better insulation in the attic or basement will also reduce the amount of energy needed to heat and cool your house. The state of Wisconsin has a home energy assessment program through Focus on Energy and through local utility companies, which provides rebates for professional installation and air sealing, as well as cash for doing it yourself (DIY). These programs enable these households to pay back their upfront costs while also reducing the amount of energy consumed through coal- and gas-fired power plant production, which our white paper identifies as two of the largest sources of greenhouse gas emissions and air pollutants in Wisconsin.
            </p>
          </div>
          <img src={energySavingImage} alt="Energy-saving improvements for a household" className="section-image" />
        </div>
        <div className="subsection">
          <h3>Switch to Renewable Energy</h3>
          <p>
            Switching your household electricity to renewable sources directly reduces the need to burn coal and natural gas at Wisconsin power plants. Many utilities in the state offer voluntary green power or renewable energy programs. When you enroll, the utility increases the share of wind and solar power on the grid to match some or all of your home's electricity use, typically for a small extra charge each month.
          </p>
          <p>
            Homeowners who can install rooftop solar have another option. Focus on Energy and some Wisconsin utilities offer incentives that help offset the upfront cost of solar panels. Over time, solar can lower monthly bills, protect households from future fossil fuel price spikes, and cut carbon emissions. Community solar projects, where neighbors subscribe to a shared array, can offer similar benefits for renters or people whose roofs are not a good fit for panels.
          </p>
        </div>
        <div className="subsection">
          <h3>Energy-Efficient Appliances</h3>
          <p>
            There is not a single household appliance that does not directly create Green House Gas Emissions (GHG) from burning fossil fuels or that does not use electricity that has typically been generated by burning either coal or natural gas. If you purchase a model that is Energy-Efficient, then you will reduce the amount of fuel that you will need to generate Energy to do the activities you typically perform on an Everyday Basis.
          </p>
          <p>
            ENERGY STAR Certified refrigerators, dishwashers, washing machines, clothes dryers, and other appliances have been Independently Tested and Found to have significantly less Energy Consumption than Standard Appliance Models, and have the Same or Better Performance Producing Moderately More Energy Efficient than their Competition. When shopping for an appliance look for the Blue ENERGY STAR Label and check the Yellow EnergyGuide Tag. If you Purchase an Energy-Efficient Model, you may qualify for Rebates or Bill Credits to offset the Purchase Price of the Appliance and Its Recycling, from Focus on Energy or Your Local Utility. As you can see, Energy Efficient Models provide Savings on Energy Bills due to the Reduction in Energy Consumption, and Lower Aeration Reports as reported by Electric Utilities.
          </p>
        </div>
        <div className="subsection">
          <h3>Upgrade Heating Systems</h3>
          <p>
            In Wisconsin, the heating requirements of residential buildings are the highest percentage of household energy consumption because of the long, cold winters. By installing a high-efficiency furnace or boiler, a homeowner can reduce their reliance on gas, propane, or fuel oil to heat their home. Programmable smart thermostats enable the homeowner to reduce the fossil fuel they use by lowering the thermostat settings during sleep or when no one is at home.
          </p>
          <p>
            Electric air source heat pumps represent another viable way to heat and cool a home efficiently. Cold climate heat pumps are now available for use during colder months and provide superior heating and cooling efficiency than older technology. Homeowners may receive a federal tax credit for some portion of the cost of installing an efficient heat pump, as well as a rebate program offered by local utility providers and Focus on Energy, which will reduce the overall cost of installing a high-efficiency heat pump, insulation, and air sealing. Households that take advantage of these financial incentives will enjoy a reduction in their monthly heating costs and have a significant reduction of fossil fuel associated with the heating of their homes.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Consumption & Lifestyle</h2>
        <div className="subsection">
          <h3>Buy Local Products</h3>
          <p>
            Purchasing local products (especially food and everyday items) reduces the amount of fossil fuels that will be needed to get those items to you over long distances, which are generally via Truck (and to a lesser extent) by air or cargo ship. When you make a selection of produce, products from local businesses, and/or products that are sold locally (such as at Farmers' Markets or Co-ops), generally speaking, these products come with fewer transportation related emissions and tend to be fresher.
          </p>
          <p>
            By purchasing locally you also support the many communities across Wisconsin who are already seeing the effects of climate change through increased flooding and changing climate conditions causing their growing seasons to shift. Such actions would be joining a Community Supported Agriculture (CSA) program, shopping at local hardware stores, repair shops instead of the internet for everything, and selecting Wisconsin-grown produce during their growing season (if at all possible). This allows for increasing revenue for the community while concurrently reducing the amount of greenhouse gases released from the transportation of these products.
          </p>
        </div>
        <div className="subsection">
          <h3>Reduce, Reuse, Recycle</h3>
          <p>
            By limiting what we purchase, reusing our possessions, and recycling correctly, we can decrease our dependence on the fossil fuels required to create, transport, and dispose of products. Wisconsin's strong recycling laws mandate that all communities provide recycling opportunity programs and prohibit many types of recyclables from being placed into landfills and incinerators. By maintaining the circulation of paper products, metals, glass, and certain plastic products, manufacturers can use recycled material rather than requiring the use of brand-new energy-intensive raw materials.
          </p>
          <p>
            To start curbing your fossil fuel footprint in Wisconsin, consider eliminating the purchase of single-use items, using reusable shopping bags, drinking from a reusable water bottle, using reusable containers, donating or repairing items, rather than throwing them away. For recyclable items, follow your city or county's recycling guidelines to determine what can be placed inside of curbside recycling bins. Recyclables need to be clean, dry, and loose (do not keep recyclable items in a plastic bag; remove the contents of the bag and place the bag into the trash, which would otherwise jam sorting equipment). By adopting these practices collectively, we reduce waste, decrease the demand for Energy Intense Production, and minimize the fossil fuel footprint for Wisconsin Daily Life.
          </p>
        </div>
        <div className="subsection">
          <div>
            <h3>Eat Less Meat</h3>
            <p>
              Most of the food that we consume comes from plants and vegetables however there are many meats which will produce a much greater amount of CO2 greenhouse gases and contribute to our climate change than would be produced by eating a meal that is primarily composed of fruits and vegetables. It takes a lot of land, fertilizer and feed (to take care of the animal), a lot of electricity (for barn heating, processing the meat into steaks, cooking in a restaurant, etc.), storage of meat in coolers, and shipping the animal to market before it can be eaten. It is these multiple processes that produce large amounts of greenhouse gases including CO2 produced from the use of electricity as well as methane from the animal's digesting of food (the methane produced from animal waste). By reducing the amount of animal-based products consumed, even in small amounts (like only a couple of days) you will decrease the need for fossil-fuel-intensive foods. In Wisconsin, having dairy and livestock as major contributors to their economy does not mean that you have to stop supporting local farms, instead you can simply reduce the quantity of meat that you eat and focus on buying meat from pasture-based farms that practice conservation, and fill up more of your plate with Wisconsin-grown vegetables and grains.
            </p>
          </div>
          <img src={veggiesImage} alt="Vegetables on plates" className="section-image" />
        </div>
        <div className="subsection">
          <h3>Support Sustainable Businesses</h3>
          <p>
            Daily, the energy consumption, transportation, packaging and supply chain decisions made by businesses may either increase or decrease their fossil fuel consumption. Customers' association of climate and environmental agnosticism with their favourite brands is demonstrated by their purchase of goods or services from established companies that have shown their commitment to sustainability by, among other things, taking part in the certification programmes administered by credible third parties. One of the most prestigious statewide certification programmes in Wisconsin is the Green Masters programme, which is administered through the Wisconsin Sustainable Business Council and allows for businesses to be able to assess and enhance their performance in areas of energy consumption, greenhouse gas emissions, waste and transportation. Certified Green Masters have been recognised for successfully integrating sustainable practices into their operations and corporate leadership. All residents of Wisconsin can search for businesses who participate in the Green Masters programme, publish sustainability reports, utilise renewables such as wind or solar generated electricity, and/or emphasise local and low-carbon supply chains when making their selections for where to shop, as well as the choice of service providers. By choosing to support businesses that take these actions, we are supporting the reduction of fossil fuel consumption by giving them the market-based reward they deserve.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Community Involvement</h2>
        <div className="subsection">
          <div>
            <h3>Advocate for Policy Change</h3>
            <p>
              While individual action has a role to play, long-term reductions in fossil fuel use will depend on strong government policies, support through public investment, and the ability for state and local entities to leverage these investments. The state of Wisconsin has adopted a state Clean Energy Plan which outlines how the state will achieve carbon-free electricity, while also ensuring that more of Wisconsin's energy dollars remain in-state as opposed to paying to import fossil fuels (and therefore reducing its vulnerability and reliance on foreign sources of energy).
            </p>
            <p>
              Wisconsin residents can help influence the development of these policies through contact with their local (city/county/state/federal) representatives, attending public meetings related to energy and climate planning, and submitting public comments related to their energy and climate plan to the respective agencies. A resident can ask their representatives to support legislation that supports or incentivises the continued growth of renewable energy development; supports energy efficiency programming; and creates opportunities for improved or expanded use and access to public transportation; and protects the most vulnerable populations from the immediate and long-term impacts of pollution.
            </p>
            <p>
              Several examples of local governments leading in their clean energy efforts include counties setting ambitious clean energy goals; counties investing in solar energy projects; and counties investing in municipal transportation systems supported by renewable sources of energy. These examples demonstrate how to leverage public resources through public leadership, and they illustrate how the community can accelerate the transition away from fossil fuels through their engagement and support.
            </p>
          </div>
          <img src={advocacyImage} alt="Environmental advocacy and community action" className="section-image" />
        </div>
        <div className="subsection">
          <h3>Support Environmental Organizations</h3>
          <p>
            Environmental organizations based in Wisconsin advocate directly with their communities to reduce reliance on fossil fuels and prevent pollution. For example, Clean Wisconsin is a leader in using science-based advocacy to reduce carbon emissions, enhance protections for air and water resources, and support the development of clean energy projects throughout the state. 350 Wisconsin is a grassroots organization that encourages individuals to get involved in campaigns to halt the construction of new fossil fuel infrastructure, and to accelerate the development of renewable energy sources.
          </p>
          <p>
            Wisconsin Conservation Voters seek to cultivate leaders that support and develop clean energy policies on the state and local levels, and the Wisconsin Chapter of the Sierra Club is actively involved in campaigning to phase out coal plants and expand service to clean energy sources. Additionally, national organizations that have chapters or members in Wisconsin, such as Citizens' Climate Lobby, provide training for volunteers to advocate for national climate policies. Citizens can participate by subscribing to newsletters, attending events, volunteering their time, or making financial contributions to these organizations, which will assist them in their continued efforts to reduce the use of fossil fuels.
          </p>
        </div>
        <div className="subsection">
          <h3>Educate Others</h3>
          <p>
            Connecting with people in your life, including friends, family, classmates and coworkers as well as people in your community, will help you amplify your impact on climate change. While many people in Wisconsin have general knowledge about climate change, few understand how much of the economy, energy bill, health and local environments are dependent upon fossil fuels.
          </p>
          <p>
            By sharing accurate, non-judgmental information (for example, the key findings of this white paper), examples of clean energy projects that have been successfully implemented locally or stories that illustrate how pollution has impacted specific communities, you help individuals comprehend and equate the problem of climate change locally rather than simply as an abstract global issue. You could also create opportunities to have these discussions in student groups or share resources on social media from Wisconsin-based organizations, ask a speaker to present at a class or club, or simply bring these issues up in daily conversations. When individuals see that their peers are concerned about fossil fuels, and care about the future of Wisconsin, then they are more inclined to change their habits and support larger solutions to the fossil fuel problem.
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
