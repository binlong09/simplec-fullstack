import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Calendar from '../components/Calendar/Calendar';
import TodoList from '../components/TodoList/TodoList';

import { Layout } from 'antd';

export class Home extends Component {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <div>
        {/* <div className = 'home-navbar_wrapper'>
          <NavBar />
        </div>
        <div className = 'home-todoList_calendar_wrapper'>
          <div className = 'home-todoList_wrapper'>
            <TodoList />
          </div>
          <div className = 'home-calendar_wrapper'>
            <Calendar />
          </div>
        </div> */}
        <Layout >
            <NavBar />
          <Layout >
            <Sider
              className = 'home-todoList_wrapper'
              width = {300}
              theme = "light"
            >
              <TodoList />
            </Sider>
            <div className = 'home-calendar_wrapper' style = {{marginLeft: 300}}>
            <Content style={{ height: "90%" }}>
              <Calendar />
            </Content>
            </div>

          </Layout>
        </Layout>


      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Home);
