const singleQuotes = '<p>Single quotes</p>';
const doubleQuotes = "<p>Double quotes</p>";
const tempLit = `<p>Template Literal</p>`;

const result = singleQuotes + doubleQuotes + tempLit;
document.querySelector('.basic').innerHTML = result;
