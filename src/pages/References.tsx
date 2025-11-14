import '../styles/Pages.css'

function References() {
  return (
    <div className="page">
      <section className="hero">
        <h1>References</h1>
        <p className="subtitle">Sources for the information presented on this website</p>
      </section>

      <section className="content-section">
        <h2>Our Commitment to Credibility</h2>
        <p>
          This website draws information from reputable scientific, governmental, and organizational sources
          to ensure accuracy and credibility. All claims about fossil fuels, their effects on the environment
          and human health, and recommended actions are based on peer-reviewed research and established
          sources. By providing these references, we empower members of the public to verify our information
          and explore these topics further.
        </p>
      </section>

      <section className="content-section">
        <h2>Government &amp; Scientific Organizations</h2>
        <div className="reference-list">
          <div className="reference-item">
            <h4>U.S. Energy Information Administration – Wisconsin State Energy Profile</h4>
            <p>U.S. Energy Information Administration. Retrieved from https://www.eia.gov/state/analysis.php?sid=WI</p>
          </div>
          <div className="reference-item">
            <h4>U.S. Department of Energy – Fossil Energy Basics</h4>
            <p>Office of Fossil Energy and Carbon Management. Retrieved from https://www.energy.gov/fossil</p>
          </div>
          <div className="reference-item">
            <h4>Smithsonian Ocean – What Are Fossil Fuels?</h4>
            <p>Smithsonian Institution Ocean Portal. Retrieved from https://ocean.si.edu/conservation/gulf-oil-spill/what-are-fossil-fuels</p>
          </div>
          <div className="reference-item">
            <h4>National Geographic – Distribution of Fossil Fuels</h4>
            <p>National Geographic Society. Retrieved from https://education.nationalgeographic.org/resource/distribution-fossil-fuels/</p>
          </div>
          <div className="reference-item">
            <h4>Environmental and Energy Study Institute – Fossil Fuels</h4>
            <p>Environmental and Energy Study Institute. Retrieved from https://www.eesi.org/topics/fossil-fuels/description</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Environmental Organizations</h2>
        <div className="reference-list">
          <div className="reference-item">
            <h4>Beyond Coal</h4>
            <p>Sierra Club. Retrieved from https://www.sierraclub.org/wisconsin/four-lakes/beyond-coal</p>
          </div>
          <div className="reference-item">
            <h4>Fossil Fuels: The Dirty Facts</h4>
            <p>Natural Resources Defense Council. Retrieved from https://www.nrdc.org/stories/fossil-fuels-dirty-facts</p>
          </div>
          <div className="reference-item">
            <h4>Protecting Our Air</h4>
            <p>Clean Wisconsin. Retrieved from https://www.cleanwisconsin.org/our-air/</p>
          </div>
          <div className="reference-item">
            <h4>Public Health Impacts of Gas Plants in Wisconsin</h4>
            <p>
              Healthy Climate Wisconsin / Union of Concerned Scientists. Retrieved from
              https://www.healthyclimatewi.org and https://blog.ucs.org
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Wisconsin-Specific Resources</h2>
        <div className="reference-list">
          <div className="reference-item">
            <h4>Solar Installations</h4>
            <p>Wisconsin Department of Natural Resources. Retrieved from https://dnr.wisconsin.gov/topic/Sectors/SolarInstallations</p>
          </div>
          <div className="reference-item">
            <h4>Wisconsin&apos;s Dirtiest Power Plants</h4>
            <p>
              Wisconsin Environment Research &amp; Policy Center (2022, June 23). Retrieved from
              https://environmentamerica.org
            </p>
          </div>
          <div className="reference-item">
            <h4>Wisconsin Energy Statistics</h4>
            <p>
              Public Service Commission of Wisconsin, Office of Energy Innovation. Retrieved from
              https://psc.wi.gov/Pages/Programs/OEI/EnergyStatistics.aspx
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default References
