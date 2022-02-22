import React, { Component } from "react";

import { Card, Avatar, Row, Col, Image, Divider, Collapse } from "antd";
//import Icon from '@ant-design/icons';
import Icon, {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartOutlined,
  DeleteOutlined,
  MailOutlined,
  GlobalOutlined,
  PhoneOutlined,
  HeartFilled
} from "@ant-design/icons";
import MenuBar from "../../components/MenuBar/MenuBar";
import CustomCarousel from "../../components/Carousel/index";

const { Meta } = Card;
const { Panel } = Collapse;
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  callback = key => {
    console.log(key);
  };
  render() {
    return (
      <>
        <MenuBar />
        <div className="container">
          <Row justify="space-between">
            <Col>
              <h2>Dashboard</h2>
            </Col>
            <Col>
              <Card bordered={true} style={{ height: 100 }}>
                currently learning
                <br />
                <Row justify="space-between">
                  <Col>
                    {" "}
                    <Image
                      preview={false}
                      width={20}
                      src={require("../../assets/1.png").default}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <h2>England</h2>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row style={{ paddingTop: 30 }}>
            <Col span={24}>
              <Image
                preview={false}
                //width={"100%"}
                src={require("../../assets/header-4.png").default}
              />
            </Col>
          </Row>
          <div style={{ position: "absolute", bottom: 256 }}>
            <Image
              preview={false}
              //width={"100%"}

              src={require("../../assets/9.png").default}
            />
          </div>
          <div style={{ position: "absolute", bottom: 280, left: 350 }}>
            <h2 style={{ color: "white" }}>Welcome back, Clarence</h2>

            <h4 style={{ color: "white" }}>
              Ta-da! You're up to date. &#129395;
            </h4>
          </div>
          <Row style={{ paddingTop: 30 }}>
            <Col>
              <h2>Events</h2>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <CustomCarousel />
            </Col>
            <Col span={8}>
              <Divider orientation="left" plain>
                <h3> EVENT TODAY</h3>
              </Divider>
              <Col style={{ paddingLeft: "30px" }}>
                <Card style={{ width: "270px" }}>
                  <Row>
                    <Col>
                      <Image
                        width={"40px"}
                        preview={false}
                        src={
                          require("../../assets/thumb-notification@2x.png")
                            .default
                        }
                      />
                    </Col>
                    <Col style={{ paddingLeft: "10px" }}>
                      <Col>10:30AM</Col>
                      <Col>
                        <b>Webinar:the basics of...</b>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col style={{ paddingLeft: "30px", paddingTop: "30px" }}>
                <Card style={{ width: "270px" }}>
                  <Row>
                    <Col>
                      <Image
                        width={"40px"}
                        preview={false}
                        src={require("../../assets/thumbnail@3x.png").default}
                      />
                    </Col>
                    <Col style={{ paddingLeft: "10px" }}>
                      <Col>2:15 PM</Col>
                      <Col>
                        <b>Team Building Activity&#xe11d;</b>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              {" "}
              <b style={{ fontSize: "20px" }}> Activity</b>
            </Col>
            <Col span={22}>
              <Divider />
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "10px" }} span={24}>
              <Collapse onChange={() => this.callback}>
                <Panel
                  header="This is panel header 1"
                  key="1"
                  onChange={() => this.callback}
                >
                  <p>hi</p>
                </Panel>
              </Collapse>
            </Col>
            <Col style={{ padding: "10px" }} span={24}>
              <Collapse defaultActiveKey={["1"]}>
                <Panel
                  header="This is panel header 2"
                  key="2"
                  onChange={() => this.callback}
                >
                  <p>hi</p>
                </Panel>
              </Collapse>
            </Col>
            <Col style={{ padding: "10px" }} span={24}>
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="This is panel header 3" key="3">
                  <p>hi</p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row style={{ paddingTop: "30px" }}>
            <Col span={8}>
              <Image
                preview={false}
                width={"100%"}
                height={"320px"}
                src={require("../../assets/77.png").default}
              />
            </Col>
            <Col style={{ paddingLeft: "20px" }} span={16}>
              <Divider orientation="left" plain>
                <h2> Progerss</h2>
              </Divider>
              <Row justify="start">
                <Col style={{ padding: "10px" }}>
                  <Card.Grid style={{ width: "180px", height: "80px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Col>Total</Col>
                        <Col>Webinar</Col>
                      </Col>
                      <Col>
                        <h1>9</h1>
                      </Col>
                    </Row>
                  </Card.Grid>
                </Col>
                <Col style={{ padding: "10px" }}>
                  <Card.Grid style={{ width: "180px", height: "80px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Col>Pendings</Col>
                        <Col>Assignments</Col>
                      </Col>
                      <Col>
                        <h1>0</h1>
                      </Col>
                    </Row>
                  </Card.Grid>
                </Col>
                <Col style={{ padding: "10px" }}>
                  <Card.Grid className="card1" style={{ width: "180px", height: "80px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Col>Total</Col>
                        <Col>Units</Col>
                      </Col>
                      <Col>
                        <h1>5</h1>
                      </Col>
                    </Row>
                  </Card.Grid>
                </Col>
                <Col style={{ padding: "10px" }}>
                  <Card.Grid style={{ width: "180px", height: "80px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Col>Total</Col>
                        <Col>Readings</Col>
                      </Col>
                      <Col>
                        <h1>14</h1>
                      </Col>
                    </Row>
                  </Card.Grid>
                </Col>
                <Col style={{ padding: "10px" }}>
                  <Card.Grid style={{ width: "180px", height: "80px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Col>Total</Col>
                        <Col>Videos</Col>
                      </Col>
                      <Col>
                        <h1>5</h1>
                      </Col>
                    </Row>
                  </Card.Grid>
                </Col>
              </Row>
              <Row style={{ padding: "10px" }}>
                <Col>
                  <Image
                    preview={false}
                    width={"650px"}
                    height={"50px"}
                    src={
                      require("../../assets/Oval + Oval + Oval Mask.png")
                        .default
                    }
                  />
                </Col>
                <div style={{ position: "absolute", bottom: 25, left: 120 }}>
                  <Row justify="start" style={{ color: "white" }}>
                    <Col>
                      <b>Confirm your account details </b>
                    </Col>
                    <Col style={{ paddingLeft: "10px" }}>
                      {" "}
                      Please consfirm your email and phone number &#128546;
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
