const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    ];
    
const wedDate = document.querySelector('.wed-date');
const outcome = document.querySelector('h3');
const countDown = document.querySelectorAll('.time p');


const futureDate = new Date(2022, 7, 27, 10, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate()
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];


wedDate.innerHTML = `Date: ${weekday}  ${date}th ${month} ${year}, ${hours}:${mins}am`

const futureTime = futureDate.getTime()


const getCountDownStart = () =>{
  const today = new Date().getTime();
  const countDate = futureDate - today;
  
  // 1s = 1000
  // 1m = 60s
  // 1h = 60m
  // 1d = 24
  
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;
  
  const days = Math.floor(countDate/oneDay);
  const  hours = Math.floor((countDate % oneDay) / oneHour);
  const mins = Math.floor((countDate % oneHour)/oneMin );
  const secs = Math.floor((countDate % oneMin)/1000);
  
  
  const value = [days, hours, mins, secs];
  countDown.forEach((item, index) =>{
    return item.innerHTML = value[index]
  })
  
  
};
const counter = setInterval(getCountDownStart, 1000);
getCountDownStart();

const photoGallery = document.querySelector(".photo-gallery");
const bestiesGallery = document.querySelector(".besties-gallery");

const besties = [
  // {
  //   id: 1,
  //   images: "./img/photo (2).jpg",
  //   name: "Noel"
  // },
  {
    id: 2,
    images: "./img/img20.jpg",
    name: "Essien",
  },
  {
    id: 3,
    images: "./img/img21.jpg",
    name: "Blessing",
  },
  {
    id: 4,
    images: "./img/lady1.jpg",
    name: "Abasifreke",
  },
  {
    id: 5,
    images: "./img/lady2.jpg",
    name: "Edidiong",
  },
  {
    id: 6,
    images: "./img/lady3.jpg",
    name: "Mary",
  },
  {
    id: 7,
    images: "./img/lady4.jpg",
    name: "Valentine",
  },
  {
    id: 8,
    images: "./img/lady5.jpg",
    name: "Mary",
  },
  {
    id: 9,
    images: "./img/lady6.jpg",
    name: "Nkese",
  },
  {
    id: 10,
    images: "./img/lady7.jpg",
    name: "Naya",
  },
  {
    id: 11,
    images: "./img/lady8.jpg",
    name: "Idara",
  },
  {
    id: 12,
    images: "./img/lady9.jpg",
    name: "Josephine",
  },
  {
    id: 12,
    images: "./img/lady10.jpg",
    name: "Rebecca",
  },
  {
    id: 12,
    images: "./img/lady11.jpg",
    name: "Enobong",
  },
  {
    id: 12,
    images: "./img/lady12.jpg",
    name: "Joyce",
  },
  // {
  //   id: 12,
  //   images: "./img/guy1b.jpg",
  //   name: "Ohanele",
  // },
  {
    id: 12,
    images: "./img/guy2b.jpg",
    name: "Ekong",
  },
  {
    id: 12,
    images: "./img/guy3.jpg",
    name: "Udeh",
  },
  {
    id: 12,
    images: "./img/guy4.jpg",
    name: "Stanley",
  },
  {
    id: 12,
    images: "./img/guy5.jpg",
    name: "Ukeme",
  },
  {
    id: 12,
    images: "./img/guy6.jpg",
    name: "Ohanele",
  },
  {
    id: 12,
    images: "./img/guy7.jpg",
    name: "Clement",
  },
  {
    id: 12,
    images: "./img/guy8.jpg",
    name: "Ekemini",
  },
  {
    id: 12,
    images: "./img/guy9.jpg",
    name: "No name",
  },
  {
    id: 12,
    images: "./img/guy10.jpg",
    name: "Akanifiok",
  },
  {
    id: 12,
    images: "./img/guy11.jpg",
    name: "Akanimoh",
  },
  {
    id: 12,
    images: "./img/guy12.jpg",
    name: "Adeyemi",
  },
  {
    id: 12,
    images: "./img/guy13.jpg",
    name: "Ephraim",
  },
  {
    id: 12,
    images: "./img/guy14.jpg",
    name: "Oyonumoh",
  },
  
];


window.addEventListener("DOMContentLoaded", () => {
  displayPictures();
});

const displayPictures = () => {
  // const displayPic = pictures.map((pic) => {
  //   return `<div class="col-4">
  //           <img src="${pic.image}" alt="">
  //           </div> `;
  // });
  const displayPhoto = besties.map((photo) => {
    return `<div class="col-3">
            <img src="${photo.images}" alt="">
            <p>${photo.name}</p>
            </div> `;
  });
  showPhoto = displayPhoto.join("");
  bestiesGallery.innerHTML = showPhoto;
  showPicture = displayPic.join("");
  photoGallery.innerHTML = showPicture;
};







