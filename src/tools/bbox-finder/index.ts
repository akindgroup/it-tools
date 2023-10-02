import { Code } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Bbox finder',
  path: '/bbox-finder',
  description: 'debug',
  keywords: [],
  component: () => import('./bbox-finder.vue'),
  icon: Code,
  createdAt: new Date('2023-10-02'),
});
