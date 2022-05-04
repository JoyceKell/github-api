import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import RepositoryItem from './components/RepositoryItem';
function App() {
  return (
    <div className="App">
      <Layout>
        <Profile/>
        <Repositories>
          <RepositoryItem/>
        </Repositories>
      </Layout>
    </div>
  );
}

export default App;
