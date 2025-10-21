//내가 직접 파일을 html코드를 만들 때는 함수를 이용해서 묶는다.
//1. 함수만들기

import person from "../assets/people1.webp"
import Badge from "./Badge"
import "./Profile.css"

export default function Profile() {

    let name = "홍길동"
    let job = "프론트엔드 개발자"

  return (
    <>
      <div className="profile-box">
          <div className="image-container">
            <Badge />
            <img src={person} alt="프론트엔드 개발자" />
            
            {/* <button type="button" className="btn btn-primary">
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New</span>
              </span>
            </button> */}
          </div>
          <h2>{name}</h2>
          <p>{job}</p>
      </div>
    </>
  )
}
