import { Edge } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'edge-1', source: 'node-1', sourceHandle: 'b', label: '父子', targetHandle: 't', target: 'node-2' },
  { id: 'edge-2', source: 'node-1', sourceHandle: 'b', label: '父子', style: { stroke: 'red' }, targetHandle: 't', target: 'node-3' },
];