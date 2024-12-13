// src/reportWebVitals.ts
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);  // Cumulative Layout Shift
    onFCP(onPerfEntry);  // First Contentful Paint
    onLCP(onPerfEntry);  // Largest Contentful Paint
    onTTFB(onPerfEntry); // Time to First Byte
  }
};

export default reportWebVitals;
