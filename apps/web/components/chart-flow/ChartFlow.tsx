import Dagre from '@dagrejs/dagre';
import React, { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Node,
  Edge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlowProvider,
  addEdge,
  Connection,
} from '@xyflow/react';
import { initialNodes } from './nodes';
import { initialEdges } from './edges';
import { NodeBasic } from '../custom-nodes/NodeBasic';
import '@xyflow/react/dist/style.css';
import { Button } from '@workspace/ui/components/button';

const defaultEdgeOptions = { animated: true };

const getLayoutedElements = (nodes: Node[], edges: Edge[], options: { direction: string }) => {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: options.direction });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    g.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 0,
      height: node.measured?.height ?? 0,
    }),
  );

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const position = g.node(node.id);
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      const x = position.x - (node.measured?.width ?? 0) / 2;
      const y = position.y - (node.measured?.height ?? 0) / 2;

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};



const LayoutFlow = () => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onLayout = useCallback(
    (direction: string) => {
      console.log(nodes);
      const layouted = getLayoutedElements(nodes, edges, { direction });

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);

      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges],
  );
  const nodeTypes = useMemo(() => ({ nodeBasic: NodeBasic }), []);

  const onConnect = useCallback(
    (connection: Connection) => {
      console.info('connection: ', connection)
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges],
  );
  return (
    <div
      className='w-[100dvw] h-[100dvh]'
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onClick={(event) => console.log(event)}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
      >
        <MiniMap />
        <Background color="#ccc" variant={BackgroundVariant.Dots} />
        <Controls />
        <Panel position="top-right" className='flex gap-1'>
          <Button onClick={() => onLayout('TB')}>vertical</Button>
          <Button onClick={() => onLayout('LR')}>horizontal</Button>
        </Panel>
        <Panel position="top-left" className='border rounded-lg px-4 py-2 bg-white'>赵氏家族</Panel>
      </ReactFlow>
    </div>
  );
};


export const ChartFlow = () => {
  return (
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  )
}