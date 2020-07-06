import React, { useEffect } from "react";
import { ISetting } from "@/interface/setting.interface";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoginOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import styles from "./header.less";
import { observer, inject } from "mobx-react";
import * as api from "@/api";
import { Menu, Dropdown, Avatar } from "antd";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import eventEmiter from "@/utils/eventEmiter";
import Link from "@/components/link";
import TimeTick from "@/components/timetick";
import { eventEmitterType } from "@/enum";
interface Iprops {
  setting: ISetting;
}
const src =
  "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png";
const Header: React.SFC<RouteComponentProps & Iprops> = (props) => {
  const gotoSystem = () => {
    props.history.push("/system/list");
  };
  const handleChange = () => {
    props.setting.setCollaps();
  };
  const userLogout = async () => {
    try {
      await api.userLogout();
      eventEmiter.emit(
        eventEmitterType.redirect,
        `/user/login?redirect=${
          window.location.pathname + window.location.search
        }`
      );
    } catch (error) {
      return false;
    }
  };
  const menu = (
    <Menu>
      <Menu.Item style={{ color: "red" }} onClick={userLogout}>
        <LoginOutlined />
        确认退出?
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    eventEmiter.on(eventEmitterType.redirect, (url) => {
      props.history.push(url);
    });
    eventEmiter.on(eventEmitterType.getCurrentUser, () => {
      props.setting.getCurrentUser();
    });
    eventEmiter.emit(eventEmitterType.getCurrentUser);
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className={styles.wrap}
      style={{ marginLeft: props.setting.collaps ? "80px" : "240px" }}
    >
      <div className={styles.action}>
        <span onClick={handleChange} className={styles.button}>
          {props.setting.getCollaps ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )}
        </span>
      </div>
      <div onClick={gotoSystem}>
        <WindowsOutlined style={{ color: "#0997F7", marginRight: 4 }} />
        <Link text={"公司系统列表入口"} />
      </div>
      <div className={styles.username}>
        <Avatar size="small" className={styles.avatar} src={src} alt="avatar" />
        <span>{props.setting.userName}</span>
      </div>
      <TimeTick />
      <div className={styles.username}>
        <Dropdown overlay={menu} placement="bottomCenter">
          <span style={{ color: "red" }}>退出系统</span>
        </Dropdown>
      </div>
    </div>
  );
};
export default withRouter(inject("setting")(observer(Header)));
