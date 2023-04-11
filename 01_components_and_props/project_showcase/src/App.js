import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

function App() {
  return (
    <div className="App">
      <Header />
      {/* above is = to calling the function Header() */}
      <ProjectForm />
      <ProjectList />
    </div>);
}

export default App;
