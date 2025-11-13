import '../styles/Pages.css'

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Fossil Fuels in Wisconsin</h1>
        <p className="subtitle">
          Informing the Public. Driving Change. Protecting Our Future.
        </p>
      </section>

      <section className="content-section">
        <h2>Welcome</h2>
        <p>
          [PLACEHOLDER TEXT: Introduction explaining the mission of this website - to communicate key information about fossil fuel use in Wisconsin to members of the general public. Include a brief overview of the environmental and health impacts of burning fossil fuels.]
        </p>
      </section>

      <section className="content-section cards-container">
        <h2>Explore the Topics</h2>
        <div className="card-grid">
          <div className="info-card">
            <h3>What Are Fossil Fuels?</h3>
            <p>[PLACEHOLDER TEXT: Brief description of what fossil fuels are and why it's important to understand them.]</p>
          </div>
          <div className="info-card">
            <h3>Concerns & Effects</h3>
            <p>[PLACEHOLDER TEXT: Overview of environmental and health concerns related to fossil fuel consumption.]</p>
          </div>
          <div className="info-card">
            <h3>How to Help</h3>
            <p>[PLACEHOLDER TEXT: Introduction to actions individuals can take to reduce their fossil fuel consumption and environmental impact.]</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Why This Matters</h2>
        <p>
          [PLACEHOLDER TEXT: Detailed explanation of why addressing fossil fuel use in Wisconsin is critical for environmental protection and public health, including specific statistics or examples relevant to Wisconsin.]
        </p>
      </section>
    </div>
  )
}

export default Home
