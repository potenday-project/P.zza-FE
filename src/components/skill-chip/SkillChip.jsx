import { useState } from 'react';
import './SkillChip.scss';

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

export function SkillChip({ setSkills }) {
  const [clicked, setClicked] = useState(Array(skillship.length).fill(false));
  const [skills, setLocalSkills] = useState([]);

  console.log(skills);

  return (
    <div className="skill-container">
      {skillship.map((item, i) => (
        <div
          key={i}
          className={`skill-item ${clicked[i] ? 'clicked' : ''}`}
          onClick={() => {
            const newChips = [...clicked];
            newChips[i] = !newChips[i];
            setClicked(newChips);

            if (newChips[i]) {
              setLocalSkills((prevSkills) => [...prevSkills, item]);
            } else {
              setLocalSkills((prevSkills) =>
                prevSkills.filter((skill) => skill !== item)
              );
            }
            setSkills(skills);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
