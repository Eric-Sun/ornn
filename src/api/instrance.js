import axios from 'axios';
import config from '../../config/config.js';
import qs from 'qs';
import iview from 'iview';
import * as ac from '../data'
var URI = config.apiDomain;

var ax = axios.create({
    baseURL: URI,
    timeout: 30000,
    headers: {
        // 'Content-Type':'application/x-www-form-urlencoded',
        'TOKEN': ''
    }
})
var axUploadFile = axios.create({
    baseURL: URI,
    timeout: 30000,
    headers: {
        'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime()    ,
            'TOKEN': ''
    }
})


export var itr = (type, url, params) => {
    if (typeof params !== 'object') {
        params = {};
    }
    let arg = qs.stringify(params);
    // url = type == 'get' || type == 'delete' ? url + '?' + arg : url;
    // var userInfo = ac.getData('userInfo');
    // var token = '';
    // if (userInfo) {
    //     userInfo = typeof userInfo === 'string' ? JSON.parse(userInfo) : userInfo;
    //     token = userInfo.token ? userInfo.token : '';
    // }
    // ax.defaults.headers.TOKEN = token;
    return ax[type](url, arg);
}

export var itrUploadFile = (type, url, params) => {
    // url = type == 'get' || type == 'delete' ? url + '?' + arg : url;
    // var userInfo = ac.getData('userInfo');
    // var token = '';
    // if (userInfo) {
    //     userInfo = typeof userInfo === 'string' ? JSON.parse(userInfo) : userInfo;
    //     token = userInfo.token ? userInfo.token : '';
    // }
    // ax.defaults.headers.TOKEN = token;
    return axUploadFile.post("", params,{headers: { "Content-Type": "multipart/form-data" }});
}

export const g = (url, params) => {
    return base('get', url, params);
}

export const p = (url, params) => {
    return base('post', url, params);
}

export const updateFile = (url, params) => {
    return baseUploadFile('post', url, params);
}



export const d = (url, params) => {
    return base('delete', url, params);
};

export const u = (url, params) => {
    return base('put', url, params);
}
export const pa = (url, params) => {
    return base('patch', url, params);
}

export const op = (url, params) => {
    return base('options', url, params);
}

export const uploadUrl = config.imgUpload;

export function base(type, url, params) {
    return new Promise((resolve, reject) => {
        itr(type, url, params).then((response) => {
            console.log(response)
            if (!response.data.code) {
                resolve(response.data);
            } else {
                iview.Notice.error({
                    title: '操作失败',
                    desc: `<p><span style="color:#ff3300">${response.data.code}</span>   ${response.data.code}</p>`
                });
                reject(response.data.code);
            }
        }).catch((msg) => {
            if (msg != 'code') {
                iview.Notice.error({
                    title: '网络访问错误 错误码='+msg,
                    desc: msg
                });
            }
            // reject(msg);
            
        });
    });

}

export function baseUploadFile(type, url, params) {
    return new Promise((resolve, reject) => {
        itrUploadFile(type, url, params).then((response) => {
            console.log(response)
            if (!response.data.code) {
                resolve(response.data);
            } else {
                iview.Notice.error({
                    title: '操作失败',
                    desc: `<p><span style="color:#ff3300">${response.data.code}</span>   ${response.data.code}</p>`
                });
                reject(response.data.code);
            }
        }).catch((msg) => {
            if (msg != 'code') {
                iview.Notice.error({
                    title: '网络访问错误 错误码='+msg,
                    desc: msg
                });
            }
            // reject(msg);
            
        });
    });

}