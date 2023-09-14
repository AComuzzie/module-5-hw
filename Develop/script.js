// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const locationSettings = {};
dayjs.locale(locationSettings);

$(function () {

  const currentTime = dayjs().format('h');

  function timeBlockColor() { 
    $(".time-block").each(function () {
      const timeBlock = parseInt(this.id);
      $(this).toggleClass("past", timeBlock < currentTime); 
      $(this).toggleClass("present", timeBlock === currentTime);
      $(this).toggleClass("future", timeBlock > currentTime);
    });
  }
  function textInput() {
    $('.save-btn').on('click', function () {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
  });
  }
  function colorSwitch() {
    $('.time-block').each(function () {
      const blockHour = parseInt(this.id);
      if (blockHour == currentTime) {
        $(this).removeClass('past future').addClass('present');
      } else if (blockHour < currentTime) {
        $(this).removeClass('present future').addClass('past');
      } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
  }

  $('time-block').each(function () {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).siblings('.description').val(value);
  });

  function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D YYYY');
    const currentTime = dayjs().format('h:mm a');
  }
 
  // TODO: Add code to display the current date in the header of the page.
  currentTime();
  textInput();
  colorSwitch();
setInterval(updateTime, 1000);
});