import '../styles/Pages.css'

interface HomeProps {
  setCurrentPage: (page: string) => void
}

function Home({ setCurrentPage }: HomeProps) {
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
          For the past couple decades, the ideas of fossil fuels ruining the earth's ecosystem has been a topic of conversation. Between coal mines in Wyoming, oil rigs in Saudi Arabia, and many other places around the world, the burning of fossil fuels is hurting the earth. This may feel overwhelming, and someone learning about these issues may feel useless and small. This is why we are focusing our project on fossil fuels in Wisconsin specifically in order to show that each individual can start making a difference by understanding the impact huge environmental issues have on their local communities.
        </p>
      </section>

      <section className="content-section cards-container">
        <h2>Explore the Topics</h2>
        <div className="card-grid">
          <button className="info-card" onClick={() => setCurrentPage('whatAre')}>
            <h3>What Are Fossil Fuels?</h3>
            <p>Learn what coal, oil, and natural gas are, how they formed over millions of years, and why
        understanding these fuels matters as we rely on them for energy but face growing climate and
        pollution risks.</p>
          </button>
          <button className="info-card" onClick={() => setCurrentPage('concerns')}>
            <h3>Concerns & Effects</h3>
            <p>Explore the environmental and health impacts of fossil fuel use in Wisconsin, from air and water pollution to climate change effects. Understand how these issues affect communities across the state and why urgent action is needed.</p>
          </button>
          <button className="info-card" onClick={() => setCurrentPage('help')}>
            <h3>How to Help</h3>
            <p>Discover practical steps you can take to reduce fossil fuel consumption, from improving home energy efficiency to supporting clean energy policies. Learn how individual actions and community involvement can drive meaningful change in Wisconsin.</p>
          </button>
        </div>
      </section>

      <section className="content-section">
        <h2>Why This Matters</h2>
        <p>
          Unfortunately, Wisconsin is home to 2 of the top 100 dirtiest power plants in the U.S. According to the U.S. Energy Information Administration, these facilities are powered by 7 coal-fired plants and 3 primarily methane-gas fired plants. These plants are used to generate the majority of Wisconsin's energy. Wisconsin is an averagely sized state with an averagely sized population, meaning there is a high demand for energy; these outdated plants have been used to generate this energy for around 45 years now. When these fossil fuels are burned, they release harmful chemicals like carbon dioxide, methane, and nitrous dioxide into the atmosphere, increasing the rate in which global warming is occurring. It is important that we understand the detrimental effects of speeding up global warming, and beyond that, what we can do to get these energy sources up to date and decrease the burning of fossil fuels in Wisconsin.
        </p>
      </section>
    </div>
  )
}

export default Home
