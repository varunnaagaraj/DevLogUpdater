import { HistoryOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';

export default function NavMenu() {
  return (
    <Card
      style={{
        backgroundColor: 'white',
        margin: '0 25px 20px 25px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
      }}
    >
      <Button
        type="text"
        icon={<HomeOutlined size={20} />}
        style={{ fontSize: '16px', width: '100%', textAlign: 'left' }}
      >
        Dashboard
      </Button>
      <Button
        type="text"
        icon={<HistoryOutlined size={20} />}
        style={{ fontSize: '16px', width: '100%', textAlign: 'left' }}
      >
        History
      </Button>
    </Card>
  );
}
