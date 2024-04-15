import { Flex, Progress } from 'antd';
import { wrapperStyle } from '../layoutConstants';

export default function ProgressTracker() {
  const currentDate = new Date();
  return (
    <div style={wrapperStyle}>
      <span>{currentDate.toString()?.split(' ')?.[1] || ''}</span>
      <Flex
        wrap="wrap"
        gap="middle"
        style={{ marginTop: 16 }}
        justify="center"
        align="center"
      >
        <Progress
          type="circle"
          percent={50}
          steps={{ count: 30, gap: 5 }}
          trailColor="rgba(0, 0, 0, 0.4)"
          strokeWidth={20}
          strokeColor="ivory"
          size={300}
        />
      </Flex>
    </div>
  );
}
