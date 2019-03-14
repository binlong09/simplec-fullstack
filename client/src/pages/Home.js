import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Calendar from '../components/Calendar/Calendar';
import TodoList from '../components/TodoList/TodoList';

export class Home extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth;

    return (
      <div>
        {/* { !isAuthenticated ? <Redirect to='/' />
        :
        <strong>{ user ? `Welcome ${user.name}` : ''}</strong>} */}
        <div className = 'home-navbar_wrapper'>
          <NavBar />
        </div>
        <div className = 'home-todoList_calendar_wrapper'>
          <div className = 'home-todoList_wrapper'>
            <TodoList />
          </div>
          <div className = 'home-calendar_wrapper'>
            <Calendar />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Home);
