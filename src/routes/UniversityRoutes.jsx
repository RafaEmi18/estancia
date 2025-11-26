import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UniversityLayout from '../components/layout/UniversityLayout';
import Dashboard from '../components/dashboard/Dashboard';
import InformeTrimestral from '../components/forms/InformeTrimestral/InformeTrimestral';
import PATForm from '../components/forms/PATForm/PATForm';
import PlaneacionCuatri from '../components/forms/PlaneacionCuatri/PlaneacionCuatri';

const UniversityRoutes = ({ onLogout }) => {
  return (
    <Routes>
      <Route path="/" element={<UniversityLayout onLogout={onLogout} />}>
        <Route index element={<Dashboard />} />
        <Route path="informe-trimestral" element={<InformeTrimestral />} />
        <Route path="pat-formulario" element={<PATForm />} />
        <Route path="planeacion-cuatri" element={<PlaneacionCuatri />} />
      </Route>
    </Routes>
  );
};

export default UniversityRoutes;