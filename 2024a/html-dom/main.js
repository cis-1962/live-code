const callButton = document.getElementById('call-button');

const root = document.getElementById('root');

callButton.addEventListener('click', (evt) => {
  const myDiv = document.createElement('div');
  myDiv.innerHTML = `Tuneer`;

  myDiv.style.top = `${Math.random() * 30}rem`;
  myDiv.style.left = `${Math.random() * 30}rem`;

  root.appendChild(myDiv);
});

function terriblePitfallOfNotUsingSemicolons() {
  const hello = 5;
  const i = hello[0].forEach(() => {
    console.log('hehehaw');
  });
}
