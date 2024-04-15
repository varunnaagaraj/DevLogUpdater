import { Flex, Layout } from 'antd';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import {
  contentStyle,
  headerStyle,
  layoutStyle,
  siderStyle,
} from './layoutConstants';
import HeaderBar from './fragments/HeaderBar';
import Filters from './fragments/Filters';
import Integrations from './fragments/Integrations';
import NavMenu from './fragments/NavMenu';
import WelcomeCard from './fragments/WelcomeCard';
import AddTaskCard from './fragments/AddTask';
import TaskContainer from './fragments/TaskContainer';
import CalendarContainer from './fragments/CalendarContainer';

const { Header, Sider, Content } = Layout;

function Container() {
  return (
    <Flex>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <HeaderBar />
        </Header>
        <Layout>
          <Sider width="14%" style={siderStyle}>
            <NavMenu />
            <Filters />
            <Integrations />
          </Sider>
          <Content style={contentStyle}>
            <WelcomeCard />
            <TaskContainer />
          </Content>
          <Sider width="30%" style={siderStyle}>
            <CalendarContainer />
            <AddTaskCard />
          </Sider>
        </Layout>
      </Layout>
    </Flex>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </Router>
  );
}
