function like(thing) {
  return 'I like ' + thing;
}

function love(thing) {
  return ` but I love ${thing}`;
}

const sentence = `<p> ${like('apples')}, ${love('strawberries')} .</p>`;

document.querySelector('.interpolation').innerHTML = sentence;
