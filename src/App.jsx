import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Start from './pages/Start';
import SignUp from './pages/sign-up/SignUp';
import { TopicYesNo } from './pages/create-project/TopicYesNo';
import { TopicNo } from './pages/create-project/TopicNo';
import { TopicList } from './pages/create-project/TopicList';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/sign-up-1" element={<SignUp />} />
          <Route path="/mainpage" element={<div>mainpage</div>} />
          <Route path="/create-project" element={<TopicYesNo></TopicYesNo>} />
          <Route path="/topic-no" element={<TopicNo></TopicNo>} />
          <Route
            path="/topic-no/topic-list"
            element={<TopicList></TopicList>}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
