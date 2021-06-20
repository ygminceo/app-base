import { performance, PerformanceObserver } from 'perf_hooks';

export class Profiler {
  private lastMark: string;
  constructor() {
    performance.mark('Start');
    this.lastMark = 'Start';

    const observer = new PerformanceObserver((items) => {
      console.warn(items.getEntries());
      items.getEntries().forEach((entry) => console.warn(`${entry.name}: ${entry.duration}`));
      performance.clearMarks();
      observer.disconnect();
    });
    observer.observe({ entryTypes: ['measure'] });
  }

  mark(name: string) {
    performance.mark(name);
    this.measure(`${this.lastMark} -> ${name}`, this.lastMark, name);
    this.lastMark = name;
  }

  measure(name: string, start?: string, end?: string) {
    performance.measure(name, start, end);
  }
}
