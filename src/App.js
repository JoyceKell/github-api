import Layout from './components/Layout';
function App() {
  return (
    <div className="App">
      <Layout>
        <div>User</div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/85644063?v=4" alt="picture of user"/>
          <h1>Joyce Silva</h1>
          <h3>Username:</h3>
          <span>benits</span>
          <div>
            <div> 
              <h4>Starreds</h4>
              <span>5</span>
            </div>
            <div> 
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div> 
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>
        </div>
        <div>Repositórios</div>
        <div>Starreds</div>
      </Layout>
    </div>
  );
}

export default App;
