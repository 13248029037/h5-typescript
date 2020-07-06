import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { IProject, IHandleOk } from "@/interface/project.interface";
import { ISetting } from "@/interface/setting.interface";
import style from "./index.less";

import { RouteComponentProps } from "react-router";
interface IProps {
  project: IProject;
  setting: ISetting;
}
const Project: React.SFC<IProps & RouteComponentProps> = (props) => {
  return <div className={style.container}>sdfsdfsdf</div>;
};

export default inject("project", "setting")(observer(Project));
