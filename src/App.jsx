import './App.css';

import React, { useEffect } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from './components/layout/Layout';
import { CreateProject } from './pages/create-project/CreateProject';
import { CreateTopic } from './pages/create-topic/CreateTopic';
import { Recommendation } from './pages/create-topic/Recommendation';
import End from './pages/End';
import { Main } from './pages/Main';
import MyProject from './pages/project/MyProject';
import { ProjectAbout } from './pages/project/ProjectAbout';
import ProjectDetail from './pages/project/ProjectDetail';
import SignUp from './pages/sign-up/SignUp';
import Start from './pages/Start';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/mainpage" element={<Main></Main>} />
          <Route
            path="/project-about"
            element={<ProjectAbout></ProjectAbout>}
          />

          <Route path="/create-topic" element={<CreateTopic></CreateTopic>} />
          <Route path="/create-topic/keyword" element={<Recommendation />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/myproject/:id" element={<ProjectDetail />} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/myproject/:id/finish" element={<End />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
