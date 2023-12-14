import { TopNav } from '../../components/TopNav/TopNav';

export function TopicList() {
  return (
    <>
      <TopNav>프로젝트 주제</TopNav>
      <div className="topic-container">
        <h3>
          00님을 위한
          <br />
          추천 프로젝트 주제입니다
        </h3>
        <p>주제 선정에 도움이 되셨으면 좋겠어요!</p>
        <div></div>
      </div>
    </>
  );
}
