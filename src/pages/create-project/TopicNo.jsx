import { TopNav } from '../../components/TopNav/TopNav';
import { Button } from '../../components/button/Button';
import { Input } from '../../components/input/Input';

const NUM = [1, 2, 3, 4, 5];
export function TopicNo() {
  return (
    <>
      <TopNav>프로젝트 주제</TopNav>
      <div>
        <h3>
          관심사를 키워드로 입력해보세요 <br /> AI가 주제를 추천해드립니다.
        </h3>
        <p>주제는 명사로 입력해주세요</p>
        <div>
          {NUM.map((item) => (
            <Input></Input>
          ))}
        </div>
        <Button></Button>
      </div>
    </>
  );
}
