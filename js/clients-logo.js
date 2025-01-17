const clients = [
  { name: "웨스틴 조선 서울", image: "../images/clients/chosun.webp" },
  { name: "파크 하얏트 서울", image: "../images/clients/parkhyatt.gif" },
  {
    name: "몬드리안 이태원 서울",
    image:
      "https://mondrianhotels.com/wp-content/uploads/sites/34/2024/05/mondrian-seoul-itaewon-logo-white.svg",
    color: "white",
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
  { name: "글래드 강남 코엑스 센터", image: "	https://www.glad-hotels.com/static/pc/assets/img/header/logo_glad_gangnamcoexcenter_white.svg" ,color:'white'},
//   { name: "호텔 컬리넌 왕십리", image: "" },
  { name: "소피텔 앰배서더 서울", image: "	https://www.sofitel-seoul.com/wp-content/themes/sofitel-template/images/logo/logo-sofitel-big.svg",color:'white' },
  { name: "노보텔 앰버서더 서울 동대문", image: "https://www.ambatel.com/RES/novotel_dongdaemun_logo.png" },
//   { name: "오크밸리 성문안C.C.", image: "" },
//   { name: "동대문 종합시장", image: "" },
//   { name: "엠포리아 빌딩 (도산대로)", image: "" },
//   { name: "신세계 남산", image: "" },
  { name: "휘닉스 파크 평창", image: "https://phoenixhnr.co.kr/images/ko/com/logo_pp_wh.svg",color:'white' },
//   { name: "호암 미술관", image: "" },
//   { name: "탑독 골프 아카데미", image: "" },
//   { name: "SETEC", image: "" },
//   { name: "카카오 아지트", image: "" },
//   { name: "강서 K 병원", image: "" },
//   { name: "볼보 전시장 & 서비스 센터", image: "" },
//   { name: "라마다용인", image: "" },
//   { name: "갓포아키", image: "" }
];

const cardContainer = document.getElementById("card-container");

function addCards(clients) {
  clients.forEach((client) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-auto";

    const cardDiv = document.createElement("div");
    if (client.color == "white") {
      cardDiv.className = "card  rounded-1 bg-dark";
    } else {
      cardDiv.className = "card rounded-1";
    }
    cardDiv.style.backgroundImage = `url('${client.image}')`;

    const heading = document.createElement("h3");
    heading.className = "mt-4 mx-2  fs-6 lh-1 fw-bold";
    // heading.textContent = client.name;

    cardDiv.appendChild(heading);
    colDiv.appendChild(cardDiv);
    cardContainer.appendChild(colDiv);
  });

  currentIndex = endIndex;
}

function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if (currentIndex < clients.length) {
      addCards(clients);
    }
  }
}

// 카드 추가
addCards(clients);
// // 카드 복사
// addCards(clients);


