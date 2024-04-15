import { CollapseProps, Collapse } from 'antd';
import React from 'react';

function TaskContainer() {
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
  ];

  return (
    <div style={{ margin: '70px 20px' }}>
      <Collapse items={items} defaultActiveKey={['1']} />
    </div>
  );
}

export default TaskContainer;
