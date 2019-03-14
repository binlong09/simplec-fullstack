import React from 'react';
import { List, Typography, Layout } from 'antd';

const { Sider } = Layout;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const TodoList = () => {
	return (
		<div className = 'component-todoList-wrapper'>
			<Sider>
			<List
				header={<div>Header</div>}
				footer={<div>Footer</div>}
				bordered
				dataSource={data}
				renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
			/>
			</Sider>
		</div>
	);
};

export default TodoList;