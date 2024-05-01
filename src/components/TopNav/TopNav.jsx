import './TopNav.scss';

import back from '../../assets/icons/back.svg';

export function TopNav({ children, step }) {
  return (
    <div className="topnav-container">
      {step && <img src={back} className="back" onClick={() => {}} />}
      <h1 className="titles">{children}</h1>
    </div>
  );
}
