import './ExplainProject.scss';

import { useState } from 'react';

import { Input } from '../../../components/input/Input';
import { Step } from '../../../components/step/Step';

export function ExplainProject({
  step,
  desc_name,
  url_name,
  desc,
  chat_url,
  onChange,
}) {
  const [desc_val, setDescVal] = useState(desc);
  const [url_val, setURLVal] = useState(chat_url);

  const handleDescChange = (name, desc) => {
    setDescVal(desc);
    onChange(name, desc);
  };
  const handleUrlChange = (name, url) => {
    setURLVal(url);
    onChange(name, url);
  };
  return (
    <div>
      <Step value={step}>프로젝트 소개글을 작성해주세요</Step>

      <Input
        name={desc_name}
        textarea={true}
        value={desc_val}
        placeholder="이 글을 보고 팀원들이 가입 요청을 합니다.소개글을 작성해주세요.500자 이내"
        onChange={handleDescChange}
      >
        소개
      </Input>

      <Input
        name={url_name}
        value={url_val}
        placeholder="입력해주세요"
        onChange={handleUrlChange}
      >
        소통 채널
      </Input>
    </div>
  );
}
