import '../styles/Pages.css'
import oilImage from '../assets/hands_cupped_with_oil_in_them.webp'

function WhatAreFossilFuels() {
  return (
    <div className="page">
      <section className="hero">
        <h1>What Are Fossil Fuels?</h1>
        <p className="subtitle">Understanding the energy sources powering our world</p>
      </section>

      <section className="content-section">
        <h2>Definition</h2>
        <p>
          Fossil fuels are energy-rich substances such as coal, oil (also called petroleum), and natural
          gas that formed from the remains of ancient plants, algae, and tiny animals. When these organisms
          died, they were buried under layers of sediment. Over millions of years, heat and pressure inside
          Earth&apos;s crust transformed this buried organic matter into concentrated carbon-based fuels.
          Because this process takes so long, fossil fuels are considered <strong>non-renewable</strong>:
          once a deposit is used up, it cannot be replaced on any human time scale.
        </p>
        <p>
          When we burn fossil fuels, we release the stored chemical energy as heat. That heat is used to
          generate electricity in power plants, warm our homes, and move vehicles like cars, trucks,
          buses, airplanes, and ships. Globally and in Wisconsin, fossil fuels still supply most of our
          energy, even as wind, solar, and other renewables grow. However, burning these fuels releases
          carbon dioxide, methane, and other greenhouse gases that drive climate change, along with air
          pollutants that can harm human health—especially for people living near power plants, highways,
          and industrial facilities.
        </p>
      </section>

      <section className="content-section">
        <h2>Types of Fossil Fuels</h2>

        <div className="subsection">
          <h3>Coal</h3>
          <p>
            Coal is a black or brownish rock made mostly of carbon. It formed in ancient swampy
            environments where thick layers of plants piled up, were buried, and slowly transformed under
            heat and pressure. Coal is easy to store and transport and has historically been one of the
            main fuels for generating electricity in the United States. Most coal is mined either at the
            surface (by removing soil and rock to expose coal seams) or underground (by cutting tunnels
            deep into the earth), then shipped by train or barge to power plants. 
          </p>
          <p>
            Wisconsin does not mine its own coal; instead, utilities import coal from western and
            Appalachian states to feed large power stations. For many years coal provided the largest share
            of Wisconsin&apos;s electricity, and it still generates roughly one-third of in-state power
            today. When coal is burned, it emits large amounts of carbon dioxide, sulfur dioxide,
            nitrogen oxides, and tiny particles called particulate matter. These pollutants contribute to
            climate change, smog, acid rain, and respiratory problems such as asthma, especially for
            communities living near coal plants.
          </p>
        </div>

        <div className="subsection">
          <h3>Natural Gas</h3>
          <p>
            Natural gas is a mixture of gases, mostly methane, that forms when buried organic material is
            subjected to higher temperatures and pressures than those that form coal. Companies drill wells
            into deep rock layers and often use a technique called hydraulic fracturing (&quot;fracking&quot;)
            to release gas trapped in shale and other formations. After impurities like water and sulfur
            compounds are removed, the gas is moved through long-distance pipelines and used in power
            plants, home heating and cooking, and industrial processes.
          </p>
          <p>
            In Wisconsin, natural gas has grown rapidly as a source of electricity. In 2024 it fueled about
            40% of the state&apos;s total in-state generation, surpassing coal&apos;s share for the first
            time. Supporters sometimes describe natural gas as a &quot;bridge fuel&quot; because gas plants
            can ramp up and down quickly and emit less carbon dioxide than coal per unit of electricity.
            However, burning natural gas still releases significant greenhouse gases, and methane leaks
            along pipelines and at well sites are especially powerful at trapping heat in the atmosphere.
            Gas plants also emit nitrogen oxides and other air pollutants that can worsen heart and lung
            disease for people living nearby.
          </p>
        </div>

        <div className="subsection">
          <div>
            <h3>Oil/Petroleum</h3>
            <p>
              Oil, or petroleum, is a thick liquid fossil fuel that formed mainly from microscopic marine
              organisms that settled on ancient seafloors. Over millions of years, heat and pressure turned
              this organic-rich mud into oil and natural gas trapped in porous rock layers. Modern companies
              locate these deposits using geological surveys and then drill wells on land or offshore to
              reach them. In many regions, hydraulic fracturing is used to increase how much oil and gas can
              flow from each well.
            </p>
          </div>
          <img src={oilImage} alt="Hands cupped with oil" className="section-image" />
        </div>
        <p>
              Crude oil is transported by pipelines, ships, rail, and trucks to refineries. There it is
              heated and separated into different products in large distillation towers. These products
              include gasoline, diesel, jet fuel, heating oil, and petrochemical feedstocks that are used to
              make plastics, fertilizers, and many everyday products. Wisconsin does not produce much oil
              itself, but our daily life depends on petroleum: most cars and trucks on Wisconsin roads still
              run on gasoline or diesel, farm equipment relies on diesel, and airplanes use jet fuel. The
              combustion of these fuels is a major source of climate-warming emissions and local air pollution.
          </p>
      </section>

      <section className="content-section">
        <h2>Current Usage in Wisconsin</h2>
        <p>
          Wisconsin is an averagely sized state with an averagely sized population, meaning there is a high
          demand for energy. According to the U.S. Energy Information Administration, Wisconsin&apos;s
          energy is generated primarily by 7 coal-fired plants and 3 methane-gas fired plants. Wisconsin is
          currently home to 2 of the top 100 dirtiest power plants in the U.S. These outdated plants have
          been used to generate Wisconsin&apos;s energy for around 45 years now. When these fossil fuels
          are burned, they release harmful chemicals like carbon dioxide, methane, and nitrous dioxide into
          the atmosphere.
        </p>
      </section>

      <section className="content-section">
        <h2>How Fossil Fuels Are Extracted and Processed</h2>
        <p>
          Although fossil fuels all start as buried organic material, the modern extraction and processing
          methods look different for coal, oil, and natural gas. Coal is usually obtained either by surface
          mining—removing the top layers of soil and rock to expose coal seams—or by underground mining,
          where tunnels are cut deep into the earth. Once mined, coal is crushed, sometimes washed to remove
          impurities, and loaded onto trains, trucks, or barges that deliver it to power plants and factories.
        </p>
        <p>
          Oil and natural gas extraction typically starts with preparing a well site and drilling a vertical
          well down to the target rock layer. In many areas the well is then steered horizontally to follow
          the rock formation. Steel pipes and cement are used to seal the well and protect groundwater.
          In modern operations, companies often use hydraulic fracturing: pumping water, sand, and small
          amounts of chemicals at high pressure to create tiny cracks in the rock so oil and gas can flow
          more easily into the well.
        </p>
        <p>
          After extraction, crude oil is sent to refineries where it is heated and separated into different
          products such as gasoline, diesel, and jet fuel, then further treated so it can be safely used in
          engines and heaters. Natural gas is processed in gas plants to remove water, sulfur, and other
          gases, producing a methane-rich fuel that can be safely transported in pipelines. While very
          little fossil fuel extraction happens inside Wisconsin itself, the state is tightly connected to
          this system: we rely on interstate pipelines, rail lines, and storage terminals to bring in coal,
          oil, and gas from other regions, and we host large power plants that burn these fuels to generate
          electricity for Wisconsin homes, schools, and businesses.
        </p>
      </section>
    </div>
  )
}

export default WhatAreFossilFuels
