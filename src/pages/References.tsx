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
          This website draws information from reputable scientific, governmental, and organizational sources to ensure accuracy and credibility. All claims about fossil fuels, their effects on the environment and human health, and recommended actions are based on peer-reviewed research and established sources. By providing these references, we empower members of the public to verify our information and explore these topics further.
        </p>
      </section>

      <section className="content-section">
        <h2>Government & Scientific Organizations</h2>
        <div className="reference-list">
          <div className="reference-item">
            <h4>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h4>
            <p>Retrieved from https://www.eia.gov/state/analysis.php?sid=WI</p>
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
            <h4>Wisconsin's Dirtiest Power Plants</h4>
            <p>Wisconsin Environment Research & Policy Center (2022, June 23). Retrieved from https://environmentamerica.org</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default References
