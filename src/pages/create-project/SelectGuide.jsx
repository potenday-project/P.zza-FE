import optioncharac from '../../assets/icons/optioncharac.svg';
import active_optioncharac from '../../assets/icons/active_optioncharac.svg';
import { Step } from '../../components/step/Step';
import './SelectGuide.scss';
import { Option } from '../../components/option/Option';

export function SelectGuide({ value }) {
  return (
    <div>
      <Step value={value}>프로젝트 기간 및 가이드 선택</Step>
      <div className="frame">
        <Option>Day-10</Option>
        <Option>Day-30</Option>
      </div>
      <div className="message">
        <h4> 1.요구사항 정리</h4>
        <p>
          고객이 누군가요? 고객이 느끼는 불편함에는 어떤 게 있나요? 고객의
          요구사항을 정리해보세요.
        </p>
      </div>
    </div>
  );
}
