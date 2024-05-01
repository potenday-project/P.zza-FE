import './Main.scss';

import {
  useEffect,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import { instance } from '../api/instance';
import done from '../assets/icons/done.svg';
import ing from '../assets/icons/ing.svg';
import stop from '../assets/icons/stop.svg';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import bomb from '../images/bomb.svg';
import home from '../images/home.svg';
import logo from '../images/logo.svg';
import plus_icon from '../images/plus_icon.svg';

export function Main() {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState([true, true, true, true]);
  const [status, setStatus] = useState();
  const [data, setData] = useState([]);

  const filteredData = data.filter((item) => {
    if (isClick[0]) return true; // '전체'가 선택된 경우 모든 데이터 표시
    let filterCondition = false;
    if (isClick[1] && item.project_status === '모집중') filterCondition = true;
    if (isClick[2] && item.project_status === '완료') filterCondition = true;
    if (isClick[3] && item.project_status === '중단') filterCondition = true;
    return filterCondition;
  });

  useEffect(() => {
    const access_key = JSON.parse(localStorage.getItem('ACCESS_KEY'));
    const Datas = async () => {
      try {
        const response = await instance.get(`/projects?offset=20&status=전체`, {
          headers: {
            ACCESS_KEY: access_key,
          },
        });
        // 응답 처리
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (access_key) {
      Datas();
    }
  });

  return (
    <div className="bg-gray">
      <header className="header">
        <img src={logo} />
        <img src={home} onClick={() => navigate('../myproject')} />
      </header>

      <div className="banner">
        <img src={bomb} />
        <div className="main-title">
          핏자와 함께 <span style={{ color: 'red' }}>쭈욱-! </span>
        </div>
        <div className="main-title">함께 늘어나고 성장해요</div>
      </div>
      <div className="chip-container">
        <div
          className={`chip ${isClick[0] ? 'active' : ''}`}
          onClick={() => {
            const newClick = isClick.map(() => !isClick[0]);
            setIsClick(newClick);
            setStatus('전체');
          }}
        >
          전체
        </div>
        <div
          className={`chip ${isClick[1] ? 'active' : ''}`}
          onClick={() => {
            const newClick = [...isClick];
            newClick[1] = !newClick[1];
            if (newClick[0]) newClick[0] = !newClick[0];
            setIsClick(newClick);
            setStatus('모집중');
          }}
        >
          <img src={ing} />
          모집중
        </div>
        <div
          className={`chip ${isClick[2] ? 'active' : ''}`}
          onClick={() => {
            const newClick = [...isClick];
            newClick[2] = !newClick[2];
            if (newClick[0]) newClick[0] = !newClick[0];
            setIsClick(newClick);
            setStatus('완료');
          }}
        >
          <img src={done} />
          완료
        </div>
        <div
          className={`chip ${isClick[3] ? 'active' : ''}`}
          onClick={() => {
            const newClick = [...isClick];
            newClick[3] = !newClick[3];
            if (newClick[0]) newClick[0] = !newClick[0];
            setIsClick(newClick);
            setStatus('중단');
          }}
        >
          <img src={stop} />
          중단
        </div>
      </div>

      <div className="project-section">
        <ul>
          {filteredData.map((item) => (
            <li key={item.project_id}>
              <ProjectCard
                id={item.project_id}
                status={item.project_status}
                name={item.project_name}
                desc={item.project_desc}
                mem={item.team_members}
              />
            </li>
          ))}
        </ul>
      </div>
      <AddProject></AddProject>
    </div>
  );
}

function AddProject() {
  const navigate = useNavigate();
  const [addClick, setAddClick] = useState(false);
  const handleClick = () => {
    setAddClick(!addClick); // 클릭 상태를 토글

    setTimeout(() => {
      navigate('../create-topic'); // 애니메이션 후 페이지 이동
    }, 200); // 애니메이션 지속 시간 500ms
  };

  return (
    <div
      className={`add-container ${addClick ? 'color-change' : ''}`}
      onClick={handleClick}
    >
      <img className="add-icn" src={plus_icon} />
    </div>
  );
}
