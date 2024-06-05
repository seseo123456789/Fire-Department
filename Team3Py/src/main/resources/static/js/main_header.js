const year_changer = () => {
  const selectYear = document.querySelector('#yearChanger').value;
  location.href=`/?selectYear=${selectYear}`;
}

const gomain = () => {
  location.href='/';
}