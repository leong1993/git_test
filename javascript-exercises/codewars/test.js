const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'The is the florious test-content'

container.appendChild(content);

const pRed = document.createElement('p');

pRed.textContent = 'Hey I\'m red!';
pRed.style.color = 'Red';

container.appendChild(pRed);

const h3Test = document.createElement('h3');

h3Test.style.color = 'Blue';
h3Test.innerText = 'I\'m a blue h3!';

container.appendChild(h3Test);

const newContainer = document.createElement('div');

newContainer.style.backgroundColor = 'pink';

newContainer.style.border = '2px solid red';

// newContainer.style['background-color'] = 'pink';

container.appendChild(newContainer);

const h1Text = document.createElement('h1');

h1Text.innerText = 'I\'m in a div';

const pText = document.createElement('p');

pText.innerText = 'ME TOO!'

newContainer.appendChild(h1Text);
newContainer.appendChild(pText);
