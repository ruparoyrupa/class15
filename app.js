
// Instant Data Check.......



const skills = document.querySelectorAll('.skill');
const skill_footer = document.querySelector('.skill-footer');



skills.forEach( skill => {
  
  skill.addEventListener('change', function(){
   
    let all_data = document.querySelectorAll('.skill:checked');

    let skills_arry = [];

    all_data.forEach(data => {
     
     skills_arry.push(data.value)

    });

    let list ='';

    skills_arry.map( data => {
     
        list +=`
        <li class="list-group-item">${data}</li>
        `
    });


    skill_footer.innerHTML = list;
    

  });

});




// Calculator......

let cal_data = [];

let valGet = (val)=> {
 cal_data.push(val);

 document.querySelector('.top-monitor').innerHTML = cal_data.join('');
 document.querySelector('.min-monitor').innerHTML = 0;
};

let allClear = () => {
  cal_data = [];

  document.querySelector('.top-monitor').innerHTML = 0;
  document.querySelector('.min-monitor').innerHTML = '';

};


let back = () => {
  cal_data.pop();

  document.querySelector('.top-monitor').innerHTML = cal_data.join('');


}


let finalResult = () => {
  let result = cal_data.join('')

 
  document.querySelector('.min-monitor').innerHTML = eval(result);
  
};






// Calculator  2......

let cal_data2 = [];

let valGet2 = (val)=> {
 cal_data2.push(val);

 document.querySelector('.top-monitor2').innerHTML = cal_data2.join('');
 document.querySelector('.min-monitor2').innerHTML = 0;
};

let allClear2 = () => {
  cal_data2 = [];

  document .querySelector('.top-monitor2').innerHTML = 0;
  document.querySelector('.min-monitor2').innerHTML = '';

};


let back2 = () => {
  cal_data2.pop();

  document.querySelector('.top-monitor2').innerHTML = cal_data2.join('');


}


let finalResult2 = () => {
  let result = cal_data2.join('')

 
  document.querySelector('.min-monitor2').innerHTML = eval(result);
  
};





// Analog Clock......................................

const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');

setInterval(() => {
  
let time = new Date();

let current_sec = time.getSeconds();
let current_min = time.getMinutes();
let current_hour = time.getHours();

sec.style.transform = `rotate(${clock( 60 , current_sec )}deg)`
min.style.transform = `rotate(${clock( 60 , current_min )}deg)`
hour.style.transform = `rotate(${clock( 12 , current_hour )}deg)`

}, 1000);

function clock ( time , current ){
 return ( 360 * current ) / time ;
};


// Clock2...........................................


const secound = document.querySelector('.sec');
const minute = document.querySelector('.min');
const h = document.querySelector('.hour');

setInterval(() => {
  
let time = new Date();

let current_sec = time.getSeconds();
let current_min = time.getMinutes();
let current_hour = time.getHours();

secound.style.transform = `rotate(${clock2( 60 , current_sec )}deg)`
minute.style.transform = `rotate(${clock2( 60 , current_min )}deg)`
h.style.transform = `rotate(${clock2( 12 , current_hour )}deg)`

}, 1000);

function clock2 ( time , current ){
 return ( 360 * current ) / time ;
};



