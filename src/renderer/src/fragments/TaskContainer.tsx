import { Card, Collapse, CollapseProps } from 'antd';
import React from 'react';

export default function TaskContainer() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
      key: '5',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
      key: '6',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
  ];

  return (
    <Card
      style={{
        borderRadius: '20px',
        marginBlock: '25px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        overflow: 'scroll',
      }}
    >
      <Collapse
        items={items}
        defaultActiveKey={['1']}
        style={{ width: '53vw', textAlign: 'left', marginBlock: '10px' }}
        size="small"
        accordion
      />
    </Card>
  );
}
