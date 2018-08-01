const fs = require('fs-extra');
const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });


async function removeAndCreateDir()
{
  await fs.remove('./dest');
  await fs.mkdir('./dest');
}

async function copyFile(src, dest) {
  const buffer = await fs.readFile(src);
  await fs.writeFile(dest, buffer);
}

async function copyAllFiles()
{
  const files = await fs.readdir('./source'); // ['a.txt', 'b.txt', 'c.txt']  
  const copyPromises = files.map((file) => copyFile('./source/' + file, './dest/' + file));
  
  await Promise.all(copyPromises);
}

async function main() {
  performance.mark('Begin');
  await removeAndCreateDir();
  await copyAllFiles();
  performance.mark('End');
  performance.measure('Done', 'Begin', 'End');
}

main();