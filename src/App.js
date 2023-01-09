import { Route, Routes } from 'react-router-dom';
import Landing from './features/Landing';
import Layout from './features/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
