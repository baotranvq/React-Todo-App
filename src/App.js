import Layout from "./components/Layout";
import TodoApp from "./components/TodoApp";
function App() {
  return (
    <div className="App">
      <Layout>
        <TodoApp/>
      </Layout>
    </div>
  );
}

export default App;
