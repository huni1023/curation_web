/*eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [article_title, article_title_change] = useState(['2022년 워크숍', '하나씩 차분하게', '교육플랫폼 개발용']);
  let [like_cnt, like_cnt_change] = useState(0);
  let posts = 'Cury'
  let main_css = {color: 'white'}

  function 제목바꾸기() {
    var newarray = [...article_title] //deep copy
    newarray[0] = '제주도 여행 2월'
    article_title_change(newarray)
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div style={ main_css }> Cury Home </div>
      </div>
      <button onClick={ 제목바꾸기 }> change style </button>
      <button onClick=''> order </button> 

      <div className='list'>
        <h2> { article_title[0]} <span onClick={ () => {like_cnt_change(like_cnt+1)} } > 👍 </span> {like_cnt} </h2>
        <p2> 1월 6일 발행</p2>
        <hr/>
        <h2> {article_title[1]} </h2>
        <p2> 1월 7일 발행</p2>
        <hr/>
        <h2> {article_title[2]} </h2>
        <p2> 1월 8일 발행</p2>
      </div>
      
      <Modal/>
    </div> //
  );
}

function Modal() { //First letter should be capital letter
  return(
    <>
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
    </> 
  )
}


export default App;
