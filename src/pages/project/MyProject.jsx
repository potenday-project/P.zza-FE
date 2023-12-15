import React, { useEffect, useState } from 'react';
import Header from '../../components/elements/Header';
import { MY_PROJECT_SUBJECTS } from '../../constant/myProjectSubjects';
import {
  getMyProjectInProgress,
  getMyProjectPending,
  getMyProjectRejected,
  getMyProjectStoped,
} from '../../api/project';
import './MyProject.scss';

const MyProject = () => {
  const [inProgress, setInProgress] = useState([]);
  const [pending, setPending] = useState([]);
  const [complete, setComplete] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [stoped, setStoped] = useState([]);

  const projectStates = {
    inProgress,
    pending,
    complete,
    rejected,
    stoped,
  };

  useEffect(() => {
    // 진행중 프로젝트
    const getInprogressQuery = async () => {
      try {
        const data = await getMyProjectInProgress();
        setInProgress(data);
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    };
    // 심사중 프로젝트
    const getPendingQuery = async () => {
      try {
        const data = await getMyProjectPending();
        setPending(data);
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    };
    // 완료된 프로젝트
    const getCompleteQuery = async () => {
      try {
        const data = await getMyProjectCompleted();
        setComplete(data);
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    };
    // 거절된 프로젝트
    const getRejectedQuery = async () => {
      try {
        const data = await getMyProjectRejected();
        setRejected(data);
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    };
    // 중단된 프로젝트
    const getStopedQuery = async () => {
      try {
        const data = await getMyProjectStoped();
        setStoped(data);
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    };

    getInprogressQuery();
    getPendingQuery();
    getCompleteQuery();
    getRejectedQuery();
    getStopedQuery();
  }, []);
  return (
    <div>
      <Header title="내 프로젝트" useType="myProject" />
      <article className="myProject">
        <ul className="myProjectList">
          {MY_PROJECT_SUBJECTS.map((subject) => {
            const projectCount = projectStates[subject.stateKey]?.length || 0;
            return (
              <li key={subject.name}>
                <p>{projectCount}</p>
                <p>{subject.name}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default MyProject;
