import projects from '../projects'

console.log("🚀 ~ file: ProjectList.jsx:2 ~ projects:", projects)


const ProjectList = () => {
    return (
        <section>
          <h1>All Projects</h1>
          <div className="filter">
            <button>All</button>
            <button>Phase 5</button>
            <button>Phase 4</button>
            <button>Phase 3</button>
            <button>Phase 2</button>
            <button>Phase 1</button>
          </div>
          <ul className="cards">
            {/* array of JSX elements here*/}
          </ul>
        </section>
      )
}

export default ProjectList
