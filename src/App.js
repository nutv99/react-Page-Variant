import React from 'react';
import './style.css';

export default function App() {
  const sDat = [{ stype: 'A' }, { stype: 'B' }, { stype: 'A' }];

  function Banner1(imgFileName) {
    return <img src={imgFileName} style={{ Height: 100 }} alt="" />;
  }
  function Banner2(imgFileName1, imgFileName2) {
    return (
      <div className="flex">
        <img src={imgFileName1} className="half" alt="" />
        <img src={imgFileName2} className="half" alt="" />
      </div>
    );
  }

  function aaa() {
    return (
      <ul>
        {sDat.map((item) => {
          if (item.stype == 'A') {
            return Banner1(
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFRmQaItymdj7kxxKVn88LMcq_50P8HJlVt6Wqon5MEMLjLLRRt5If0r8pNA2x9puiUs&usqp=CAU'
            );
          }
          if (item.stype == 'B') {
            return Banner2(
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFRmQaItymdj7kxxKVn88LMcq_50P8HJlVt6Wqon5MEMLjLLRRt5If0r8pNA2x9puiUs&usqp=CAU',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFRmQaItymdj7kxxKVn88LMcq_50P8HJlVt6Wqon5MEMLjLLRRt5If0r8pNA2x9puiUs&usqp=CAU'
            );
          }
        })}
      </ul>
    );
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{aaa()}</p>
    </div>
  );
}
