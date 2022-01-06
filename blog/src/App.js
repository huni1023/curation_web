/*eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [article_title, article_title_change] = useState(['종민이랑 워크숍', '큐리 뿌시기', '교육플랫폼 설계자']);
  let [like_cnt, like_cnt_change] = useState(0);
  let posts = 'Cury'
  let main_css = {color: 'white'}

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ main_css }> Cury Home </div>
      </div>
      <button onClick={() => article_title_change(['유진이랑 워크숍', 'SNURO-LA', 'Cury'])}> change style </button>

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
      
    </div>
  );
}

export default App;
