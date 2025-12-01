import '../styles/Pages.css'
import smogImage from '../assets/Smog_coming_out_of_factory.webp'
import waterImage from '../assets/polluted_water.webp'
import respiratoryImage from '../assets/respiratory-disease.webp'

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
              Combustion of fossil fuel causes air pollution that presents serious health risks to the people of Wisconsin by releasing harmful pollutants such as particulate matter, nitrogen oxides, and sulfur dioxide into the atmosphere. Among all types of air pollution, fine particulate matter, also known as PM2.5, is believed to be one of the most dangerous as this pollutant consists of tiny particles that are approximately 30 times smaller than a human hair, able to deeply penetrate the lungs and enter the bloodstream. These particles are formed mainly due to chemical reactions that take place when pollutants like sulfur dioxide and nitrogen oxides are emitted by power plants, manufacturing industries, and vehicles that burn fossil fuels. Wisconsin has a total of 30 ozone monitoring stations and 19 PM2.5-measuring stations to monitor air quality. According to new data, high levels of exposure to particulate matter shorten lives, increase the risk of cancer, heart attacks, respiratory problems, and strokes.
            </p>
            <p>
              Wisconsin has some alarming disparities in air pollution exposure among various communities. A comprehensive study that ranked the states for racial disparity in particulate matter exposure from industry, traffic, and commercial sources ranked Wisconsin third in the nation, with Black residents exposed to 67 percent more pollution from industrial sources than the state average and people of color exposed to 44 percent more pollution from industrial sources. The largest contributors to this disparity are transportation and industrial sources burning coal, natural gas, or wood; Milwaukee had the largest disparity in these four cities, but disparities still existed in Green Bay, Appleton, Wausau, and Sheboygan. Much sulfur dioxide emissions result from fossil fuel combustion at power plants-73 percent nationally-and other industrial facilities. Resulting health effects from this form of pollution include difficulty breathing and the exacerbation of pre-existing respiratory disease, particularly for children and the elderly. Gases from fossil fuel combustion combine with sunlight and heat to create ground-level ozone. Respiratory complications are common due to ground-level ozone, especially during the summer months in Wisconsin, when the weather conditions favor ozone formation.
            </p>
          </div>
          <img src={smogImage} alt="Smog coming out of factory" className="section-image" />
        </div>
        <div className="subsection">
          <div>
            <h3>Water Pollution</h3>
            <p>
              Water pollution from fossil fuel extraction, processing, and transportation threatens Wisconsin's valuable freshwater resources, including the Great Lakes that hold over 20% of the world's fresh surface water. Enbridge's Line 5 pipeline carries up to 23 million gallons of crude oil and gas every day from Wisconsin to Canada, crossing 400 rivers and streams and traveling near Lake Superior and under the Straits of Mackinac between Lake Michigan and Lake Huron. The 68-year-old pipeline has spilled over 1 million gallons of oil to date and continues to pose catastrophic risks to the Great Lakes, which supply drinking water to nearly 40 million people. The pipeline trespasses onto the reservation lands of the Bad River Band of Lake Superior Chippewa, on which federal courts have ordered operations stopped, yet the company continues pursuing alternative routes that maintain environmental threats rather than shutting down the aging infrastructure.
            </p>
            <p>
              Wisconsin's fossil fuel power plants use close to 4 billion gallons of water daily for cooling and operations. Water discharged from these plants is often warmer, with pollutants such as arsenic, lead, and mercury. Past industrialization in the Great Lakes region led to toxic contamination of steel mills, factories, coal plants, and petroleum facilities, causing the listing of 43 Areas of Concern that need extensive cleanup. The Fox River and Green Bay, Wisconsin, have been heavily contaminated with PCBs and other contaminants from paper mill and industrial wastes. Although there has been considerable cleanup progress through programs like the Great Lakes Legacy Act, which has removed 4.3 million cubic yards of contaminated sediment with $362 million in federal funding, Wisconsin, like other Great Lakes states, still suffers from water quality degradation due to fossil fuel infrastructure. Data from a survey conducted indicate that 73% of regional residents are concerned about fossil fuel extraction, while 69% are worried about water pollution-a testimony to the region's recognition of its valuable freshwater resources.
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
          <div>
            <h3>Respiratory Diseases</h3>
            <p>
              Emissions that are released by these plants are extremely harmful to public health. Many residents that live near these systems are at high risk for long term respiratory issues and even shorter life spans from particulate matter as well as exposure of the ozone layer. Many Wisconsinites unfortunately remain unaware of this serious harm and take little to no action. Communities near Milwaukee and Portage, where there are large power plants, have reported that asthma rates are skyrocketing as well as soil depletion. These results show that fossil fuels are not just an environmental issue, but a serious issue of human safety and well being.
            </p>
          </div>
          <img src={respiratoryImage} alt="Person with respiratory disease" className="section-image" />
        </div>
        <div className="subsection">
          <h3>Cardiovascular Disease</h3>
          <p>
            The combustion of fossil fuels contributes greatly to air pollution, which increases the risk of cardiovascular disease through several biological pathways. Fine particulate matter from the combustion of fossil fuels in coal plants, steel mills, vehicles, and other sources travels deep into the lungs, where it irritates receptors, stimulates autonomic nervous system responses, and promotes systemic inflammation that hastens atherosclerosis. This inflammation makes blood platelets stickier and more apt to form clots, and the pollution begins a process leading to hypertension, altered glucose metabolism, and arterial plaque instability. More than 20% of all cardiovascular disease deaths worldwide are caused by air pollution, according to estimates from the World Health Organization; this is more than 3.5 million people annually. Many more people die from cardiovascular causes brought on by exposure to PM2.5 than die from lung disease.
          </p>
          <p>
            Studies have shown that both short- and long-term exposure to fossil fuel air pollution increases cardiovascular risk. Short-term exposure to high levels of PM2.5 can trigger acute cardiovascular events such as heart attacks, arrhythmias, heart failure hospitalizations, and stroke within hours to weeks of exposure. Long-term exposure leads to increased risk of atherosclerosis development, incident hypertension, coronary artery disease, and cardiovascular mortality, with studies showing a 13% increase in acute coronary syndrome events with each 5 μg/m³ increase in annual PM2.5 exposure. A 2021 Harvard study estimated that in Wisconsin, an estimated 16.5% of deaths over the age of 14 years old is attributed to PM2.5 air pollution from the burning of fossil fuels. The Global Burden of Disease study estimated that pollution caused 9 million deaths around the world in 2019, with more than 60% of these cardiovascular-related. Air pollution from the combustion of fossil fuels is therefore one of the most important modifiable risk factors for the development of heart disease, and is preventable by policy changes and shifts in energy sources away from fossil fuels.
          </p>
        </div>
        <div className="subsection">
          <h3>Vulnerable Populations</h3>
          <p>
            Certain populations in Wisconsin are exposed to fossil fuel pollution and associated health impacts at higher rates than others, thereby presenting significant environmental justice issues that warrant focused attention. Children are especially susceptible to the effects of air pollution because their lungs and cardiovascular systems are still in development, making them particularly vulnerable to both short- and long-term health effects from PM2.5 and other air pollutants. The elderly are also at increased risk due to their higher prevalence of pre-existing cardiovascular and respiratory disease, which is exacerbated by air pollution, and reduced physiological resilience to environmental stressors. Individuals with chronic diseases, such as heart disease, diabetes, asthma, and lung disease, suffer from exacerbation of symptoms and increased vulnerability to acute events due to increased levels of air pollution from fossil fuel combustion. Wisconsin has particularly stark disparities in exposure to fossil fuel pollution based on race and income, with communities of color and low-income communities disproportionately bearing health burdens. Wisconsin ranks third in the nation for racial disparity in particulate matter exposure, with Black residents exposed to 67% more industrial pollution than the state average and people of color overall experiencing 44% higher pollution exposure from industrial fossil fuel sources.
          </p>
          <p>
            This disparity exists because low-income communities and communities of color are more likely to reside near major pollution sources such as highways, power plants, manufacturing facilities, and other industrial sites that burn fossil fuels-a pattern that is a result of decades of segregation and discriminatory housing policy. Indigenous communities-including the Bad River Band of Lake Superior Chippewa-also experience unique vulnerabilities because fossil fuel infrastructure, including the Line 5 pipeline, crosses treaty protected lands without consent, threatening their water resources, traditional practices, and food security without the power to stop these projects. Economically disadvantaged groups become more vulnerable because they often reside in poorly insulated housing and thus need more energy for heating and cooling; they also have less access to healthcare for pollution-related health problems and may be exposed to multiple environmental stressors all at once. Because of this, the reduction of fossil fuel pollution is particularly essential to environmental justice in Wisconsin.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Economic Concerns</h2>
        <p>
          The continued reliance on fossil fuels imposes significant economic costs on Wisconsin, and delaying the transition to renewable energy means missing out on substantial economic opportunities. Wisconsin spends approximately $44 billion annually importing fossil fuel energy from out-of-state companies, representing a massive outflow of resources that could instead be used to support local economies and create jobs. In the last 20 years, climate change-exacerbated extreme weather events have cost Wisconsin citizens approximately $100 billion in damages due to flooding, tornadoes, and droughts. Fossil fuel price volatility creates unpredictable energy costs for households and businesses, with natural gas customers seeing price increases of 24% in just six months and 34% over a three-year period. These fluctuating costs make it hard for families to budget and hurt the economic competitiveness of Wisconsin businesses.
        </p>
        <p>
          Transitioning to renewable energy has significant economic benefits that Wisconsin risks missing by maintaining dependence on fossil fuels. Solar and wind energies are currently more affordable than fossil fuels, and local renewable energy production keeps money circulating in Wisconsin communities rather than flowing to out-of-state energy suppliers. The clean energy sector creates high-quality jobs in installation, manufacturing, and maintenance that cannot be outsourced. Federal and state incentives, including billions in clean energy investments through the Inflation Reduction Act, position Wisconsin to capture economic growth in emerging industries. Further delay in transitioning will mean continuing to invest in infrastructure for a fossil fuel system that will become stranded, higher long-term energy costs, increased vulnerability to supply chain disruptions, and failure to capture the economic benefits of being an early mover in the growing renewable energy economy of the 21st century.
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
