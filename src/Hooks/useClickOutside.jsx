/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react';

const useClickOutside = (ref, callback, dependency) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [dependency]);
};

export default useClickOutside;

// Examples;
// const ClickBox = ({ onClickOutside }) => {
//   const clickRef = React.useRef();
//   useClickOutside(clickRef, onClickOutside);
//   return (
//     <div
//       className="click-box"
//       ref={clickRef}
//       style={{
//         border: '2px dashed orangered',
//         height: 200,
//         width: 400,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <p>Click out of this element</p>
//     </div>
//   );
// };

// ReactDOM.render(
//   <ClickBox onClickOutside={() => alert('click outside')} />,
//   document.getElementById('root'),
// );
