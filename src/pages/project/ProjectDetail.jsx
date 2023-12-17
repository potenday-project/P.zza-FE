import React, { useEffect, useState } from 'react';
import Header from '../../components/elements/Header';
import pzza from '../../assets/images/img_logo_pzza.svg';
import idea from '../../assets/icons/ic_idea.svg';
import email from '../../assets/icons/ic_email.svg';
import folder from '../../assets/icons/ic_folder.svg';
import { PROJECT_STEPS } from '../../constant/projectSteps';
import './ProjectDetail.scss';
import { Button } from '../../components/button/Button';
import { getProjectDetail, getMyProjectProgress } from '../../api/project';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../../src/project.json';

const ProjectDetail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(data);
  const [myProjectProgress, setMyProjectProgress] = useState({});
  const [selectedStep, setSelectedStep] = useState(1);

  useEffect(() => {
    // 내 프로젝트 불러오는 쿼리
    const getProjectDataQuery = async () => {
      try {
        const data = await getProjectDetail(param.id);
        setProjectData(data);
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    };
    // 내 프로젝트 진행도 불러오는 쿼리
    const getMyProjectProgressQuery = async () => {
      try {
        const data = await getMyProjectProgress({ projectId, progressId });
        setMyProjectProgress(data);
      } catch (error) {
        console.error('프로젝트 진행도를 불러오는 데 실패했습니다:', error);
      }
    };

    getProjectDataQuery();
    getMyProjectProgressQuery();
  }, []);

  // step 선택 핸들러
  const selectProjectStep = (e) => {
    const selectedStep = e.currentTarget.dataset.id;
    setSelectedStep(selectedStep);
  };

  return (
    <div>
      <Header
        title={projectData[0].project_name}
        useType="project"
        onClick={() => navigate('../mainpage')}
        projectUrl={myProjectProgress.chat_url}
      />
      <article>
        <div className="detail-banner ">
          <img src={pzza} alt="피자로고" />
          <p>프로젝트 완주까지 으쌰으쌰</p>
          <p>팀원들과 다 함께 열심히 달려요!</p>
        </div>
        <div className="project_steps">
          <ul className="steps_list">
            {PROJECT_STEPS.map((step, idx) => (
              <li
                key={step.name}
                data-id={step.step - 1}
                onClick={(e) => selectProjectStep(e)}
              >
                <img src={step.src} className="step_box" />
                <div className="step_text">
                  <p>{idx + 1}일차</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="wrap_box">
            <h2>
              <img src={idea} alt="단계별 가이드 아이콘" />
              단계별 가이드
            </h2>
            <div className="info_box">
              <p className="desc_title">
                STEP {Number(selectedStep) + 1}.{' '}
                {PROJECT_STEPS[selectedStep].name}
              </p>
              <p className="desc_text">{PROJECT_STEPS[selectedStep].desc}</p>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="wrap_box">
          <h2>
            <img src={folder} alt="산출물 업로드 아이콘" />
            산출물 업로드
          </h2>
          <input type="file" />
          <button
            className="common"
            onClick={() => {
              if (Number(selectedStep) === 9) navigate('./finish');
            }}
          >
            제출하기
          </button>
        </div>
      </article>
      <article>
        <div className="wrap_box">
          <h2 style={{ marginBottom: '24px' }}>
            <img src={email} alt="참여요청 현황 아이콘" />
            참여 요청 현황
          </h2>
          <ul>
            <li>
              <div className="info_box">
                <p>직무:</p>
                <p>경력:</p>
                <p>포폴:</p>
                <p>한줄포부:</p>
              </div>
              <button className="common">우리 함께해요!</button>
              <button className="common_wh">아쉽지만 다음기회에...</button>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;
