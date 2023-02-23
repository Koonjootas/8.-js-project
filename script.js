
const entities = [
    {
      city: 'Rostov-on-Don <br> LCD admiral',
      apartment: '81 m<sup>2</sup>',
      time:'3.5 month',
      cost:'Upon request',
      img: 'https://i.ibb.co/M1jnrjf/2-chairs.png'
    },
    {
      city: 'Sochi <br> Thieves',
      apartment: '105 m<sup>2</sup>',
      time:'4 months',
      cost:'Upon request',
      img: 'https://i.ibb.co/HHYNHR9/2-2-chairs.png'
    },
    {
      city: 'Rostov-on-Don <br> Patriotic',
      apartment: '93 m<sup>2</sup>',
      time:'3 months',
      cost:'Upon request',
      img: 'https://i.ibb.co/ZGKH5zP/2-3-chairs.png'
    },
  ]
  
  const city = document.querySelector('.city');
  const apartment = document.querySelector('.apartment');
  const time = document.querySelector('.time');
  const cost = document.querySelector('.cost');
  const img = document.querySelector('.secondblock__images')
  let viewSliders = document.querySelectorAll(".secondblock__slider__circle");  
  viewSliders[0].style.backgroundColor = "#fff"

  let viewLinks = document.querySelectorAll(".secondblock__nav__item__link");
  viewLinks[0].style.color = "#E3B873"
  
  const setEntity = (index) => {
    city.innerHTML = entities[index].city
    apartment.innerHTML = entities[index].apartment
    time.innerText = entities[index].time
    cost.innerText = entities[index].cost
    img.style.backgroundImage = `url(${entities[index].img})`
  }
  
  const prev = document.querySelector('.left_arrow')
  const next = document.querySelector('.right_arrow')
  let currentIndex = 0
  
  prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
    viewSliders[currentIndex].style.backgroundColor = "#fff";
    viewSliders[currentIndex+1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
    viewLinks[currentIndex].style.color = "#E3B873";
    viewLinks[currentIndex+1].style.color = "#ffffff3a";    
      })
  next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
    viewSliders[currentIndex].style.backgroundColor = "#fff";
    viewSliders[currentIndex-1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
    viewLinks[currentIndex].style.color = "#E3B873";
    viewLinks[currentIndex-1].style.color = "#ffffff3a";
     })

  viewLinks[0].addEventListener('click', () => {
      setEntity(0);
      currentIndex = 0;
      viewSliders[currentIndex].style.backgroundColor = "#fff";
      viewSliders[currentIndex+1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
      viewSliders[currentIndex+2].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
      viewLinks[currentIndex].style.color = "#E3B873";
      viewLinks[currentIndex+1].style.color = "#ffffff3a";
      viewLinks[currentIndex+2].style.color = "#ffffff3a";
      })

  viewLinks[1].addEventListener('click', () => {
    setEntity(1);
    currentIndex = 1;
    viewSliders[currentIndex].style.backgroundColor = "#fff";
    viewSliders[currentIndex-1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
    viewSliders[currentIndex+1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
    viewLinks[currentIndex].style.color = "#E3B873";
    viewLinks[currentIndex-1].style.color = "#ffffff3a";
    viewLinks[currentIndex+1].style.color = "#ffffff3a";

    })

    viewLinks[2].addEventListener('click', () => {
    setEntity(2);
    currentIndex = 2;
    viewSliders[currentIndex].style.backgroundColor = "#fff";
    viewSliders[currentIndex-1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
    viewSliders[currentIndex-2].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
    viewLinks[currentIndex].style.color = "#E3B873";
    viewLinks[currentIndex-1].style.color = "#ffffff3a";
    viewLinks[currentIndex-2].style.color = "#ffffff3a";
    })
 
    viewSliders[0].addEventListener('click', () => {
      setEntity(0);
      currentIndex = 0;
      viewSliders[currentIndex].style.backgroundColor = "#fff";
      viewSliders[currentIndex+1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
      viewSliders[currentIndex+2].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
      viewLinks[currentIndex].style.color = "#E3B873";
      viewLinks[currentIndex+1].style.color = "#ffffff3a";
      viewLinks[currentIndex+2].style.color = "#ffffff3a";
      })

      viewSliders[1].addEventListener('click', () => {
        setEntity(1);
        currentIndex = 1;
        viewSliders[currentIndex].style.backgroundColor = "#fff";
        viewSliders[currentIndex-1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
        viewSliders[currentIndex+1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
        viewLinks[currentIndex].style.color = "#E3B873";
        viewLinks[currentIndex-1].style.color = "#ffffff3a";
        viewLinks[currentIndex+1].style.color = "#ffffff3a";
        })

        viewSliders[2].addEventListener('click', () => {
          setEntity(2);
          currentIndex = 2;
          viewSliders[currentIndex].style.backgroundColor = "#fff";
          viewSliders[currentIndex-1].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
          viewSliders[currentIndex-2].style.backgroundColor = "rgba(255, 255, 255, 0.304)";
          viewLinks[currentIndex].style.color = "#E3B873";
          viewLinks[currentIndex-1].style.color = "#ffffff3a";
          viewLinks[currentIndex-2].style.color = "#ffffff3a";
          })



// function activePoint() {
//   if (currentIndex = 0) {
//     dots[0].style.backgroundColor = "#fff"
//   } if (currentIndex = 1) {
//     dots[1].style.backgroundColor = "#fff"
//   } else {
//     dots[2].style.backgroundColor = "#fff"
//     }
// }
  