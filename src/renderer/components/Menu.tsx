import { EditFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import { boxStyle } from '../layoutConstants';

function AvatarHeader() {
  return (
    <Avatar
      shape="square"
      icon={<UserOutlined />}
      onClick={() => {
        console.log('clicked');
        // TODO: Add popover to handle actions onClick
      }}
    />
  );
}

function Menu() {
  return (
    <Flex style={boxStyle} justify="space-between" align="center">
      {/* <Title level={5}>log.dev</Title> */}
      <EditFilled /> {/* TODO: Add actual Logo */}
      Task Buddy
      <AvatarHeader />
    </Flex>
  );
}

export default Menu;
