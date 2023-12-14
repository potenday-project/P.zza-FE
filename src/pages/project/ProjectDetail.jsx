import React from 'react';
import Header from '../../components/elements/Header';
import pzza from '../../assets/images/img_logo_pzza.svg';
import idea from '../../assets/icons/ic_idea.svg';
import email from '../../assets/icons/ic_email.svg';
import folder from '../../assets/icons/ic_folder.svg';
import { PROJECT_STEPS } from '../../constant/projectSteps';
import './ProjectDetail.scss';
import { Button } from '../../components/button/Button';

const ProjectDetail = () => {
  return (
    <div>
      <Header title="프로젝트명" />
      <article>
        <div className="project_banner">
          <img src={pzza} alt="피자로고" />
          <p>프로젝트 완주까지 으쌰으쌰</p>
          <p>팀원들과 다 함께 열심히 달려요!</p>
        </div>
        <div className="project_steps">
          <ul className="steps_list">
            {PROJECT_STEPS.map((step, idx) => (
              <li key={step.name}>
                <div className="step_box">{step.id}</div>
                <div className="step_text">
                  <p>Step {idx + 1}</p>
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
              <p className="desc_title">STEP 1. {PROJECT_STEPS[0].name}</p>
              <p className="desc_text">{PROJECT_STEPS[0].desc}</p>
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
          <Button className="common">제출하기</Button>
        </div>
      </article>
      <article>
        <div className="wrap_box">
          <h2>
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
              <Button className="common">우리 함께해요!</Button>
              <Button className="common_wh">아쉽지만 다음기회에...</Button>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;
