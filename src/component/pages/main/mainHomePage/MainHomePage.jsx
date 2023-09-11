import React from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainHomePage.css";

// App 컴포넌트 정의
function MainHomePage() {
  return (
    <div>
      /* Header */
      <header className="main.header">
        <div className="logo">
          <a href="#"> RUNNINGHI </a>
        </div>
        <ol>
          <button className="nightmode-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <style>
                svg
                {/* {fill : #000000}  */}
              </style>
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>
          </button>
        </ol>
        <ol>
          <a className="main.headerbtn" href="#">
            ABOUT
          </a>
        </ol>
        <ol>
          <a className="main.headerbtn" href="#">
            LOGIN
          </a>
        </ol>
        <ol>
          <button className="ham-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 -50 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </ol>
      </header>
      {/* Main01 */}
      {/* <Main01> */}
      <div className="mainletter">
        <h3>
          {" "}
          당신을 위한, 당신에 의한 <br /> 맞춤형 러닝 코스 서비스{" "}
        </h3>
        <h1>RUNNINGHI</h1>
      </div>
      <div>
        <button type="submit" className="mapbtn">
          지도 보기
        </button>
      </div>
      {/* </Main01> */}
      {/* Main02 */}
      {/* <Main02> */}
      <section className="post-section">
        <h2 className="line-title">러닝하이 추천코스</h2>
        <div className="owl-carousel custom-carousel owl-theme">
          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://gwanghwamun.seoul.go.kr/resources/client/images/contents/img_introduce_2.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>광화문 코스</h3>
              <p>서울의 - ...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/212032b1-f1a7-4909-8aee-49b25fb40ca5.jpeg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>한강 코스</h3>00
              <p>반포 한강공원을 기준으로...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://t4.ftcdn.net/jpg/04/41/28/39/360_F_441283928_x6wy8WX1Dnh4czUsxHgpXIqqztm939EV.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>서울숲 코스</h3>
              <p>햇살 가득한...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://www.cctimes.kr/news/photo/201704/486528_179235_2012.JPG
              )`,
            }}
          >
            <div className="item-desc">
              <h3>무심천 코스</h3>
              <p>청주의 ...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://img.hani.co.kr/imgdb/resize/2022/0902/166201400446_20220902.JPG
              )`,
            }}
          >
            <div className="item-desc">
              <h3>잠수교 코스</h3>
              <p>비가 오면 못 뛰는 그..</p>
            </div>
          </div>
        </div>
      </section>
      <section className="post-section">
        <h2 className="line-title">러너들의 추천코스</h2>
        <div className="owl-carousel custom-carousel owl-theme">
          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>오창호수공원 코스</h3>
              <p>진짜 오리들이 걸어다니는 공원을 본 적 있으신가요</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>오송호수공원 코스</h3>
              <p>오송은 정말 정말 좋은 곳이야. 서브웨이 바로 옆에 스타벅스</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/ec1918b1-2674-452c-bf61-8f73d8cc40c6/rdr2.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>방화수류정 코스</h3>
              <p>점심에 러피 사들고 방화수류정을 싹 걸어주면 얼마나 좋게요</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/6ba9052d-6105-4491-917b-e1a65b68f920/pubg.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>강문해변 코스</h3>
              <p>바다에 놀러왔다가 몸이 찌뿌둥해서 런닝을...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/6ba9052d-6105-4491-917b-e1a65b68f920/pubg.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>기업지원허브 코스</h3>
              <p>밥 먹으러 가는 게 일이에요</p>
            </div>
          </div>
        </div>
      </section>
      {/* </Main02> */}
      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-nav">
            <p>
              <a href="#">
                <h1>RunningHI</h1>
              </a>
            </p>
            <hr />
            <p>
              <h5>
                러닝하이를 찾아주셔서 감사합니다. <br /> 더 나은 서비스를 위해
                노력하겠습니다.
              </h5>
            </p>
          </div>

          <nav className="footer-left">
            <h3>러닝하이</h3>
            <p>상호명 | 까 뽀드레감디 </p>
            <p>주소 | 경기도 성남시 </p>
            <p>연락처 | 000 1234 5678</p>
            <p>이메일 | ccaffodrecamdi@gmail.com</p>
          </nav>

          <nav className="footer-right">
            <div>
              <h3>고객서비스</h3>
              <a href="/FAQ">FAQ</a>
              <a href="/TermsofService">이용약관</a>
              <a href="/">개인정보 처리방침</a>
              <a href="/about">About RunningHI</a>
              <a href="/CustomorFeedBack">문의사항</a>
            </div>
          </nav>

          <nav className="footer-right2">
            <h3>SNS</h3>
            <div>
              <a href="/instagram">INSTAGRAM</a>
              <a href="/BLOG">BLOG</a>
              <a href="/Contact">CONTACT</a>
            </div>
          </nav>
        </div>
      </footer>
      {/* Owl Carousel 초기화 */}
      <script>
        {`
        $(document).ready(function () {
          // Owl Carousel 초기화
          $(".custom-carousel").owlCarousel({
            autoWidth: true,
            loop: true,
          });

          $(".custom-carousel .item").click(function () {
            $(".custom-carousel .item").not($(this)).removeClass("active");
            $(this).toggleClass("active");
          });
        });
        `}
      </script>
    </div>
  );
}

export default MainHomePage;
