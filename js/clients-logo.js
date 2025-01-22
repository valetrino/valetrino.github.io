const clients = [
  { name: "웨스틴 조선 서울", image: "../images/clients/chosun.webp" },
  { name: "파크 하얏트 서울", image: "../images/clients/parkhyatt.gif" },
  {
    name: "몬드리안 이태원 서울",
    image:
      "../images/clients/mon.svg",
  },
  {
    name: "포포인츠 바이 쉐라톤 서울 강남",
    image:
      "../images/clients/four.tif.svg",
  },
  {
    name: "JW메리어트 동대문 스퀘어 서울",
    image:
      "../images/clients/jw.tif.svg",
  },
  {
    name: "알로프트 서울 명동",
    image:
      "../images/clients/alo.tif.svg",
  },
  {
    name: "글래드 강남 코엑스 센터",
    image:
      "../images/clients/glad.svg",
  },
  //   { name: "호텔 컬리넌 왕십리", image: "" },
  {
    name: "소피텔 앰배서더 서울",
    image:
      "../images/clients/so.svg",
  },
  {
    name: "노보텔 앰버서더 서울 동대문",
    image: "../images/clients/novo.tif.svg",
  },
  //   { name: "오크밸리 성문안C.C.", image: "" },
  //   { name: "동대문 종합시장", image: "" },
  //   { name: "엠포리아 빌딩 (도산대로)", image: "" },
  //   { name: "신세계 남산", image: "" },
  {
    name: "휘닉스 파크 평창",
    image:
      "../images/clients/ph.tif.svg",
  },
  {
    name: "라마다용인",
    image: "../images/clients/rama.tif.svg",
  },
  {
    name: "호암 미술관",
    image: "../images/clients/hoam.svg",
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
  cardDiv.style.backgroundSize = 'contain';
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
