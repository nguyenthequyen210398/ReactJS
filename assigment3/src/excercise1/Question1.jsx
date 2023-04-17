import { createElement } from 'react';

function question1() {
  return createElement(
    'div',
    {  },
    createElement('h1', null,'Hello Word'),
    createElement('p', null,'My first paragraph.')
    
  );
}

export default question1;