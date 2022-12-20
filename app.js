// const nextBtn = document.querySelector('.nextBtn');
// const prevBtn = document.querySelector('.prevBtn');
// const container = document.querySelector('.images')

//DECLARATIONS
const submit_btn = document.querySelector('.submit_btn');

const date = document.querySelector('.date_value');

const place = document.querySelector('.place_of_meeting');

const chapter = document.querySelector('.chapter');

const presided_by = document.querySelector('.presided_by');

const main_speaker = document.querySelector('.main_speaker');

const first_timer = document.querySelector('.first_timer');

const members = document.querySelector('.members');

const non_members = document.querySelector(".non_members");

const field_reps = document.querySelector(".field_reps");

const total_attendance = document.querySelector(".total_attendance");

const attendance_div = document.querySelector('.attendance4');

const amount = document.querySelector(".amount");

const intl = document.querySelector(".intl");

const people = document.querySelector(".people");

const salvation = document.querySelector(".salvation");

const baptism = document.querySelector(".baptism");

const first_time = document.querySelector(".first_time");

const decision = document.querySelector(".decision");

const membership = document.querySelector(".membership");

const others = document.querySelector(".others");

const prepared = document.querySelector(".prepared");

const sign_in = document.getElementById("sign_in");

const create = document.getElementById("create_one");

// GRAB SIGN UP AND LOGIN CLASS

const login = document.querySelector(".login")

const sign_up = document.querySelector(".sign_up")

console.log(sign_up);

// FUNCTIONS

// SIGN IN PAGE

let isRegister = true;

function showLogin() {
 login.classList.toggle('show');
 sign_up.classList.toggle('show');



 //if (isRegister) {
  // sign_up.classList.add('show');
 //}

 //else {
  //login.classList.add('show');
 //}

 //isRegister = !isRegister;
}





//function to add total numbers of attendance...
function addAttendance() {
 let f, m, n, r;

 // f = ((first_timer.value == "") ? parseInt(first_timer.value + 0) : parseInt(first_timer.value));

 if (first_timer.value == "") {
  f = parseInt(first_timer.value + 0)
 }
 else {
  f = parseInt(first_timer.value);
 }

 m = ((members.value == "") ? parseInt(members.value + 0) : parseInt(members.value));

 n = ((non_members.value == "") ? parseInt(non_members.value + 0) : parseInt(non_members.value));

 r = ((field_reps.value == "") ? parseInt(field_reps.value + 0) : parseInt(field_reps.value));


 total_attendance.value = f + m + n + r;
}


//FUNCTION TO APPEND NAIRA SIGN

// function appendNaira() {
//  amount.value = 'N';
//  intl.value = 'N';

// }

// appendNaira();

const sendData = () => {
 console.log(date.value);
 console.log(place.value);
 console.log(chapter.value);
 console.log(presided_by.value);
 console.log(main_speaker.value);
 console.log(first_timer.value);
 console.log(members.value);
 console.log(non_members.value);
 console.log(field_reps.value);
 console.log(total_attendance.value);
 console.log(amount.value);
 console.log(intl.value);
 console.log(people.value);
 console.log(salvation.value);
 console.log(baptism.value);
 console.log(first_time.value);
 console.log(decision.value);
 console.log(membership.value);
 console.log(others.value);
 console.log(prepared.value);
}

// EVENT LISTENERS
submit_btn.addEventListener("click", sendData);
sign_in.addEventListener('click', showLogin);
create.addEventListener('click', showLogin);
attendance_div.addEventListener("input", addAttendance);
