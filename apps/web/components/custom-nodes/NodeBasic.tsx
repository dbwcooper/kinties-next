import { NodeProps, Node, Handle, Position } from '@xyflow/react';

export type NodeBasicProps = Node<
  {
    label: string;
  },
  'nodeBasic'
>;

export function NodeBasic(props: NodeProps<NodeBasicProps>) {
  const { data } = props;
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id="t"
        className='!bg-blue-500'
      />
      {/* Add nodrag to make the node not draggable */}
      <div className='border bg-white px-4 py-1 rounded'>
        <div>{data.label}</div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
      />
      <Handle
        id="l"
        type="source"
        position={Position.Left}
      />
      <Handle
        id="r"
        type="source"
        position={Position.Right}
      />
    </>
  );
}