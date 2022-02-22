import React, { Component } from "react";

import { Menu, Image, Input, Button, Avatar, Popover } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, BellFilled, WechatFilled } from '@ant-design/icons';

const { SubMenu } = Menu;

 class MenuBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
   
  render() {
    const { current } = this.state;
   const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item  >
                <Image
                preview={false}
            width={90}
            src={require("../../assets/Group.png").default}
            />
        </Menu.Item>
        <div style={{paddingLeft:300}}>
        <Input style={{width:250}}placeholder="Search & Find" />
        </div>
        <div style={{paddingLeft:100}}>
        <Button style={{borderRadius:10}} type="primary">+ Add</Button>
    
        </div>
        <div  style={{paddingLeft:150}}>
        <Popover placement="bottom" content={content} title="Title" trigger="hover">
        <BellFilled style={{fontSize:20 ,color:"grey"}} />
    </Popover>
        </div>
        <div style={{paddingLeft:20}}>
            <WechatFilled style={{fontSize:20 ,color:"grey"}} />
        </div>
        <div style={{paddingLeft:20}}>
            Clarence Russell
        </div>
        <div style={{paddingLeft:20}}>
        <Popover placement="bottom" content={content} title="Title" trigger="hover">

               
        <Avatar src={<Image   preview={false} src={require("../../assets/Picture.png").default} style={{ width: 32 }} />} />
</Popover>
        </div>
       
      </Menu>
    );
  }
}

export default MenuBar