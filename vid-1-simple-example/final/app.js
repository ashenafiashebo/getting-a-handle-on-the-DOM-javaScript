const mylist = document.getElementsByTagName('li');

for (let i = 0; i < mylist.length; i += 1) {
  mylist[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}


