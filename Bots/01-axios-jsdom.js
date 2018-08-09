const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function getSearchResultsFromGoogle(query) {
  // Doc axios : https://github.com/axios/axios
  // GET /search?q=Orange+Mali HTTP/1.1
  // Host: www.google.fr
  const res = await axios.default.get('/search', {
    baseURL: 'https://www.google.com',
    params: {
      q: query,
    },
  });

  if (res.status === 200) {
    const dom = new JSDOM(res.data);
    const divSearch = dom.window.document.querySelector('#search'); // la balise <div id="search">

    // tous les liens de chaque balise h3 (dont le grand parent est une balise ol)
    const linkList = divSearch.querySelectorAll('ol > * > h3 a');
    linkList.forEach(a => {
      // ex de lien /url?q=https://www.orangemali.com/&sa=U&ved=0ahUKEwi51YnE_9zcAhXPy4UKHc_tBT0QFggVMAA&usg=AOvVaw3GATcaauMfFda7QaLriU1z
      const url = new URL(a.href, 'https://www.google.com');
      console.log(url.searchParams.get('q'));
    });
  }
}

getSearchResultsFromGoogle('Orange Mali')
  .catch((err) => console.log(err));

