import './ProjectCard.scss';

export function ProjectCard() {
  return (
    <div className="card-container">
      <div class="elements">
        <div className="pj-header">
          <span>모집중</span>
          <div className="pj-title"> 탄소 감소 서비스 팀원 모집합니다! </div>
        </div>
        <p className="pj-desc">
          고양이, 강아지, 날다람쥐 등등 종을 아우르는 반려동물 케어 서비스
          구현에 함께하실 분을 찾습니다. 한줄포부에 어떤 반려동물과 함께하는지도
          적어주세요.
        </p>
        <div className="position-container">
          <span className="position">기획</span>
          <span className="position">디자인</span>
          <span className="position">프론트</span>
          <span className="position">벡엔드 </span>
        </div>
      </div>
    </div>
  );
}
