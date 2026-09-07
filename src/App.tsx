import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import ElPlan from './pages/ElPlan';
import Ejes from './pages/Ejes';
import EjeDetalle from './pages/EjeDetalle';
import PropuestaDetalle from './pages/PropuestaDetalle';
import Metas2030 from './pages/Metas2030';
import Prioridades from './pages/Prioridades';
import Transparencia from './pages/Transparencia';
import Documentos from './pages/Documentos';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/el-plan" element={<ElPlan />} />
        <Route path="/ejes" element={<Ejes />} />
        <Route path="/ejes/:ejeId" element={<EjeDetalle />} />
        <Route path="/propuestas/:propuestaId" element={<PropuestaDetalle />} />
        <Route path="/metas" element={<Metas2030 />} />
        <Route path="/prioridades" element={<Prioridades />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/documentos" element={<Documentos />} />
      </Routes>
    </Layout>
  );
}

export default App;
