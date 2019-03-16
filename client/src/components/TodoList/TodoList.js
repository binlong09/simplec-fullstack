import React, { Component } from 'react';
import { List, Typography, Layout } from 'antd';
import { DragSource } from 'react-dnd';

const { Sider } = Layout;
/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {

    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export class TodoList extends Component {
	render () {
		const { isDragging, connectDragSource, item } = this.props;
		console.log(this.props)
		return connectDragSource(
			<div>
				<List
					// header={<div>Header</div>}
					// footer={<div>Footer</div>}
					bordered
					// dataSource={data}
					// renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
					// renderItem={item}
				>
					<List.Item>
						{item}
					</List.Item>
				</List>

				{/* <h1>Helloooooooooo</h1> */}
			</div>
		);
	}
};

export default DragSource('todolist', cardSource, collect)(TodoList);