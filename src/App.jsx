import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import { WechatOutlined,WeiboOutlined,SearchOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css'
const { RangePicker } = DatePicker;

export default class App extends Component {

  onChange = (date, dateString)=>{
    console.log(date, dateString);
  }

  render() {
    return (
      <div>
        App....
        <button>點我</button>
        <br/>
        <Button type="primary">按鈕1</Button>
        <br/>
        <Button>按鈕1</Button>
        <br/>
        <Button type="link">按鈕1</Button>
        <br/>
        <WechatOutlined />
        <br />
        <WeiboOutlined />
        <br />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <br />
        <DatePicker onChange={this.onChange} />
        <br />
        <RangePicker />
        <br />
      </div>
    );
  }
}