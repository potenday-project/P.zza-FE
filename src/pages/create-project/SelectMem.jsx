import { Step } from '../../components/step/Step';
import { Option } from '../../components/option/Option';
import './SelectMem.scss';

export function SelectMem({ value }) {
  return (
    <div>
      <Step value={value}>어떤 팀원과 함께하고 싶나요?</Step>
      <div className="frame">
        <div className="row">
          <Option>BE개발</Option>
          <Option>FE개발</Option>
        </div>
        <div className="row">
          <Option>기획</Option>
          <Option>디자인</Option>
        </div>
      </div>
    </div>
  );
}
