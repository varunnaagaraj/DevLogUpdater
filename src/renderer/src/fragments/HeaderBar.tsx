import {
  DownloadOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Flex, Input } from 'antd';
import Logo from '../assets/Log.png';
import './HeaderBar.css';

export default function HeaderBar() {
  return (
    <Flex style={{ width: '95vw' }}>
      <img
        src={Logo}
        alt="Log.dev"
        width="100px"
        height="100px"
        style={{ zIndex: 2, marginLeft: '-20px' }}
      />
      <div
        style={{
          margin: '25px 90px',
          width: '55.5vw',
          height: '50px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Input
          placeholder="Search Tasks"
          prefix={<SearchOutlined />}
          style={{
            width: '53vw',
            borderRadius: '10px',
            borderColor: 'rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
      <Button
        type="default"
        style={{
          backgroundColor: '#f95300c2',
          border: 'none',
          margin: '35px 0 35px 80px',
        }}
        icon={<DownloadOutlined />}
        onClick={() => {
          console.log('clicked poweroff');
        }}
      >
        Generate Report
      </Button>
      <Button
        style={{ margin: '35px 0 35px 20px' }}
        type="primary"
        icon={<SettingOutlined />}
        onClick={() => console.log('clicked settings')}
      />

      <Button
        style={{ margin: '35px 0 35px 20px' }}
        type="primary"
        icon={<UserOutlined />}
        onClick={() => console.log('clicked user')}
      />
    </Flex>
  );
}
