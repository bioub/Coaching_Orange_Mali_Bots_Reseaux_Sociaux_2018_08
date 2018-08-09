const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function getLatestNews() {
  const res = await axios.default.get('https://malijet.com');

  if (res.status === 200) {
    const dom = new JSDOM(res.data);

    const links = dom.window.document.querySelectorAll('#box_paged_latest > div > a');

    for (const link of links) {
      console.log(link.textContent);
      console.log(link.href);

      await getArticleContent(link.href);
    }
  }
}

async function getArticleContent(url) {
  const res = await axios.default.get(url);

  if (res.status === 200) {
    const dom = new JSDOM(res.data);

    const articleBody = dom.window.document.querySelector('#article_body').textContent;
    console.log(articleBody);
  }
}

getLatestNews();
