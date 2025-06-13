import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PatientManagement from './pages/PatientManagement';
import MedicineSearch from './components/MedicineSearch';
import PrescriptionTransfer from './pages/PrescriptionTransfer';
import PrescriptionRefill from './pages/PrescriptionRefill';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<PatientManagement />} />
            <Route path="/medicines" element={<MedicineSearch />} />
            <Route path="/transfer" element={<PrescriptionTransfer />} />
            <Route path="/refill" element={<PrescriptionRefill />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;