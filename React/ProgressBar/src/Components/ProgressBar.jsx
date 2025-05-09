import React,{useEffect} from 'react';

const ProgressBar = ({ progress }) => {
  const [transitionProgress, setTransitionProgress] = React.useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTransitionProgress(progress)
    },100)
  }, [progress])
  

  return (
    <div className='Progress-bar'>
      <div className='Progress-bar-filler green' style={{ transform: `translateX(${transitionProgress-100}%)` }}
      role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
        <span className='Progress-text'>{transitionProgress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
