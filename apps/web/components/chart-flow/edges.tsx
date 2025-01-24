import { Edge } from '@xyflow/react';

// export const initialEdges: Edge[] = [
//   { id: 'edge-1', source: 'node-1', sourceHandle: 'b', label: '父子', targetHandle: 't', target: 'node-2' },
//   { id: 'edge-2', source: 'node-1', sourceHandle: 'b', label: '父子', style: { stroke: 'red' }, targetHandle: 't', target: 'node-3' },
// ];


export const initialEdges = [
  { id: 'a1-a2', source: 'A-1', sourceHandle: 'b', label: '兄弟', targetHandle: 't', target: 'A-2' },
  { id: 'a2-b', source: 'A-2', sourceHandle: 'b', label: "父子", targetHandle: 't', target: 'B' },
  { id: 'a2-c', source: 'A-2', sourceHandle: 'b', label: "父子", targetHandle: 't', target: 'C' },
];