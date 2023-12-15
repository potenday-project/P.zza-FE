import React, { useEffect, useState } from 'react';
import Header from '../../components/elements/Header';
import { getAllProjects } from '../../api/project';

const Main = () => {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const getProjectDataQuery = async (offset, status) => {
      try {
        const data = await getAllProjects(offset, status);
        setProjectList(data);
      } catch (error) {
        console.error('프로젝트 리스트를 불러오는 데 실패했습니다:', error);
      }
    };

    getProjectDataQuery(40, 'recruiting');
  }, []);

  return (
    <div>
      <Header title="메인" useType="메인페이지" />
      <article>
        <h1>
          핏자와 함께 쭈욱~!
          <br />
          함께 늘어나는 팀플 경험
        </h1>
        <ol>
          <li>전체</li>
          <li>모집중</li>
          <li>중단</li>
          <li>완료</li>
        </ol>
        <ul className="project_list">
          {projectList.map((project) => (
            <li className="project_card">
              <h3>
                <span className={`statusBadge ${project.status}`} />
                {project.name}
              </h3>
              <p>{project.text}</p>
              <ul>
                {project.team_members.map((member) => (
                  <li>
                    <p>
                      {member.role}
                      <span>
                        {member.participant}/{member.recruitment_target}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Main;
