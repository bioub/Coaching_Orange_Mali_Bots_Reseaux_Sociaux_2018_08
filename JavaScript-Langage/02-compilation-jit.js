const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

const sum = (a, b) => a + b;

performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();

performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();


performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();


performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();


performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();


performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();


performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();


performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();


performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();


performance.mark('Begin');
sum(1, 2);
performance.mark('End');
performance.measure('Done', 'Begin', 'End');
performance.clearMarks();

