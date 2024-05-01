import './SkillChip.scss';

import {
  useEffect,
  useState,
} from 'react';

const skillship = [
  'UX설계',
  'UI디자인',
  'HTML',
  'C,C++',
  'Adobe XD',
  'Figma',
  'React',
  'Sketch',
  'Zeplin',
  '브랜딩',
  '서비스 디자인',
  'JavaScript',
  'Java',
  'Angular',
  'vue',
  'Redux',
  'DB',
  'Node.js',
  'Spring',
  'Spring Boot',
];

export function SkillChip({ setSkills, onChange }) {
  const [clicked, setClicked] = useState(Array(skillship.length).fill(false));
  const [skills, setLocalSkills] = useState([]);

  useEffect(() => {
    // useEffect 내에서 setSkills와 onChange 호출
    setSkills(skills);
    onChange('skills', skills);
  }, [skills, setSkills, onChange]);

  return (
    <div className="skill-container">
      {skillship.map((item, i) => (
        <div
          key={i}
          className={`skill-item ${clicked[i] ? 'clicked' : ''}`}
          onClick={() => {
            const newClicked = [...clicked];
            newClicked[i] = !newClicked[i];
            setClicked(newClicked);

            if (newClicked[i]) {
              setLocalSkills((prevSkills) => [...prevSkills, item]);
            } else {
              setLocalSkills((prevSkills) =>
                prevSkills.filter((skill) => skill !== item)
              );
            }
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
