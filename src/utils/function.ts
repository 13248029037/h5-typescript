import { message } from "antd";
import JSEncrypt from "jsencrypt";
import { pubKey } from "@/config";
export const getQueryString = (name: string): string | null => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};
export const debounce = (fn: (params?) => void, time: number = 300) => {
  let timer: NodeJS.Timeout = null;
  return (value: string) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(value);
      clearTimeout(timer);
    }, time);
  };
};
export const throttle = (fn: (params?) => void, time: number = 300) => {
  let timer: NodeJS.Timeout = null;
  return (value: string) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn(value);
      clearTimeout(timer);
    }, time);
  };
};
export const Trim = (str: string) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
};
export const fetchRequest = async (url: string, token: string) => {
  try {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      cache: "default",
    });
  } catch (error) {
    message.error(error);
  }
};
export const encryptionData = (data: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(pubKey);
  return encrypt.encrypt(data);
};
export const sleep = (times: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, times);
  });
};
export const requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (a) {
      return window.setTimeout(a, 1e3 / 60, new Date().getTime());
    }
  );
})();
export const cancelAnimFrame = (function () {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    function (id: number) {
      clearTimeout(id);
    }
  );
})();
