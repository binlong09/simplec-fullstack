import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Calendar from '../components/Calendar/Calendar';
import TodoList from '../components/TodoList/TodoList';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { Layout } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
];

const events = [
  {
    title: 'Do nothing',
    start: '2019-03-06T12:30:00',
    // end: '2019-03-08',
    allday: false
  },
  {
    title: 'Do nothing1',
    start: '2019-03-06T01:30:00',
    // end: '2019-03-08',
    allday: false
  }
]


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
            { data.map(item => (
              <TodoList item={item}/>
            ))}

            </Sider>
            <div className = 'home-calendar_wrapper' style = {{marginLeft: 300}}>
            <Content style={{ height: "90%" }}>
              <Calendar events={events}/>
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

Home = DragDropContext(HTML5Backend)(Home);

export default connect(mapStateToProps, null)(Home);
