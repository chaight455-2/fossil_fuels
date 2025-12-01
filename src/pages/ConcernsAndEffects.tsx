import '../styles/Pages.css'
import smogImage from '../assets/Smog_coming_out_of_factory.webp'
import waterImage from '../assets/polluted_water.webp'

function ConcernsAndEffects() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Concerns & Effects</h1>
        <p className="subtitle">Understanding the environmental and health impacts</p>
      </section>

      <section className="content-section">
        <h2>Environmental Impacts</h2>
        <div className="subsection">
          <h3>Climate Change</h3>
          <p>
            Fossil fuel emissions overall are one of the largest contributors to climate change. There is a large portion of Wisconsin's energy that relies very heavily on coal and natural gas. These two sources release CO2, methane and other greenhouse gases into the atmosphere. This increases the overall temperature of the climate system.
          </p>
        </div>
        <div className="subsection">
          <div>
            <h3>Air Quality</h3>
            <p>
              When fossil fuels are burned, they release pollutants into the air including particulate matter (PM2.5), nitrogen oxides (NOx), and sulfur dioxide (SO2). These pollutants contribute to smog formation, reduce visibility, and cause serious health problems. In Wisconsin, communities located near coal-fired power plants and highways with heavy truck traffic experience higher levels of air pollution, which can trigger asthma attacks, worsen respiratory conditions, and increase the risk of cardiovascular disease.
            </p>
          </div>
          <img src={smogImage} alt="Smog coming out of factory" className="section-image" />
        </div>
        <div className="subsection">
          <div>
            <h3>Water Pollution</h3>
            <p>
              Fossil fuel extraction, processing, and combustion can contaminate water supplies through various pathways. Coal ash from power plants contains toxic heavy metals that can leach into groundwater if not properly stored. Oil and gas extraction, including hydraulic fracturing, can contaminate drinking water sources with chemicals and methane. In Wisconsin, spills, runoff, and improper disposal of fossil fuel waste threaten the state's lakes, rivers, and groundwater systems that communities depend on for drinking water and recreation.
            </p>
          </div>
          <img src={waterImage} alt="Polluted water" className="section-image" />
        </div>
        <div className="subsection">
          <h3>Biodiversity Loss</h3>
          <p>
            Fossil fuels are a very critical and important issue that impacts the environment as well as many communities across the state of Wisconsin. Although burning coal and other natural gases have previously been seen as the more economically effective option, scientists have thoroughly proven that these methods come with very serious consequences. The old systems of burning coal to produce gas pollutes the atmosphere, land and water. Therefore heavily disrupting ecosystems all while contributing to larger impacts such as flooding, unpredictable weather, and the loss of biodiversity.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Health Impacts</h2>
        <div className="subsection">
          <h3>Respiratory Diseases</h3>
          <p>
            Emissions that are released by these plants are extremely harmful to public health. Many residents that live near these systems are at high risk for long term respiratory issues and even shorter life spans from particulate matter as well as exposure of the ozone layer. Many Wisconsinites unfortunately remain unaware of this serious harm and take little to no action. Communities near Milwaukee and Portage, where there are large power plants, have reported that asthma rates are skyrocketing as well as soil depletion. These results show that fossil fuels are not just an environmental issue, but a serious issue of human safety and well being.
          </p>
        </div>
        <div className="subsection">
          <h3>Cardiovascular Disease</h3>
          <p>
            Air pollution from burning fossil fuels doesn't just harm the lungs—it also damages the heart and blood vessels. Fine particulate matter (PM2.5) can enter the bloodstream and contribute to heart attacks, strokes, and other cardiovascular problems. Studies have shown that people living near coal plants and highways with heavy diesel truck traffic face elevated risks of heart disease. In Wisconsin, where many communities are located near aging power plants and major trucking routes, reducing fossil fuel emissions is essential to protecting cardiovascular health and reducing premature deaths.
          </p>
        </div>
        <div className="subsection">
          <h3>Vulnerable Populations</h3>
          <p>
            Fossil fuel pollution does not affect all communities equally. Children, the elderly, people with pre-existing health conditions, low-income communities, and communities of color often bear a disproportionate burden of pollution and its health impacts. In Wisconsin, neighborhoods near industrial facilities and major transportation corridors—where air quality is poorest—are more likely to have higher rates of asthma, respiratory illness, and other pollution-related diseases. Addressing these environmental justice concerns requires targeted action to reduce emissions in the most affected areas and ensure that all Wisconsin residents have access to clean air and water.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Economic Concerns</h2>
        <p>
          While fossil fuels have historically provided affordable energy, the true costs extend far beyond monthly utility bills. Healthcare expenses from pollution-related illnesses, lost productivity due to sick days, and damage from extreme weather events driven by climate change all represent significant economic burdens. Wisconsin communities also face mounting costs to repair aging fossil fuel infrastructure and clean up contaminated sites. Meanwhile, renewable energy prices have dropped dramatically, making clean energy increasingly cost-competitive. By investing in energy efficiency and renewable sources, Wisconsin can create local jobs, keep energy dollars in-state rather than sending them to out-of-state coal and gas suppliers, and avoid the long-term economic risks of continued fossil fuel dependence.
        </p>
      </section>

      <section className="content-section">
        <h2>Wisconsin-Specific Impacts</h2>
        <p>
          Many people in Wisconsin are working hard toward community based solutions. There are several groups such as: Clean Wisconsin, the Department of Natural Resources, and even local coalitions that have collaborated with local residents to create clean and safe solutions. For example, Clean Wisconsin has a "Beyond Coal" organization. These individuals advocate for renewable energy and strict emission laws. In addition, the Department of Natural resources is working closely with rural areas to install solar panels to decrease the use of fossil fuels. These organizations show that a strong action within the community can reduce fossil fuels and encourage alternative energy one step at a time.
        </p>
      </section>
    </div>
  )
}

export default ConcernsAndEffects
