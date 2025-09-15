import { loadItem } from "./nail-product.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const appointment = JSON.parse(localStorage.getItem('app')) || [];

function saveToLocalStorage(){
  localStorage.setItem('app',JSON.stringify(appointment));
}

function loadBookingSeletor() {
  const service = loadItem();
  let html = '';
  service.forEach(selector => {
    html += `
        <div class="selector">
        <input type="radio" id="${selector.getId()}"
        class="js-service-button"
        name="service" value="${selector.getPrice()}">
        <br>
        <label for="${selector.getId()}">
          ${selector.getType()}${selector.getItem()}
        </label>
        <br>
        <span>${selector.getInfor()}</span>
        <br>
        <span>$${selector.getPrice()}</span>
      </div>
    `;
  });
  document.querySelector('.selector-service').innerHTML = html;
  const container = document.querySelectorAll('.selector');
  container.forEach(container => {
    const button = container.querySelector('.js-service-button');
    button.addEventListener('click', () => {
      let html2 ='';
      const infor = {
        id:button.id,
        price:button.value
      };     
    document.querySelector('.selector-service').innerHTML = html2;
    const date = dayjs();
    let dateValue = '';
    html2 += `
      <div class="appointement-infor">
        <label for="name">稱呼:</label>      
        <input type="text" name="name" id="name">
        <label for="phone">電話:</label>
        <input type="text" name="phone" id="phone">
        <span class="wrong"></span>

        <label for="appointment">預約時間:</label>
        <input type="date" name="appointment" id="appointment">
        <br>
        <select name="appointment" id="timeList">
          <option value="">選擇預約時間</option>
        </select>
        <span class="wrong2"></span>
        <button class="button-appoint">提交預約</button>
      </div>
      <div>

      </div>
    `;
    document.querySelector('.selector-service').innerHTML = html2;

    document.getElementById('appointment').addEventListener('change', e => {
      dateValue = e.target.value;

      document.getElementById('timeList').innerHTML = 
      `<option value="">選擇預約時間</option>${loadAppointment(dateValue)}`;
    });
    document.querySelector('.button-appoint').addEventListener('click', () => {
      const timeValue = document.getElementById('timeList').value;
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value; 
      if(phone.length < 8){
        const wrong = document.querySelector('.wrong');
        wrong.style.color = "red";
        wrong.innerHTML = '電話必需大於8位數字!';
      }else if(timeValue === ''){
        const wrong2 = document.querySelector('.wrong2');
        wrong2.style.color = "red";  
        wrong2.innerHTML = '預約時間不能填空'

      }
      else{     
        document.querySelector('.wrong').innerHTML = '';
        document.querySelector('.wrong2').innerHTML = '';
        const appointementInfor = {name, phone,infor,dateValue,timeValue}
        appointment.push(appointementInfor);
        console.log(appointementInfor);
        console.log(appointment);      
        saveToLocalStorage();
      }
      });
      });
    });
}
function loadAppointment(dateValue) {
  const timeList = ['11:00-12:30','13:00-14:30',
  '15:00-16:30','17:00-18:30','19:00-20:00','20:00-21:30'];
  let html = '';
  timeList.forEach(time => {  
    const isBooked = appointment.some(app => 
    app.dateValue === dateValue && app.timeValue === time);
    if(!isBooked){
    html += `<option value="${time}">${time}</option>`
    }
  });
  console.log(html);
  
  return html;

}
loadBookingSeletor();