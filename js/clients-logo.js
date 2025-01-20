const clients = [
  { name: "웨스틴 조선 서울", image: "../images/clients/chosun.webp" },
  { name: "파크 하얏트 서울", image: "../images/clients/parkhyatt.gif" },
  {
    name: "몬드리안 이태원 서울",
    image:
      "https://i.namu.wiki/i/VrwGlyhqBbCvl03wVuYNj_nJOxVsLalpFBj-eJnyV_v8fszPcdGizNxhoi2sKISuaWQPi6QhgTYnoKzRZfBw97wX_cZZ4WQRnTYjJ__ucbvxlzZbkXFweT_P_yiU29IV6mnk3b5V4bzRAmEMQo_qsQ.svg",
  },
  {
    name: "포포인츠 바이 쉐라톤 서울 강남",
    image:
      "https://cache.marriott.com/content/dam/marriott-digital/fp/global-property-shared/en_us/logo/assets/fp_logo_L.png",
  },
  {
    name: "JW메리어트 동대문 스퀘어 서울",
    image:
      "https://cache.marriott.com/content/dam/marriott-digital/jw/global-property-shared/en_us/logo/assets/jw_logo_L.png",
  },
  {
    name: "알로프트 서울 명동",
    image:
      "https://cache.marriott.com/content/dam/marriott-digital/al/global-property-shared/en_us/logo/assets/al-logo-fullcolor-hws-14669.png",
  },
  {
    name: "글래드 강남 코엑스 센터",
    image:
      "https://www.glad-hotels.com/static/pc/assets/img/header/logo_glad_gangnamcoexcenter.svg",
  },
  //   { name: "호텔 컬리넌 왕십리", image: "" },
  {
    name: "소피텔 앰배서더 서울",
    image:
      "https://i.namu.wiki/i/w4EHnPrKx6yf974lBHTXX7GUwWpPJSjr4UDPBFy82M81SBAkC4vnMcme5fk0fTHVIa1MJj3EOAAI-9Q4q4s8LQ0FuFpRL7wsh14FRCbvNKqLyCoYcU7K1w2pnhmYSS0wJxUFs6KJgkz8ITXl1VvvVA.svg",
  },
  {
    name: "노보텔 앰버서더 서울 동대문",
    image: "https://www.ambatel.com/RES/novotel_dongdaemun_logo.png",
  },
  //   { name: "오크밸리 성문안C.C.", image: "" },
  //   { name: "동대문 종합시장", image: "" },
  //   { name: "엠포리아 빌딩 (도산대로)", image: "" },
  //   { name: "신세계 남산", image: "" },
  {
    name: "휘닉스 파크 평창",
    image:
      "https://i.namu.wiki/i/-pt5PJBp6oRLghlNRD-9dqmHZmmeUcS0mCUDp46xi484fb8LkmphDNB_-tSQhtFmxhKNDC-zZUU5bNdbEHZiUhqKZn5su_w9PJEDbbxLrZtgXc30Qrc2UTldc9f7SjMKUMx7So39TewMuSyROW4V8g.webp",
  },
  {
    name: "라마다용인",
    image: "http://www.ramadayongin.com/contents/images/logo1-footer1.png",
  },
  {
    name: "호암 미술관",
    svg: `<svg class="hoam-emblem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 13.75" role="img" aria-labelledby="titleHoam">
          <title id="titleHoam">HOAM</title>
          <path d="M210.746,300.732h9.625v-3.094h-9.625Zm-3.094,3.781h3.094v-3.781h-3.094Zm-31.969-2.75h24.75v-4.125h-24.75Zm0,5.5v-5.5h-4.125v-4.125H166.4v4.3H132.715v-4.3h-5.156v13.75h5.156v-4.3H166.4v4.3h5.156v-4.125Zm24.75,0h-24.75v4.125h24.75Zm7.219,4.125v-6.875h-3.094v-2.75h-4.125v5.5h4.125v4.125Zm3.094-3.781h9.625v-3.094h-9.625Zm9.625-3.094h3.094v-3.781h-3.094Zm8.25,6.875V299.7h-2.063v4.813h-3.094v6.875ZM233.09,299.7H235.5v-2.062h-6.875V299.7h2.406v11.688h2.062Zm4.469,0H235.5v11.688h2.063Z" transform="translate(-127.559 -297.638)"></path>
      </svg>`
  },
  //   { name: "탑독 골프 아카데미", image: "" },
  //   { name: "SETEC", image: "" },
  //   { name: "카카오 아지트", image: "" },
  //   { name: "강서 K 병원", image: "" },
  //   { name: "볼보 전시장 & 서비스 센터", image: "" },

  //   { name: "갓포아키", image: "" }
];

const cardContainer = document.getElementById("card-container");

function createCard(client) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-auto";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  if (client.image) {
    cardDiv.style.backgroundImage = `url('${client.image}')`;
  } else if (client.svg) {
    cardDiv.innerHTML = client.svg;
  }

  const heading = document.createElement("h3");
  heading.className = "mt-4 mx-2 fs-6 lh-1 fw-bold";
  // heading.textContent = client.name; // 이름 추가

  cardDiv.appendChild(heading);
  colDiv.appendChild(cardDiv);
  return colDiv;
}

function addCards() {
  clients.forEach((client) => {
    const cardElement = createCard(client);
    cardContainer.appendChild(cardElement);
  });

  cardContainer.classList.add("scroll-animation");
}

// 초기 카드 추가
addCards();
