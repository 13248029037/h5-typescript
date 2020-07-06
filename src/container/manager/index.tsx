import React, { useEffect, useState } from "react";
import style from "./index.less";
import Bar from "@/components/bar";
import { Table, Button, Form, Input, Row, Col, message } from "antd";
import { IManager } from "@/interface/manager.interface";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import Modal from "./modal";
import TaddModal from "./tmodal";
import FooterPage from "@/components/footerpage";
import { ISetting } from "@/interface/setting.interface";
import { withRouter } from "react-router-dom";
interface Ires {
  token: string;
}
interface IProps {
  manager: IManager;
  setting: ISetting;
}
const Rights: React.SFC<IProps & RouteComponentProps> = (props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [tmodalVisible, setTmodalVisible] = useState<boolean>(false);
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize] = useState<number>(20);
  const [roleName, setRoleName] = useState<string[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [form] = Form.useForm();
  useEffect(() => {
    searchUserLIst();
    locationIndex();
    // eslint-disable-next-line
  }, [props.setting.userName]);
  const locationIndex = () => {
    if (
      props.setting.userName &&
      props.setting.roleName.indexOf("admin") === -1
    ) {
      props.history.push("/");
    }
  };
  const searchUserLIst = async (
    page_no: number = 1,
    user_name: string = ""
  ) => {
    props.manager.searchUserList({
      page_no,
      page_size: pageSize,
      user_name,
    });
  };
  const onFooterChange = (page_no: number) => {
    setPageNo(page_no);
    searchUserLIst(page_no);
    setSelectedRowKeys([]);
  };
  const handleCancel = () => {
    setModalVisible(false);
    setTmodalVisible(false);
    setUserName("");
  };
  const handleOk = async (data) => {
    const tag = await setRole(userName, data.role_name);
    if (tag) {
      message.success("操作成功");
      setModalVisible(false);
      searchForm();
    }
  };
  const handleModifyOk = async (data) => {
    console.info(userName);
    console.info(selectedRowKeys);
    const tag = await props.manager.setTeam({
      teamName: data.teamName,
      userName: userName ? [userName] : selectedRowKeys, //单个还是批量
    });
    if (tag) {
      message.success("操作成功");
      setTmodalVisible(false);
      setSelectedRowKeys([]);
      searchForm();
    }
  };
  const editOne = (item) => {
    setRoleName(item.user_role || []);
    setUserName(item.user_name);
    setModalVisible(true);
  };
  const editOneForTeam = (item) => {
    setUserName(item.user_name);
    setTmodalVisible(true);
  };
  const clearForm = () => {
    form.setFieldsValue({
      username: undefined,
    });
  };
  const searchForm = async () => {
    const value = await form.getFieldsValue();
    searchUserLIst(pageNo, value.username);
  };
  const setRole = async (user_name: string, role_name: string[]) => {
    return props.manager.setRole({
      user_name,
      role_name,
    });
  };
  const columns = [
    {
      title: "用户名",
      width: 160,
      dataIndex: "user_name",
    },
    {
      title: "用户所属团队",
      width: 160,
      dataIndex: "user_team",
    },
    {
      title: "用户角色",
      width: 160,
      render: (item) => item.user_role && item.user_role.join("、"),
    },
    {
      title: "操作",
      width: 200,
      render: (item) => (
        <div>
          <span className={style.edit} onClick={() => editOne(item)}>
            赋予角色
          </span>
          <span className={style.edit} onClick={() => editOneForTeam(item)}>
            更改团队
          </span>
        </div>
      ),
    },
  ];
  const onSelectChange = (selectedRowKeysFromTable) => {
    setSelectedRowKeys(selectedRowKeysFromTable);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className={style.container}>
      <Form
        form={form}
        layout="inline"
        name="advanced_search"
        className={style["ant-advanced-search-form"]}
      >
        <Row>
          <Col className={style["ant-form-item"]}>
            <Form.Item name="username" label="用户名">
              <Input
                autoComplete="off"
                allowClear={true}
                placeholder="请输入用户名"
              />
            </Form.Item>
          </Col>
          <Col className={style["ant-form-item"]}>
            <Form.Item>
              <Button onClick={searchForm} type="primary">
                查询
              </Button>
              <Button onClick={clearForm} style={{ marginLeft: 10 }}>
                清空
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={style.workflow}>
        <Bar title="用户列表" />
        <Button
          style={{ margin: 10 }}
          type="primary"
          disabled={!selectedRowKeys.length}
          onClick={() => setTmodalVisible(true)}
        >
          批量更改团队
        </Button>
        {`已选择${selectedRowKeys.length}项`}
      </div>
      <Table
        rowSelection={rowSelection}
        rowKey={(record) => record.user_name}
        columns={columns}
        dataSource={props.manager.userList}
        pagination={false}
      />
      <Modal
        role_name={roleName}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modalVisible={modalVisible}
      />
      <TaddModal
        handleOk={handleModifyOk}
        handleCancel={handleCancel}
        modalVisible={tmodalVisible}
      />

      <FooterPage
        onChange={onFooterChange}
        current={pageNo}
        pageSize={pageSize}
        total={props.manager.total}
      />
    </div>
  );
};
export default withRouter(inject("manager", "setting")(observer(Rights)));
