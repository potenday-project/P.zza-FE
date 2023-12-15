import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Start from './pages/Start';
import SignUp1 from './pages/SignUp1';
import MyProject from './pages/project/MyProject';
import ProjectDetail from './pages/project/ProjectDetail';
import Main from './pages/main/Main';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/sign-up-1" element={<SignUp1 />} />
          <Route path="/main" element={<Main />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/myproject" element={<MyProject />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
