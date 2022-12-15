import { React } from 'react'
import { useNavigate } from "react-router-dom";
import './Footer.scss';

const Footer = ({ authenticate, setAuthenticate }) => {

  const navigate = useNavigate();
  const snsList = ['TIKTOK','|','INSTAGRAM','|','FACEBOOK','|','KAKAO','|','YOUTUBE','|','SPOTIFY'];
  const infoList = ['아이티엑스코리아 유한회사','|','사업자등록번호 120-88-14733','|','서울시 강남구 영동대로 511 (삼성동) 33층']

  return (
    <div>
      <p className="letter_join">뉴스레터에 가입하세요!</p>   
      <nav className="list_wrap">
        <ul className="sns_list">
          {snsList.map((sns) => (<li>{sns}</li>))}
        </ul>
        <ul className="info_list">
          {infoList.map((info) => (<li>{info}</li>))}
        </ul>
      </nav> 
      <div className="img_wrap">
        <img src="https://i.vimeocdn.com/channel/477437" alt="하단배너" className="footer_img"/> 
      </div>
    </div> 
  )
}

export default Footer