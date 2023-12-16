import './ProjectAbout.scss';
import delete_icn from '../../assets/icons/x.svg';
import flag from '../../assets/icons/icn_flag.svg';
import mem from '../../assets/icons/icn_mem.svg';
import charac from '../../images/mem_detail.svg';
import { StickyFooter } from '../../components/sticky-footer/StickyFooter';

export function ProjectAbout() {
  return (
    <div>
      <header className="project-header">
        <div className="icn-header">
          <img src={delete_icn} />
        </div>
        <div className="title-header">
          <span>모집중</span>
          <div className="pj-title"> 탄소 감소 서비스 팀원 모집합니다! </div>
        </div>
        <div className="pj-section">
          <div className="item">
            <img src={flag} />
            <span>프로젝트 기간</span>
          </div>
          <span>23.12.11-23.12.17 | 총 10일 </span>
        </div>
        <div className="pj-section">
          <div className="item">
            <img src={mem} />
            <span>모집 인원</span>
          </div>
          <div className="position-container">
            <span className="position">기획</span>
            <span className="position">디자인</span>
            <span className="position">프론트</span>
            <span className="position">벡엔드 </span>
          </div>
        </div>
      </header>
      <PresentStatus></PresentStatus>
      <DetailAboutPJ></DetailAboutPJ>
      <StickyFooter></StickyFooter>
    </div>
  );
}

function PresentStatus() {
  return (
    <div className="detail-section">
      <div className="talk-box">
        <div className="talk">
          지금 <span style={{ color: 'red' }}>2명</span> 의 팀원이 함께하고
          있어요!
        </div>
        <img src={charac} />
      </div>
    </div>
  );
}
function DetailAboutPJ() {
  return (
    <div className="detail-section">
      <p className="detail-content">
        팀 프로젝트의 성공을 함께 만들어 갈 팀원을 모집합니다! 저희는 팀
        프로젝트의 새로운 기준을 제시하는 팀 프로젝트 관리 앱 '프로젝트
        제로(PROJECT ZERO)'를 개발하고 있습니다. 프로젝트 제로(PROJECT ZERO)는
        팀 프로젝트의 모든 과정을 한 곳에서 관리할 수 있는 앱입니다. 일정 관리
        커뮤니케이션 협업 성과 관리 프로젝트 제로(PROJECT ZERO)는 팀원들의
        소통과 협업을 강화하고, 프로젝트의 효율성과 생산성을 높여 팀 프로젝트의
        성공을 돕습니다. 저희는 프로젝트 제로(PROJECT ZERO)를 통해 팀 프로젝트의
        성공을 누구나 경험할 수 있는 세상을 만들고자 합니다.
      </p>
    </div>
  );
}
