webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const GET_MENU = "GET_MENU";
/* harmony export (immutable) */ __webpack_exports__["g"] = GET_MENU;
 //获取菜单
const BREADCRUMB = "BREADCRUMB";
/* harmony export (immutable) */ __webpack_exports__["h"] = BREADCRUMB;
 //菜单栏
const USERINFO = "USERINFO";
/* harmony export (immutable) */ __webpack_exports__["e"] = USERINFO;
 //用户信息，登陆
const LOGINOUT = "LOGINOUT";
/* unused harmony export LOGINOUT */
 //退出登录

const USERLIST = "USERLIST";
/* harmony export (immutable) */ __webpack_exports__["f"] = USERLIST;
 //用户列表

const GROUPLIST = "GROUPLIST";
/* harmony export (immutable) */ __webpack_exports__["d"] = GROUPLIST;
 //权限列表

const ATTRLIST = "ATTRLIST";
/* harmony export (immutable) */ __webpack_exports__["a"] = ATTRLIST;
 //商品属性模板列表
//属性模板当中具体的属性值
const CLASSIFY = "CLASSIFY";
/* harmony export (immutable) */ __webpack_exports__["b"] = CLASSIFY;

//商品列表数据
const GOODSLIST = "GOODSLIST";
/* harmony export (immutable) */ __webpack_exports__["c"] = GOODSLIST;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instrance__ = __webpack_require__(43);


//上传地址：
const uploadUrl = __WEBPACK_IMPORTED_MODULE_0__instrance__["a" /* uploadUrl */];
/* unused harmony export uploadUrl */


//获取菜单
const getAllMenu = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/rule/uroles', params);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = getAllMenu;


// 用户登录
const Login = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/user/login', params);
};
/* unused harmony export Login */


/**
 *  用户列表接口start
 */

//单个用户列表用户详细数据
const getUserList = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/user/search', params);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = getUserList;


const userInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/user/info', params);
};
/* unused harmony export userInfo */


//删除用户列表用户
const delUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["d"]('/user/delete', params);
};
/* unused harmony export delUser */


//更改用户状态
const changeUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/user/stat', params);
};
/* unused harmony export changeUser */


//新增用户
const createUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/user/add', params);
};
/* unused harmony export createUser */


//修改用户资料
const modUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/user/update', params);
};
/* unused harmony export modUser */


//添加用户--权限分组
const userGroup = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/user/groups', params);
};
/* unused harmony export userGroup */


//修改密码
const userChangePwd = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["f" /* pa */]('/user/updatepwd', params);
};
/* unused harmony export userChangePwd */


/** 用户列表接口 end */

/** 权限接口 start */

//获取权限分组
const authGroup = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/rule/gsearch', params);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = authGroup;


//删除用户列表用户
const delGroup = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["d"]('/rule/gdelete', params);
};
/* unused harmony export delGroup */


//更改分组状态
const changeGroup = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/rule/stat', params);
};
/* unused harmony export changeGroup */


//新增分组
const createGroup = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/rule/addgroup', params);
};
/* unused harmony export createGroup */


//修改分组
const updateGroup = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/rule/groupupdate', params);
};
/* unused harmony export updateGroup */


//获取分组详情信息
const groupInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/rule/groupinfo', params);
};
/* unused harmony export groupInfo */

//获取权限列表
const getRule = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/rule/list', params);
};
/* unused harmony export getRule */


/** 权限接口 end */

/** 商品管理中心 start */

/***** 品牌 start  ******/
//品牌列表
const getBrand = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/brand/lists', params);
};
/* unused harmony export getBrand */


//更改品牌状态
const brandStat = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["f" /* pa */]('/brand/stat', params);
};
/* unused harmony export brandStat */


//删除品牌
const brandDel = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["d"]('/brand/delete', params);
};
/* unused harmony export brandDel */


//添加品牌
const brandCreate = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/brand/create', params);
};
/* unused harmony export brandCreate */


//修改品牌
const brandEdit = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/brand/update', params);
};
/* unused harmony export brandEdit */


//获取品牌详情
const brandInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/brand/info', params);
};
/* unused harmony export brandInfo */


/****** 品牌end ******/

/** 商品分类start **/

//分类列表
const getCate = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/category/lists', params);
};
/* unused harmony export getCate */


//添加分类
const cateCreate = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/category/create', params);
};
/* unused harmony export cateCreate */


//修改分类
const cateEdit = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/category/update', params);
};
/* unused harmony export cateEdit */


//获取分类祥情
const cateInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/category/info', params);
};
/* unused harmony export cateInfo */


//删除分类
const cateDel = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["d"]('/category/delete', params);
};
/* unused harmony export cateDel */


/** 商品分类end **/

/** 属性模板 start */

//获取属性模板列表
const getAttrLists = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/attr/list', params);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getAttrLists;


//更改模板状态
const changeAttrStatus = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/user/stat', params);
};
/* unused harmony export changeAttrStatus */


//删除属性模板
const delAttr = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["d"]('attr/delete', params);
};
/* unused harmony export delAttr */


//新增属性模板
const createAttrTemp = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/attr/create', params);
};
/* unused harmony export createAttrTemp */


//修改属性模板
const updateAttrTemp = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/attr/update', params);
};
/* unused harmony export updateAttrTemp */


//获取模板详情
const getAttrTempInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/attr/info', params);
};
/* unused harmony export getAttrTempInfo */


/** 属性模板 end */

/** 仓库商品 start */

//商品列表
const getGoodsLists = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/goods/list', params);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getGoodsLists;


//添加商品
const goodsCreate = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/goods/create', params);
};
/* unused harmony export goodsCreate */


//商品详情
const goodsInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/goods/info', params);
};
/* unused harmony export goodsInfo */


//修改商品
const goodsEdit = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/goods/update', params);
};
/* unused harmony export goodsEdit */


/** 仓库商品 end */

/** 商品管理中心 end */

/** 门店管理start **/
const sellerLists = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/list', params);
};
/* unused harmony export sellerLists */


//添加门店
const sellerCreate = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/seller/create', params);
};
/* unused harmony export sellerCreate */


//获取门店信息
const sellerInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/info', params);
};
/* unused harmony export sellerInfo */


//修改门店
const sellerEdit = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/seller/update', params);
};
/* unused harmony export sellerEdit */


//更改门店状态
const sellerChange = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('/seller/stat', params);
};
/* unused harmony export sellerChange */


//删除门店
const sellerDel = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["d"]('/seller/delete', params);
};
/* unused harmony export sellerDel */


//地址信息
const area = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/area', params);
};
/* unused harmony export area */


//门店店员
const assistants = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/asslist', params);
};
/* unused harmony export assistants */


//门店商品
const sellerGoods = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/goodslist', params);
};
/* unused harmony export sellerGoods */


//门店采购记录
const sellerPur = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/orderlist', params);
};
/* unused harmony export sellerPur */


//门店采购记录详情
const purchaseInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/orderinfo', params);
};
/* unused harmony export purchaseInfo */


//门店结算记录
const sellerSettlement = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/settlement', params);
};
/* unused harmony export sellerSettlement */


//所有店员
const assistantsAll = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/seller/allasslist', params);
};
/* unused harmony export assistantsAll */


/** 门店管理end **/

/** 消费者管理 start **/

//消费者列表
const consumer = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/consumer/lists', params);
};
/* unused harmony export consumer */


//消费者详情
const consumerInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/consumer/info', params);
};
/* unused harmony export consumerInfo */


//消费者消费记录
const consumerOrder = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/consumer/orderlist', params);
};
/* unused harmony export consumerOrder */


//消费者订单详情
const consumerOrderInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/consumer/orderinfo', params);
};
/* unused harmony export consumerOrderInfo */


//消费者来电记录
const consumerCall = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/consumer/callorders', params);
};
/* unused harmony export consumerCall */

//添加来电记录
const addCall = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('consumer/addcall', params);
};
/* unused harmony export addCall */


/** 消费者管理 end **/

/** 订单中心 start **/

//订单列表
const orderLists = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/order/list', params);
};
/* unused harmony export orderLists */

//呼叫记录列表
const orderCallList = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/consumer/callorders', params);
};
/* unused harmony export orderCallList */


//订单详情
const orderInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('/order/info', params);
};
/* unused harmony export orderInfo */

//代客下单
const addOrder = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('/order/add', params);
};
/* unused harmony export addOrder */


/** 订单中心end **/

/** 财务中心 start */

const userOrders = params => {
  //消费者支付记录
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('finance/userorders', params);
};
/* unused harmony export userOrders */


//消费者退款记录
const userRefund = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('finance/userrefund', params);
};
/* unused harmony export userRefund */

//门店采购记录
const allSellerPur = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('finance/purlist', params);
};
/* unused harmony export allSellerPur */

//门店结算记录
const allSellerPayments = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('finance/settlement', params);
};
/* unused harmony export allSellerPayments */

//结算审批列表 
const approvallist = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('finance/approvallist', params);
};
/* unused harmony export approvallist */

//结算审批
const approval = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["f" /* pa */]('finance/approval', params);
};
/* unused harmony export approval */

//退款列表
const refund = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('finance/refundlist', params);
};
/* unused harmony export refund */

//退款审批
const refundSure = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["f" /* pa */]('finance/refund', params);
};
/* unused harmony export refundSure */

//退款单信息
const refundInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('finance/refundinfo', params);
};
/* unused harmony export refundInfo */


//仓库列表
const godown = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('godown/list', params);
};
/* unused harmony export godown */

//添加仓库
const godownCreate = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('godown/create', params);
};
/* unused harmony export godownCreate */

//仓库详情
const godownInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('godown/info', params);
};
/* unused harmony export godownInfo */


//修改仓库
const godownUpdate = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["e" /* u */]('godown/update', params);
};
/* unused harmony export godownUpdate */

//更改仓库状态
const godownStatus = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["f" /* pa */]('godown/status', params);
};
/* unused harmony export godownStatus */

//删除仓库
const godownDel = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["d"]('godown/delete', params);
};
/* unused harmony export godownDel */


//仓库人员
const godownUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["b" /* g */]('godown/userlist', params);
};
/* unused harmony export godownUser */

//删除仓库人员
const godownUserDel = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["d"]('godown/deleteuser', params);
};
/* unused harmony export godownUserDel */

//添加仓库人员
const godownUserCreate = params => {
  return __WEBPACK_IMPORTED_MODULE_0__instrance__["c" /* p */]('godown/adduser', params);
};
/* unused harmony export godownUserCreate */


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);


const setData = (key, values) => {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(key, values);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = setData;


const getData = key => {
    return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(key);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getData;


const delData = key => {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(key);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = delData;


const userInfo = () => {
    let info = getData('userInfo');
    return JSON.parse(info);
};
/* unused harmony export userInfo */


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

let config = {
    // env: Env,
    apiDomain:'http://staffs.api.mingyi.loc',
    // apiDomain: 'http://localhost:8088',
    imgUpload: 'http://localhost:8082/upload'
};
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const _import = __webpack_require__(45);

//login 
const Login = _import('Login/Login');

//layout
const layout = _import('main');

//主面板
const main = _import('index/index');

/** 用户模块 start **/
//用户中心
const userMain = _import('user/user');
//添加用户
const addUser = _import('user/add');
//修改用户
const editUser = _import('user/edit');

//修改密码
const changPwd = _import('user/pwd');
/** 用户模块 end */

/** 权限模块 start */

//权限列表
const authMain = _import('auth/rule');
//添加权限
const addAuth = _import('auth/add');
//修改权限
const editAuth = _import('auth/edit');
/** 权限模块end */

/**  商品模块 start  **/

//品牌列表
const brand = _import('brand/index');
//添加品牌
const brandAdd = _import('brand/add');
//编辑品牌
const brandEdit = _import('brand/edit');
//商品分类
const cate = _import('cate/index');

//商品模板
const goodsTempMain = _import('attr/index');
//添加商品模板
const addGoodsTemp = _import('attr/add');
//修改商品模板 
const editGoodsTemp = _import('attr/edit');

//商品列表
const goodsMain = _import('goods/index');
//添加商品
const addGoods = _import('goods/add');
//编辑商品
const editGoods = _import('goods/edit');
/** 商品模块 end  **/

/** 门店管理 start **/
const seller = _import('seller/index');
//添加门店
const sellerAdd = _import('seller/add');
//修改门店
const sellerEdit = _import('seller/edit');
//门店详情
const sellerInfo = _import('seller/info');
//店员管理
const sellerAsslist = _import('asslist/index');

/** 门店管理end **/

/** 消费者管理 start **/
//消费者列表
const consumer = _import('consumer/index');
//消费者详情
const consumerInfo = _import('consumer/info');
/** 消费者管理end **/

/** 订单模块 start **/

//订单列表
const order = _import('orders/index');
//订单详情
const orderInfo = _import('orders/info');

//呼叫中心
const call = _import('orders/call');
//代客下单
const buy = _import('orders/buy');

/** 订单模块 end **/

//** 财务中心 start */
const finance = _import('finance/index');
//结算审批列表
const cash = _import('finance/cash');
//退款审批列表
const refund = _import('finance/refund');
//退款单详情
const refundInfo = _import('finance/refundInfo');

//** 财务中心 end */

/** 仓库模块 start **/
//仓库列表
const godown = _import('godown/index');

//添加仓库
const godown_create = _import('godown/add');
//编辑仓库
const godown_update = _import('godown/edit');
//仓库人员
const godown_user = _import('godown/user');
//添加仓库人员
const godown_adduser = _import('godown/adduser');

/** 仓库模块 end **/

/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/login', component: Login, hidden: true
}, {
  path: '/', redirect: '/main', hidden: true
}, {
  path: '/main', name: '', icon: 'grid', component: layout, noDropdown: true, children: [{ path: '', name: '主页', component: main }]
}, {
  path: '/sys', name: '系统设置', icon: 'ios-cog', component: layout, redirect: '/sys/user',
  children: [{ path: 'user', name: '用户列表', meta: { alias: 'user' }, component: userMain }, { path: 'user/add', name: '添加用户', meta: { alias: 'user_add' }, component: addUser, hidden: true }, { path: 'user/edit', name: '编辑用户', meta: { alias: 'user_edit' }, component: editUser, hidden: true }, { path: 'user/change', name: '修改密码', meta: { alias: 'user_pwd' }, component: changPwd, hidden: true }, { path: 'group', name: '权限分组', meta: { alias: 'group' }, component: authMain }, { path: 'group/add', name: '添加分组', meta: { alias: 'group_add' }, component: addAuth, hidden: true }, { path: 'group/edit', name: '编辑分组信息', meta: { alias: 'group_edit' }, component: editAuth, hidden: true }]
}, {
  path: '/pro', name: '产品中心', component: layout, redirect: '/pro/goods', icon: 'android-playstore',
  children: [{ path: 'brand', name: '品牌列表', meta: { alias: 'brand' }, component: brand }, { path: 'brand/add', name: '添加品牌', meta: { alias: 'brand_create' }, component: brandAdd, hidden: true }, { path: 'brand/edit', name: '编辑品牌', meta: { alias: 'brand_update' }, component: brandEdit, hidden: true }, { path: 'cate', name: '商品分类', meta: { alias: 'cate' }, component: cate }, { path: 'cate/add', name: '添加分类', meta: { alias: 'cate_create' }, component: addGoodsTemp, hidden: true }, { path: 'cate/edit', name: '编辑分类', meta: { alias: 'cate_update' }, component: editGoodsTemp, hidden: true }, { path: 'attrtemp', name: '属性模板', meta: { alias: 'attr' }, component: goodsTempMain }, { path: 'attrtemp/add', name: '添加属性模板', meta: { alias: 'attr_create' }, component: addGoodsTemp, hidden: true }, { path: 'attrtemp/edit', name: '编辑属性模板', meta: { alias: 'attr_update' }, component: editGoodsTemp, hidden: true }, { path: 'goods', name: '商品列表', meta: { alias: 'goods' }, component: goodsMain }, { path: 'goods/add', name: '添加商品', meta: { alias: 'goods_add' }, component: addGoods, hidden: true }, { path: 'goods/edit', name: '编辑商品', meta: { alias: 'godos_edit' }, component: editGoods, hidden: true }]
}, {
  path: '/seller', name: '门店管理', component: layout, redirect: '/seller/store', icon: 'pricetags',
  children: [{ path: 'store', name: '门店列表', meta: { alias: 'seller' }, component: seller }, { path: 'store/add', name: '添加门店', meta: { alias: 'seller_create' }, component: sellerAdd, hidden: true }, { path: 'store/edit', name: '修改门店', meta: { alias: 'seller_update' }, component: sellerEdit, hidden: true }, { path: 'store/info', name: '门店详情', meta: { alias: 'seller_info' }, component: sellerInfo, hidden: true }, { path: 'asslist', name: '店员管理', meta: { alias: 'seller_all_asslist' }, component: sellerAsslist }]
}, {
  path: '/consumer', name: '消费者管理', component: layout, redirect: '/consumer/index', icon: 'cube',
  children: [{ path: 'index', name: '消费者列表', meta: { alias: 'consumer' }, component: consumer }, { path: 'info', name: '消费者详情', meta: { alias: 'consumer_info' }, component: consumerInfo, hidden: true }]
}, {
  path: '/order', name: '订单管理', component: layout, redirect: '/order/index', icon: 'bag',
  children: [{ path: 'index', name: '订单列表', meta: { alias: 'order' }, component: order }, { path: 'info', name: '订单详情', meta: { alias: 'order_info' }, component: orderInfo, hidden: true }, { path: 'call', name: '呼叫记录', meta: { alias: 'consumer_call' }, component: call }, { path: 'buy', name: '代客下单', meta: { alias: 'order_create' }, component: buy }]
}, {
  path: '/finance', name: '财务中心', component: layout, redirect: '/finance/index', icon: 'social-yen',
  children: [{ path: 'index', name: '支付记录', meta: { alias: 'finance_pay' }, component: finance }, { path: 'pay', name: '消费者支付记录', meta: { alias: 'finance_pay' }, component: finance, hidden: true }, { path: 'urefund', name: '消费者退款记录', meta: { alias: 'finance_refund' }, component: finance, hidden: true }, { path: 'purlist', name: '门店采购支付记录', meta: { alias: 'finance_purlist' }, component: finance, hidden: true }, { path: 'settlement', name: '门店结算记录', meta: { alias: 'finance_settle' }, component: finance, hidden: true }, { path: 'approvallist', name: '提现审批', meta: { alias: 'finance_cash' }, component: cash }, { path: 'approval', name: '提现申请', meta: { alias: 'finance_cash_audit' }, component: finance, hidden: true }, { path: 'refundlist', name: '退款审批', meta: { alias: 'finance_refund_applf' }, component: refund }, { path: 'refundinfo', name: '退款单详情', meta: { alias: 'finance_refund_audit' }, component: refundInfo, hidden: true }]
}, {
  path: '/godown', name: '仓库管理', component: layout, redirect: '/godown/index', icon: 'soup-can',
  children: [{ path: 'index', name: '仓库列表', meta: { alias: 'godown' }, component: godown }, { path: 'add', name: '添加仓库', meta: { alias: 'godown_create' }, component: godown_create, hidden: true }, { path: 'edit', name: '编辑仓库', meta: { alias: 'godown_update' }, component: godown_update, hidden: true }, { path: 'user', name: '仓库人员', meta: { alias: 'godown_userlist' }, component: godown_user }, { path: 'useradd', name: '添加仓库人员', meta: { alias: 'godown_adduser' }, component: godown_adduser, hidden: true }]
}]);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__(14);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_2__component__["a" /* default */]
}));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_menu_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_user__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_rule__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_goods__ = __webpack_require__(48);








__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
  getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
  modules: {
    menu: __WEBPACK_IMPORTED_MODULE_4__modules_menu_js__["a" /* default */],
    user: __WEBPACK_IMPORTED_MODULE_5__modules_user__["a" /* default */],
    rule: __WEBPACK_IMPORTED_MODULE_6__modules_rule__["a" /* default */],
    goods: __WEBPACK_IMPORTED_MODULE_7__modules_goods__["a" /* default */]
  }
}));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_js__ = __webpack_require__(8);


const URI = __WEBPACK_IMPORTED_MODULE_1__config_config_js__["a" /* default */].apiDomain;

//图片上传
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(__WEBPACK_IMPORTED_MODULE_1__config_config_js__["a" /* default */].imgUpload, {
    "success": true,
    "errors": [],
    "data": {
        "url": "http://localhost:8082/f4f791f9a2ff6341525a418e9f1f8ccb",
        "name": "测试的图片.jpg",
        "set_uri": "https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar",
        "hash": "f4f791f9a2ff6341525a418e9f1f8ccb",
        "frontend": []
    }
});

//权限信息
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/rule/uroles', {
    "success": true,
    "errors": [],
    "data": {
        "ids": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75],
        "rules": ["user.list", "user.info", "user.add", "user.update", "user.stat", "user.delete", "user.search", "rule.list", "rule.uroles", "rule.group", "rule.addgroup", "rule.groupinfo", "rule.groupupdate", "rule.stat", "rule.gdelete", "rule.gsearch", "brand.lists", "brand.create", "brand.update", "brand.state", "brand.delete", "brand.info", "category.lists", "category.create", "category.update", "category.delete", "attr.create", "attr.update", "attr.list", "attr.info", "attr.delete", "goods.create", "goods.update", "goods.info", "goods.list", "goods.unitfactor", "goods.skuinfo", "goods.uupdate", "seller.create", "seller.update", "seller.info", "seller.stat", "seller.delete", "seller.asslist", "seller.orderlist", "seller.goodslist", "seller.list", "consumer.list", "consumer.orderlist", "consumer.orderinfo", "consumer.callorders", "order.list", "order.stat", "order.info", "order.add", "finance.userorders", "finance.userrefund", "finance.purlist", "finance.settlement", "finance.approvallist", "finance.approval", "finance.refundlist", "finance.refund", "seller.allasslist", "consumer.info", "godown.list", "godown.create", "godown.info", "godown.update", "godown.status", "godown.delete", "godown.adduser", "godown.userlist", "godown.deleteuser"]
    }
});
//登陆
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/login', { "success": true, "errors": [], "data": { "userName": "adminTest", "id": 1, "img": null, "token": "35882fc40f9f2f224cc7486f41676110" } });

//单个用户列表用户详细数据
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/search', {
    "success": true,
    "errors": [],
    "data": {
        "list": [{
            "id": 1,
            "name": "admin",
            "alias": "老板",
            "pwd": "08036c3a05dead0a9e62540ec801461a",
            "status": "1",
            "phone": "18080091166",
            "deleted_at": null,
            "created_at": "2017-07-06 10:41:30",
            "updated_at": "2017-08-14 18:29:23",
            "extend": "{\"loginToken\":\"35882fc40f9f2f224cc7486f41676110\"}"
        }, {
            "id": 4,
            "name": "root",
            "alias": "老板",
            "pwd": "4846bb538463e7a0a98accecdc0355dc",
            "status": "1",
            "phone": "18080091133",
            "deleted_at": null,
            "created_at": "2017-07-06 10:41:30",
            "updated_at": "2017-07-10 09:47:19",
            "extend": null
        }, {
            "id": 7,
            "name": "hahhah",
            "alias": null,
            "pwd": "2f71d04555cc7afda719f5299d85a303",
            "status": "0",
            "phone": "18080091166",
            "deleted_at": null,
            "created_at": "-0001-11-30 00:00:00",
            "updated_at": "2017-07-10 19:27:46",
            "extend": null
        }],
        "allCount": 3
    }
});

//用户详情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/info', {
    "success": true,
    "errors": [],
    "data": {
        "id": 1,
        "name": "admin",
        "alias": "老板",
        "phone": "18080091166",
        "status": "1",
        "datetime": "2017-07-06 10:41:30",
        "group": [{
            "id": 1,
            "name": "超级管理员"
        }]
    }
});
//删除用户列表用户
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/delete', { "success": true, "errors": [], "data": [] });
//更改用户状态
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/stat', { "success": true, "errors": [], "data": [] });
//新增用户
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/add', { "success": true, "errors": [], "data": [] });
//修改用户资料
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/update', { "success": true, "errors": [], "data": [] });
//添加用户--权限分组
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/groups', {
    "success": true,
    "errors": [],
    "data": [{
        "id": 1,
        "name": "超级管理员"
    }, {
        "id": 2,
        "name": "普通用户"
    }, {
        "id": 3,
        "name": "测试"
    }, {
        "id": 4,
        "name": "财务人员"
    }]
});
//修改密码
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/user/updatepwd', { "success": true, "errors": [], "data": [] });

//获取权限分组
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/rule/gsearch', {
    "success": true,
    "errors": [],
    "data": {
        "groupList": [{
            "id": 1,
            "name": "超级管理员",
            "desc": "拥有所有的权限哟哟",
            "status": "1",
            "deleted_at": null,
            "created_at": "2017-07-06 11:32:32",
            "updated_at": "2017-07-11 16:18:06"
        }],
        "allCount": 1
    }
});
//删除分组
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/rule/gdelete', { "success": true, "errors": [], "data": [] });
//更改分组状态
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/rule/stat', { "success": true, "errors": [], "data": [] });
//新增分组
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/rule/addgroup', { "success": true, "errors": [], "data": [] });
//修改分组
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/rule/groupupdate', { "success": true, "errors": [], "data": [] });
//获取分组详情信息
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/rule/groupinfo', {
    "success": true,
    "errors": [],
    "data": {
        "id": 1,
        "name": "超级管理员",
        "desc": "拥有所有的权限哟哟",
        "status": "1",
        "rule": {
            "1": "获取运营用户列表",
            "2": "查看运营人员详细信息",
            "3": "添加运营人员",
            "4": "运营用户信息修改",
            "5": "改变运营用户状态",
            "6": "删除运营用户",
            "7": "搜索运营用户",
            "8": "获取权限组模块",
            "9": "获取运营用户所拥有的权限",
            "10": "获取权限小组列表",
            "11": "添加权限小组",
            "12": "获取权限组详细信息",
            "13": "修改权限组",
            "14": "改变小组状态",
            "15": "删除权限小组",
            "16": "权限小组搜索",
            "17": "添加品牌",
            "18": "修改品牌",
            "19": "更改品牌状态",
            "20": "删除品牌",
            "22": "品牌详情",
            "23": "分类列表",
            "24": "添加商品分类",
            "25": "修改商品分类",
            "26": "删除商品分类",
            "27": "添加商品模板",
            "28": "修改商品模板",
            "29": "商品模板列表",
            "30": "商品模板列表详情",
            "31": "删除商品模板",
            "32": "添加商品",
            "33": "修改商品信息",
            "34": "商品详情",
            "36": "商品列表",
            "37": "商品单位转换",
            "38": "获取商品SKU信息",
            "39": "更新SKU信息",
            "40": "添加门店",
            "41": "修改门店",
            "42": "门店信息",
            "43": "更改门店状态",
            "44": "删除门店",
            "45": "获取门店店员",
            "46": "门店采购列表",
            "47": "门店在售商品",
            "48": "门店列表",
            "49": "消费者管理",
            "50": "消费者消费记录",
            "51": "消费者消费详情",
            "52": "消费者来电记录",
            "53": "订单列表",
            "54": "修改订单状态",
            "55": "订单详情",
            "56": "代客下单",
            "57": "消费者支付记录",
            "58": "消费者退款记录",
            "59": "门店采购记录",
            "60": "门店结算记录",
            "61": "门店提现申请",
            "62": "门店提现审核",
            "63": "用户退款申请",
            "64": "用户退款",
            "65": "查看所有店员",
            "66": "消费者详情",
            "67": "仓库列表",
            "68": "添加仓库",
            "69": "单个仓库信息",
            "70": "修改仓库",
            "71": "修改仓库状态",
            "72": "删除仓库",
            "73": "添加仓库人员",
            "74": "仓库人员列表",
            "75": "删除仓库人员"
        }
    }
});
//获取权限列表
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/rule/list', {
    "success": true,
    "errors": [],
    "data": [{
        "id": 1,
        "name": "运营用户",
        "rule": {
            "1": "获取运营用户列表",
            "2": "查看运营人员详细信息",
            "3": "添加运营人员",
            "4": "运营用户信息修改",
            "5": "改变运营用户状态",
            "6": "删除运营用户",
            "7": "搜索运营用户"
        }
    }, {
        "id": 2,
        "name": "权限分组",
        "rule": {
            "8": "获取权限组模块",
            "9": "获取运营用户所拥有的权限",
            "10": "获取权限小组列表",
            "11": "添加权限小组",
            "12": "获取权限组详细信息",
            "13": "修改权限组",
            "14": "改变小组状态",
            "15": "删除权限小组",
            "16": "权限小组搜索"
        }
    }]
});

//品牌列表
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/brand/lists', {
    "success": true,
    "errors": [],
    "data": {
        "count": 3,
        "datas": [{
            "id": 1,
            "name": "农夫山泉",
            "status": "1"
        }, {
            "id": 7,
            "name": "康师傅吧",
            "status": "1"
        }, {
            "id": 8,
            "name": "乐事",
            "status": "1"
        }]
    }
});
//更改品牌状态
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/brand/stat', { "success": true, "errors": [], "data": [] });
//删除品牌
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/brand/delete', { "success": true, "errors": [], "data": [] });
//添加品牌
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/brand/create', { "success": true, "errors": [], "data": [] });
//修改品牌
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/brand/update', { "success": true, "errors": [], "data": [] });
//获取品牌详情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/brand/info', {
    "success": true,
    "errors": [],
    "data": {
        "id": 1,
        "name": "测试添加品牌",
        "status": "1"
    }
});

//分类列表
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/category/lists', {
    "success": true,
    "errors": [],
    "data": [{
        "id": 16,
        "name": "你好",
        "pid": 0,
        "status": "1"
    }, {
        "id": 20,
        "name": "零食",
        "pid": 0,
        "status": "1"
    }, {
        "id": 22,
        "name": "薯片",
        "pid": 20,
        "status": "1"
    }, {
        "id": 24,
        "name": "哎哟",
        "pid": 20,
        "status": "1"
    }, {
        "id": 25,
        "name": "不是吧",
        "pid": 20,
        "status": "1"
    }, {
        "id": 26,
        "name": "还有呢",
        "pid": 20,
        "status": "1"
    }, {
        "id": 27,
        "name": "还是有的",
        "pid": 24,
        "status": "1"
    }, {
        "id": 28,
        "name": "继续测试",
        "pid": 27,
        "status": "1"
    }, {
        "id": 29,
        "name": "好",
        "pid": 22,
        "status": "1"
    }]
});
//添加分类
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/category/create', { "success": true, "errors": [], "data": { id: 3 } });
//修改分类
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/category/update', { "success": true, "errors": [], "data": [] });
//获取分类祥情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/category/info', {
    "success": true,
    "errors": [],
    "data": {
        "id": 1,
        "name": "分类01",
        "pid": 0,
        "status": "1"
    }
});
//删除分类
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/category/delete', { "success": true, "errors": [], "data": [] });

//获取属性模板列表
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/attr/list', {
    "success": true,
    "errors": [],
    "data": {
        "count": 2,
        "datas": [{
            "id": 6,
            "name": "不是",
            "attr": "[{\"options\":[\"想想吧\"], \"attribute_id\":\"test\", \"attribute_name\":\"测试dev\"}]",
            "status": "1",
            "cateid": 16,
            "cateName": "你好"
        }, {
            "id": 8,
            "name": "薯片",
            "attr": "[{\"options\":[\"椒盐\", \"烧烤\", \"麻辣\"], \"attribute_id\":\"taste\", \"attribute_name\":\"口味\"}, {\"options\":[\"500g\", \"750g\"], \"attribute_id\":\"size\", \"attribute_name\":\"大小\"}]",
            "status": "1",
            "cateid": 22,
            "cateName": "薯片"
        }]
    }
});
//更改模板状态
// Mock.mock(URI + '/attr/list', { "success": true, "errors": [], "data": [] });
//删除属性模板
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/attr/delete', { "success": true, "errors": [], "data": [] });
//新增属性模板
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/attr/create', { "success": true, "errors": [], "data": [] });
//修改属性模板
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/attr/update', { "success": true, "errors": [], "data": [] });
//获取模板详情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/attr/info', {
    "success": true,
    "errors": [],
    "data": {
        "id": 6,
        "name": "不是",
        "attribute_options": "[{\"options\":[\"想想吧\"], \"attribute_id\":\"test\", \"attribute_name\":\"测试dev\"}]",
        "status": "1",
        "catergoy_id": 16,
        "deleted_at": null,
        "created_at": "2017-07-13 12:57:25",
        "updated_at": "2017-07-13 19:32:14"
    }
});

//商品列表
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/goods/list', {
    "success": true,
    "errors": [],
    "data": {
        "count": 3,
        "goodList": [{
            "goods_id": 18,
            "goods_name": "乐事薯片",
            "brand": "乐事",
            "category": "薯片",
            "life": 120,
            "status": "1",
            "place": "浙江",
            "company": "乐事薯片有限公司",
            "seller": "食品批发商",
            "defaultUnit": "包",
            "imgs": [{
                "hash": "5cf65d9fed1b7e255b1be1c25da0e1b9",
                "url": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-5cf65d9fed1b7e255b1be1c25da0e1b9.jpg"
            }]
        }, {
            "goods_id": 16,
            "goods_name": "乐事薯片",
            "brand": "农夫山泉",
            "category": "",
            "life": 180,
            "status": "1",
            "place": "浙江",
            "company": "乐事薯片有限公司",
            "seller": "食品公司",
            "defaultUnit": "包",
            "imgs": [{
                "hash": "5cf65d9fed1b7e255b1be1c25da0e1b9",
                "url": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-5cf65d9fed1b7e255b1be1c25da0e1b9.jpg"
            }]
        }, {
            "goods_id": 15,
            "goods_name": "农夫山泉矿泉水",
            "brand": "农夫山泉",
            "category": "你好",
            "life": 180,
            "status": "1",
            "place": "峨眉山",
            "company": "农夫山泉公司",
            "seller": "心空购物",
            "defaultUnit": "瓶",
            "imgs": [{
                "hash": "d58d1467874ae93d40857c3187668f49",
                "url": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-d58d1467874ae93d40857c3187668f49.png"
            }]
        }]
    }
});
//添加商品
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/goods/create', { "success": true, "errors": [], "data": 6 });
//商品详情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/goods/info', {
    "success": true,
    "errors": [],
    "data": {
        "goods_id": 15,
        "goods_name": "农夫山泉矿泉水",
        "alias": "农夫山泉，山泉，矿泉水",
        "cate_id": 16,
        "brand_id": 1,
        "warning": 0,
        "place": "峨眉山",
        "company": "农夫山泉公司",
        "seller": "心空购物",
        "life": 180,
        "attr": "[{\"id\":\"weidao\", \"name\":\"口味\", \"options\":[\"水蜜桃\", \"荔枝\"]}, {\"id\":\"size\", \"name\":\"容量\", \"options\":[\"500ml\", \"500ml\"]}]",
        "sku": [{
            "sku_id": 1,
            "goods_id": 15,
            "goods_name": "农夫山泉矿泉水 水蜜桃 + 500ml",
            "barcode": "1232453654",
            "price": "4.00",
            "wholease_price": "2.00",
            "image": [{
                "hash": "5cf65d9fed1b7e255b1be1c25da0e1b9",
                "url": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-5cf65d9fed1b7e255b1be1c25da0e1b9.jpg"
            }],
            "attribute": "{\"size\":\"500ml\", \"weidao\":\"水蜜桃\"}"
        }, {
            "sku_id": 2,
            "goods_id": 15,
            "goods_name": "农夫山泉矿泉水 荔枝 + 500ml",
            "barcode": "34654675545",
            "price": "5.00",
            "wholease_price": "2.00",
            "image": [{
                "hash": "d58d1467874ae93d40857c3187668f49",
                "url": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-d58d1467874ae93d40857c3187668f49.png"
            }],
            "attribute": "{\"size\":\"500ml\", \"weidao\":\"荔枝\"}"
        }],
        "selectedAttr": {
            "0": "500ml",
            "1": "水蜜桃",
            "3": "荔枝"
        },
        "image": [{
            "set_uri": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-d58d1467874ae93d40857c3187668f49.png",
            "hash": "d58d1467874ae93d40857c3187668f49",
            "name": "Screenshot_20170713-161425.png"
        }],
        "desc": "hfhdsfsdfd",
        "status": "1",
        "units": [{
            "id": 28,
            "goods_id": 15,
            "name": "瓶",
            "factor": 1,
            "default": "1"
        }, {
            "id": 29,
            "goods_id": 15,
            "name": "件",
            "factor": 12,
            "default": "0"
        }, {
            "id": 44,
            "goods_id": 15,
            "name": "箱",
            "factor": 36,
            "default": "0"
        }]
    }
});
//修改商品
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/goods/update', { "success": true, "errors": [], "data": [] });

//门店列表
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/list', {
    "success": true,
    "errors": [],
    "data": {
        "list": [{
            "id": 2,
            "name": "龙湖店",
            "city_id": 385,
            "area_id": 45056,
            "address": "成都市 高新区 龙湖世纪啥地方",
            "image": [{
                "hash": "5cf65d9fed1b7e255b1be1c25da0e1b9",
                "url": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-5cf65d9fed1b7e255b1be1c25da0e1b9.jpg"
            }],
            "location": "26.074508 119.296494",
            "phone": "83252323",
            "status": "1",
            "master": "张三"
        }],
        "allCount": 1
    }
});
//添加门店
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/create', {
    "success": true,
    "errors": [],
    "data": {
        "seller_id": 3,
        "adminId": 4
    }
});
//获取门店信息
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/info', {
    "success": true,
    "errors": [],
    "data": {
        "id": 2,
        "name": "龙湖店",
        "city_id": 385,
        "area_id": 45056,
        "address": "成都市 高新区 龙湖世纪啥地方",
        "location": "26.074508 119.296494",
        "phone": "83252323",
        "image": {
            "hash": "5cf65d9fed1b7e255b1be1c25da0e1b9",
            "url": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-5cf65d9fed1b7e255b1be1c25da0e1b9.jpg"
        },
        "admin": "张三",
        "adminPhone": "18080091133"
    }
});
//修改门店
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/update', { "success": true, "errors": [], "data": [] });
//更改门店状态
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/stat', { "success": true, "errors": [], "data": [] });
//删除门店
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/delete', { "success": true, "errors": [], "data": [] });
//地址信息
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/area', {
    "success": true,
    "errors": [],
    "data": {
        "list": [{
            "id": 385,
            "name": "成都市",
            "deep": 2
        }, {
            "id": 386,
            "name": "自贡市",
            "deep": 2
        }, {
            "id": 387,
            "name": "攀枝花市",
            "deep": 2
        }, {
            "id": 388,
            "name": "泸州市",
            "deep": 2
        }, {
            "id": 389,
            "name": "德阳市",
            "deep": 2
        }, {
            "id": 390,
            "name": "绵阳市",
            "deep": 2
        }, {
            "id": 391,
            "name": "广元市",
            "deep": 2
        }, {
            "id": 392,
            "name": "遂宁市",
            "deep": 2
        }, {
            "id": 393,
            "name": "内江市",
            "deep": 2
        }, {
            "id": 394,
            "name": "乐山市",
            "deep": 2
        }, {
            "id": 395,
            "name": "南充市",
            "deep": 2
        }, {
            "id": 396,
            "name": "眉山市",
            "deep": 2
        }, {
            "id": 397,
            "name": "宜宾市",
            "deep": 2
        }, {
            "id": 398,
            "name": "广安市",
            "deep": 2
        }, {
            "id": 399,
            "name": "达州市",
            "deep": 2
        }, {
            "id": 400,
            "name": "雅安市",
            "deep": 2
        }, {
            "id": 401,
            "name": "巴中市",
            "deep": 2
        }, {
            "id": 402,
            "name": "资阳市",
            "deep": 2
        }, {
            "id": 403,
            "name": "阿坝藏族羌族自治州",
            "deep": 2
        }, {
            "id": 404,
            "name": "甘孜藏族自治州",
            "deep": 2
        }, {
            "id": 405,
            "name": "凉山彝族自治州",
            "deep": 2
        }]
    }
});
//门店店员
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/asslist', {
    "success": true,
    "errors": [],
    "data": {
        "list": [{
            "id": 1,
            "name": "张三",
            "phone": "18080091133",
            "status": "1"
        }, {
            "id": 1,
            "name": "张三",
            "phone": "18080091133",
            "status": "0"
        }],
        "allCount": 2
    }
});
//门店商品
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/goodslist', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 3,
        "list": [{
            "sku_id": 1,
            "image": "5cf65d9fed1b7e255b1be1c25da0e1b9",
            "name": "农夫山泉矿泉水 水蜜桃 + 500ml",
            "price": "1.50",
            "save": 428,
            "sellNum": "5",
            "createTime": "2017-07-24 10:40:38",
            "attr": [{
                "name": "口味",
                "value": "水蜜桃"
            }, {
                "name": "容量",
                "value": "500ml"
            }],
            "unit": "瓶"
        }, {
            "sku_id": 2,
            "image": "d58d1467874ae93d40857c3187668f49",
            "name": "农夫山泉矿泉水 荔枝 + 500ml",
            "price": "15.00",
            "save": 300,
            "sellNum": "8",
            "createTime": "2017-07-24 10:41:14",
            "attr": [{
                "name": "口味",
                "value": "荔枝"
            }, {
                "name": "容量",
                "value": "500ml"
            }],
            "unit": "瓶"
        }, {
            "sku_id": 7,
            "image": "5cf65d9fed1b7e255b1be1c25da0e1b9",
            "name": "乐事薯片 椒盐 + 500g",
            "price": "13.00",
            "save": 250,
            "sellNum": "0",
            "createTime": "2017-07-24 10:41:37",
            "attr": [{
                "name": "口味",
                "value": "椒盐"
            }, {
                "name": "大小",
                "value": "500g"
            }],
            "unit": "包"
        }]
    }
});
//门店采购记录
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/orderlist', {
    "success": true,
    "errors": [],
    "data": {
        "list": [{
            "id": 6,
            "order_sn": "CD2017080652692",
            "seller_id": 2,
            "money": "536.00",
            "status": "待仓库确认",
            "payment_status": "待支付",
            "memo": "",
            "created_at": "2017-08-06 07:58:40"
        }, {
            "id": 4,
            "order_sn": "CD201708022BBA2",
            "seller_id": 2,
            "money": "536.00",
            "status": "已完成",
            "payment_status": "待支付",
            "memo": "",
            "created_at": "2017-08-02 00:05:06"
        }, {
            "id": 3,
            "order_sn": "CD201708029F6C2",
            "seller_id": 2,
            "money": "536.00",
            "status": "已完成",
            "payment_status": "待支付",
            "memo": "",
            "created_at": "2017-08-02 00:01:18"
        }, {
            "id": 1,
            "order_sn": "dfsdgfhgfjtyyt454",
            "seller_id": 2,
            "money": "23456.55",
            "status": "已完成",
            "payment_status": "待支付",
            "memo": "hah",
            "created_at": "2017-07-24 13:36:51"
        }],
        "allCount": 4
    }
});
//门店采购记录详情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/orderinfo', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 2,
        "list": [{
            "sku_id": 1,
            "image": "5cf65d9fed1b7e255b1be1c25da0e1b9",
            "name": "农夫山泉矿泉水 水蜜桃 + 500ml",
            "attr": [{
                "name": "口味",
                "value": "水蜜桃"
            }, {
                "name": "容量",
                "value": "500ml"
            }],
            "pur_num": "28瓶",
            "minUnit_num": "28瓶",
            "price": "2.00",
            "createTime": "2017-08-06 07:58:40"
        }, {
            "sku_id": 8,
            "image": "5cf65d9fed1b7e255b1be1c25da0e1b9",
            "name": "乐事薯片 烧烤 + 500g",
            "attr": [{
                "name": "口味",
                "value": "烧烤"
            }, {
                "name": "大小",
                "value": "500g"
            }],
            "pur_num": "12箱",
            "minUnit_num": "240包",
            "price": "2.00",
            "createTime": "2017-08-06 07:58:40"
        }]
    }
});
//门店结算记录
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/settlement', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 1,
        "list": [{
            "time": "2017-07-24 16:13:59",
            "money": "12345.00"
        }]
    }
});
//所有店员
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/seller/allasslist', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 3,
        "list": [{
            "id": 1,
            "name": "张三",
            "phone": "18080091133",
            "seller": "龙湖店",
            "status": "1"
        }, {
            "id": 2,
            "name": "李四",
            "phone": "18080091122",
            "seller": "会展店",
            "status": "1"
        }, {
            "id": 3,
            "name": "王五",
            "phone": "18080091111",
            "seller": "会展店",
            "status": "1"
        }]
    }
});

//消费者列表
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/consumer/lists', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 3,
        "list": [{
            "id": 1,
            "name": "张三",
            "phone": "18080091133",
            "seller": "龙湖店",
            "status": "1"
        }, {
            "id": 2,
            "name": "李四",
            "phone": "18080091122",
            "seller": "会展店",
            "status": "1"
        }, {
            "id": 3,
            "name": "王五",
            "phone": "18080091111",
            "seller": "会展店",
            "status": "1"
        }]
    }
});
//消费者详情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/consumer/info', {
    "success": true,
    "errors": [],
    "data": {
        "id": 1,
        "name": "Tom",
        "phone": "18080091133",
        "city_id": 36,
        "area_id": 41,
        "address": "成都市 青羊区 金河路世纪大厦",
        "ext": "{\"wxToken\":\"qwertyuiop\"}"
    }
});
//消费者消费记录
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/consumer/orderlist', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 3,
        "list": [{
            "id": 1,
            "order_num": "dfadgsdf34234",
            "seller": "龙湖店",
            "amount": "188.00",
            "price": "188.00",
            "fav": "无",
            "pay_type": "微信",
            "note": "无",
            "created_at": "2017-07-25 11:02:11",
            "pay_time": "2017-07-25 11:02:07",
            "order_status": "已完成"
        }, {
            "id": 2,
            "order_num": "345678989878",
            "seller": "龙湖店",
            "amount": "188.00",
            "price": "188.00",
            "fav": "无",
            "pay_type": "线下",
            "note": "无",
            "created_at": "2017-08-01 14:00:44",
            "pay_time": "2017-08-01 14:00:39",
            "order_status": "已取消"
        }, {
            "id": 3,
            "order_num": "G80181754177087912",
            "seller": "会展店",
            "amount": "18.00",
            "price": "18.00",
            "fav": "--",
            "pay_type": "线下",
            "note": "--",
            "created_at": "2017-08-01 18:02:34",
            "pay_time": "2017-08-01 10:02:34",
            "order_status": "待付款"
        }]
    }
});
//消费者订单详情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/consumer/orderinfo', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 2,
        "list": [{
            "sku_id": 1,
            "image": "5cf65d9fed1b7e255b1be1c25da0e1b9",
            "name": "农夫山泉矿泉水 水蜜桃 + 500ml",
            "price": "12.00",
            "amount": "60.00",
            "goodsNum": 5,
            "unit": "瓶",
            "fav": "无",
            "attr": [{
                "name": "口味",
                "value": "水蜜桃"
            }, {
                "name": "容量",
                "value": "500ml"
            }]
        }, {
            "sku_id": 2,
            "image": "d58d1467874ae93d40857c3187668f49",
            "name": "农夫山泉矿泉水 荔枝 + 500ml",
            "price": "15.00",
            "amount": "120.00",
            "goodsNum": 8,
            "unit": "瓶",
            "fav": "无",
            "attr": [{
                "name": "口味",
                "value": "荔枝"
            }, {
                "name": "容量",
                "value": "500ml"
            }]
        }]
    }
});
//消费者来电记录
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/consumer/callorders', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 2,
        "list": [{
            "id": 2,
            "user_id": 5,
            "phone": "18080012233",
            "name": "18080012233",
            "call_type": "",
            "note": "价格问题",
            "created_at": "2017-08-01 17:50:34"
        }, {
            "id": 1,
            "user_id": 1,
            "phone": "18080091133",
            "name": "李先生",
            "call_type": "",
            "note": "一份大鸡腿",
            "created_at": "2017-07-25 13:51:55"
        }]
    }
});
//添加来电记录
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/consumer/addcall', {
    "success": true,
    "errors": [],
    "data": []
});

//订单列表
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/order/list', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 3,
        "list": [{
            "id": 3,
            "order_sn": "G80181754177087912",
            "seller": "会展店",
            "amount": "18.00",
            "fav": "--",
            "price": "18.00",
            "pay_type": "offline",
            "buyer": "Tom",
            "shipping_phone": "18080091133",
            "order_status": "wait",
            "created_at": "2017-08-01 18:02:34",
            "pay_type_name": "线下",
            "order_status_name": "待付款"
        }, {
            "id": 2,
            "order_sn": "345678989878",
            "seller": "龙湖店",
            "amount": "188.00",
            "fav": "无",
            "price": "188.00",
            "pay_type": "offline",
            "buyer": "Tom",
            "shipping_phone": "18080092233",
            "order_status": "cacel",
            "created_at": "2017-08-01 14:00:44",
            "pay_type_name": "线下",
            "order_status_name": "已取消"
        }, {
            "id": 1,
            "order_sn": "dfadgsdf34234",
            "seller": "龙湖店",
            "amount": "188.00",
            "fav": "无",
            "price": "188.00",
            "pay_type": "wechat",
            "buyer": "Tom",
            "shipping_phone": "18080092233",
            "order_status": "complate",
            "created_at": "2017-07-25 11:02:11",
            "pay_type_name": "微信",
            "order_status_name": "已完成"
        }]
    }
});
//订单详情
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/order/info', {
    "success": true,
    "errors": [],
    "data": {
        "allCount": 1,
        "goodslist": [{
            "sku_id": 1,
            "image": "https://umijoy.s3.cn-north-1.amazonaws.com.cn/umijoy-5cf65d9fed1b7e255b1be1c25da0e1b9.jpg",
            "name": "农夫山泉矿泉水 水蜜桃 + 500ml",
            "price": "1.50",
            "amount": "18.00",
            "goodsNum": 12,
            "unit": "瓶",
            "fav": "--",
            "barcode": "1232453654",
            "attr": [{
                "name": "口味",
                "value": "水蜜桃"
            }, {
                "name": "容量",
                "value": "500ml"
            }]
        }],
        "order_sn": "G80181754177087912",
        "pay_type": "offline",
        "order_status": "wait",
        "amount": "18.00",
        "price": "18.00",
        "pay_time": "2017-08-01 10:02:34",
        "created_at": "2017-08-01 18:02:34",
        "buyer": "Tom",
        "seller": "会展店",
        "fav": "--",
        "shipping_address": "成都市 双流县 龙泉街道",
        "shipping_phone": "18080091133",
        "delivery_person": "--",
        "delivery_phone": "--",
        "delivery_type": "门店配送上门",
        "note": "--",
        "pay_type_name": "线下",
        "order_status_name": "待付款",
        "completeTime": " ",
        "order_id": "3"
    }
});
//代客下单
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(URI + '/order/add', {
    "success": true,
    "errors": [],
    "data": {
        "id": 23
    }
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(60)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(61),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
    // 用户
    user: 'user.list',  //管理员列表
    user_add: 'user.add', //新增管理员
    user_edit: 'user.update',//更新管理员
    user_info: 'user.info',//用户详情
    user_state: 'user.stat',//更改用户状态
    user_del: 'user.delete',//删除用户,

    //权限组
    group: 'rule.group',//权限分组
    group_add: 'rule.addgroup',//添加分组
    group_edit: 'rule.groupupdate',//编辑分组
    group_info: 'rule.groupinfo',//分组详情
    group_state: 'rule.stat',//更改用户状态
    group_del: 'rule.gdelete',//删除用户,

    //品牌
    brand_create: 'brand.create',//添加商品
    brand_update: 'brand.update',//修改品牌
    brand_stat: 'brand.state',//更改品牌状态
    brand_del: 'brand.delete',//删除品牌
    brand: 'brand.lists',//品牌列表
    brand_info: 'brand.info',//品牌详情

    //商品分类
    cate: 'category.lists',//商品分类列表
    cate_create: 'category.create',//添加商品分类
    cate_update: 'category.update',//修改商品分类
    cate_del: 'category.delete',//删除商品分类

    //商品模板
    attr_create: 'attr.create',//添加商品模板,
    attr_update: 'attr.update',//修改商品模板
    attr: 'attr.list',//商品属性模板
    attr_info: 'attr.info',//商品属性模板详情
    attr_del: 'attr.delete',//删除商品属性模板

    //商品
    goods: 'goods.list',//商品列表
    goods_add: 'goods.create',//添加商品
    godos_edit: 'goods.update',//修改商品
    goods_info: 'goods.info',//商品详情
    goods_factor: 'goods.unitfactor',//商品单位转换
    goods_sku: 'goods.skuinfo',//商品sku信息
    goods_sku_edit: 'goods.uupdate',//更新商品sku信息，


    //门店
    seller: 'seller.list',
    seller_create: 'seller.create',//添加门店
    seller_update: 'seller.update',//更改门店
    seller_info: 'seller.info',//门店信息
    seller_stat: 'seller.stat',//更改门店状态
    seller_del: 'seller.delete',//删除门店
    seller_asslist: 'seller.asslist',//获取门店店员
    seller_order: 'seller.orderlist',//门店订单
    seller_goods: 'seller.goodslist',//门店商品
    seller_all_asslist: 'seller.allasslist',//所有店员

    //消费者管理
    consumer: 'consumer.list',//消费者列表
    consumer_info: 'consumer.info',//消费者详情,
    consumer_order_list: 'consumer.orderlist',//消费者订单
    consumer_order_info: 'consumer.orderinfo',//订单详情
    consumer_call: 'consumer.callorders',//消费者来电记录

    //订单管理
    order: 'order.list',//订单列表
    order_state: 'order.stat',//订单状态
    order_info: 'order.info',//订单详情
    order_create: 'order.add',//代客下单

    //财务中心
    finance_pay: 'finance.userorders',//消费者支付记录
    finance_refund: 'finance.userrefund',//消费者退款记录,
    finance_purlist: 'finance.purlist',//门店采购记录
    finance_settle: 'finance.settlement',//门店结算记录 
    finance_cash: 'finance.approvallist',//门店提现申请
    finance_cash_audit: 'finance.approval',//门店提现审核
    finance_refund_applf: 'finance.refundlist',//用户退款申请
    finance_refund_audit: 'finance.refund',//用户退款审核

    //仓库相关
    godown: 'godown.list',//仓库列表
    godown_info: 'godown.info',//单个仓库信息
    godown_create: 'godown.create',//添加仓库
    godown_update: 'godown.update',//修改仓库
    godown_status: 'godown.status',//修改仓库状态
    godown_del: 'godown.delete',//删除仓库
    godown_adduser: 'godown.adduser',//添加仓库人员
    godown_userlist: 'godown.userlist',//仓库人员列表
    godown_deleteuser: 'godown.deleteuser',//删除仓库人员
}

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app'
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export itr */
/* unused harmony export base */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(5);





var URI = __WEBPACK_IMPORTED_MODULE_1__config_config_js__["a" /* default */].apiDomain;

var ax = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: URI,
    timeout: 30000,
    headers: {
        // 'Content-Type':'application/x-www-form-urlencoded',
        'TOKEN': ''
    }
});

var itr = (type, url, params) => {
    if (typeof params !== 'object') {
        params = {};
    }
    let arg = __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(params);
    // url = type == 'get' || type == 'delete' ? url + '?' + arg : url;
    var userInfo = __WEBPACK_IMPORTED_MODULE_4__data__["a" /* getData */]('userInfo');
    var token = '';
    if (userInfo) {
        userInfo = typeof userInfo === 'string' ? JSON.parse(userInfo) : userInfo;
        token = userInfo.token ? userInfo.token : '';
    }
    ax.defaults.headers.TOKEN = token;
    return ax[type](url, arg);
};

const g = (url, params) => {
    return base('get', url, params);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = g;


const p = (url, params) => {
    return base('post', url, params);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = p;


const d = (url, params) => {
    return base('delete', url, params);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = d;


const u = (url, params) => {
    return base('put', url, params);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = u;

const pa = (url, params) => {
    return base('patch', url, params);
};
/* harmony export (immutable) */ __webpack_exports__["f"] = pa;


const op = (url, params) => {
    return base('options', url, params);
};
/* unused harmony export op */


const uploadUrl = __WEBPACK_IMPORTED_MODULE_1__config_config_js__["a" /* default */].imgUpload;
/* harmony export (immutable) */ __webpack_exports__["a"] = uploadUrl;


function base(type, url, params) {
    return new Promise((resolve, reject) => {
        itr(type, url, params).then(response => {
            if (response.data.success) {
                resolve(response.data.data);
            } else {
                __WEBPACK_IMPORTED_MODULE_3_iview___default.a.Notice.error({
                    title: '操作失败',
                    desc: `<p><span style="color:#ff3300">${response.data.errors.code}</span>   ${response.data.errors.message}</p>`
                });
                reject(response.data.errors.message);
            }
        }).catch(msg => {
            if (msg != 'code') {
                __WEBPACK_IMPORTED_MODULE_3_iview___default.a.Notice.error({
                    title: '网络访问错误',
                    desc: msg
                });
            }
            // reject(msg);
        });
    });
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__until_mock__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_iview___default.a);

__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach((to, from, next) => {
    let path = to.path.substr(1);
    let user = __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].getters.baseInfo;
    if (path != 'login') {
        if (!user) {
            next('/login');
            return false;
        }
    } else {
        if (user) {
            next('/');
            return false;
        }
    }
    __WEBPACK_IMPORTED_MODULE_4_iview___default.a.LoadingBar.start();
    // to.matched.some(record => {console.log(record.meta)})
    next();
});

__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].afterEach((to, from, next) => {
    __WEBPACK_IMPORTED_MODULE_4_iview___default.a.LoadingBar.finish();
    window.scrollTo(0, 0);
    // 路径导航条
    let path = to.path.substr(1);
    let lan = {};
    let men = __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].getters.getMenu;
    if (men) {
        for (var m of men) {
            if (m.children.length) {
                for (var item of m.children) {
                    if (m.path + '/' + item.path == '/' + path) {
                        lan = {
                            first: m.name,
                            last: item.name
                        };
                        break;
                    }
                }
            }
        }
        if (JSON.stringify(lan) != '{}') {
            __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].dispatch('actbreadcrumbions', lan);
        }
    }
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 45 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (1:31)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39mmodule\u001b[33m.\u001b[39mexports \u001b[33m=\u001b[39m file \u001b[33m=>\u001b[39m () \u001b[33m=>\u001b[39m \u001b[36mimport\u001b[39m(\u001b[32m'@/components/'\u001b[39m \u001b[33m+\u001b[39m file \u001b[33m+\u001b[39m \u001b[32m'.vue'\u001b[39m)\n \u001b[90m   | \u001b[39m                               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[0m\n");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(1);

//路径面包屑
const actbreadcrumbions = ({ commit }, crumb) => {
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["h" /* BREADCRUMB */], crumb);
};
/* harmony export (immutable) */ __webpack_exports__["actbreadcrumbions"] = actbreadcrumbions;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

const crumb = state => state.menu.crumb;
/* harmony export (immutable) */ __webpack_exports__["crumb"] = crumb;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common__ = __webpack_require__(3);



const state = {
    attrLists: [],
    classify: [{ keys: '', alias: '', vs: new Set() }],
    goodsLists: []
};

const getters = {
    //属性模板列表
    getAttrLists: state => state.attrLists,
    //属性模板具体属性值
    getClassify: state => state.classify,
    //仓库商品列表
    getGoodsLists: state => state.goodsLists
};

const actions = {
    //属性模板列表
    attrLists: ({ commit }, searchParams) => {
        __WEBPACK_IMPORTED_MODULE_1__api_common__["a" /* getAttrLists */](searchParams).then(lists => {
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["a" /* ATTRLIST */], lists);
        });
    },
    //属性模板具体属性值
    classify: ({ commit }, data) => {
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["b" /* CLASSIFY */], data);
    },

    //仓库商品列表
    goodsLists: ({ commit }, searchParams) => {
        __WEBPACK_IMPORTED_MODULE_1__api_common__["b" /* getGoodsLists */](searchParams).then(lists => {
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["c" /* GOODSLIST */], lists);
        });
    }
};

const mutations = {
    //属性模板列表
    [__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["a" /* ATTRLIST */]](state, lists) {
        state.attrLists = lists;
    },
    //属性模板具体属性值
    [__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["b" /* CLASSIFY */]](state, data) {
        if (!data || data.length < 1) {
            data = [{ keys: '', alias: '', vs: [] }];
        }
        data.map(item => {
            item.vs = new Set(item.vs);
            return item;
        });
        state.classify = data;
    },
    [__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["c" /* GOODSLIST */]](state, data) {
        state.goodsLists = data;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    state,
    getters,
    actions,
    mutations
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_menu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_menu__);






//state
const state = {
    menu: null,
    crumb: {
        first: '',
        last: ''
    }
};

//创建getters
const getters = {
    getMenu: state => {
        let m = state.menu;
        if (!state.menu) {
            m = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* getData */]('menu');
        }
        if (typeof m === 'string') {
            return JSON.parse(m);
        }
        return m;
    }

    //创建actions
};const actions = {
    //获取权限菜单
    getAllAuthMenu: ({ commit }, resh = false) => {
        let menu = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* getData */]('menu');
        if (resh || !menu) {
            let user = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__data__["a" /* getData */]('userInfo'));

            __WEBPACK_IMPORTED_MODULE_1__api_common__["e" /* getAllMenu */]({ uid: user.id }).then(re => {
                let c = JSON.parse(JSON.stringify(__WEBPACK_IMPORTED_MODULE_3__router_component__["a" /* default */]));
                let m = handleMenu(c, re.rules);
                __WEBPACK_IMPORTED_MODULE_2__data__["b" /* setData */]('auth', re.rules);
                __WEBPACK_IMPORTED_MODULE_2__data__["b" /* setData */]('menu', m);
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["g" /* GET_MENU */], m);
            });
        } else {
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["g" /* GET_MENU */], menu);
        }
    }

    //提交状态改变
};const mutations = {
    [__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["g" /* GET_MENU */]](state, menus) {
        state.menu = menus;
    },

    [__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["h" /* BREADCRUMB */]](state, crumb) {
        state.crumb = crumb;
    }
};

//过滤菜单
function handleMenu(r, rules) {
    for (let i = 0; i < r.length; i++) {
        delete r[i].component;
        //过滤子栏目下权限不足的菜单
        if (r[i].hasOwnProperty('children')) {
            let access = handleMenu(r[i]['children'], rules);
            if (access.length > 0) {
                r[i]['children'] = access;
                if (access.length == 1) {
                    r[i]['noDropdown'] = true;
                }
            } else {
                r.splice(i, 1, false);
            }
        }
        if (r[i].hasOwnProperty('hidden') && r[i].hidden) {
            r.splice(i, 1, false);
        }
        if (r[i].hasOwnProperty('meta') && r[i]['meta'].hasOwnProperty('alias') && rules.indexOf(__WEBPACK_IMPORTED_MODULE_4__config_menu___default.a[r[i]['meta']['alias']]) == -1) {
            r.splice(i, 1, false);
        }
    }
    let a = r.filter(item => {
        return item ? 1 : 0;
    });
    return a;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    state,
    getters,
    actions,
    mutations
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common__ = __webpack_require__(3);



//state
const state = {
    groupList: ''
};

//创建getters
const getters = {
    getGroup: state => {
        return state.groupList;
    }

    //创建actions
};const actions = {
    //获取用户列表
    getGroupList: ({ commit }, searchParams) => {
        __WEBPACK_IMPORTED_MODULE_1__api_common__["c" /* authGroup */](searchParams).then(list => {
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["d" /* GROUPLIST */], list);
        });
    }

    //提交状态改变
};const mutations = {

    //用户列表
    [__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["d" /* GROUPLIST */]](satate, lists) {
        state.groupList = lists;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    state,
    getters,
    actions,
    mutations
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(5);




//state
const state = {
    info: null,
    userList: ''
};

//创建getters
const getters = {
    //当前登陆用户信息
    getUserInfo: state => {
        let info = getters.baseInfo();
        let defaultInfo = {
            img: '',
            userName: ''
        };
        return Object.assign(defaultInfo, info);
    },
    //当前登陆用户基础信息
    baseInfo: satate => {
        let info = state.info;
        if (!info) {
            info = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* getData */]('userInfo') || null;
        }
        if (typeof info !== 'object') {
            info = JSON.parse(info);
        }
        return info;
    },

    //获取用户列表
    getUserList: state => state.userList

    //创建actions
};const actions = {
    //登陆状态
    Login: ({ commit }, userInfo) => {
        __WEBPACK_IMPORTED_MODULE_2__data__["b" /* setData */]('userInfo', userInfo);
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["e" /* USERINFO */], userInfo);
    },
    //退出登录
    loginOut: ({ commit }) => {
        __WEBPACK_IMPORTED_MODULE_2__data__["c" /* delData */]('userInfo');
        __WEBPACK_IMPORTED_MODULE_2__data__["c" /* delData */]('auth');
        __WEBPACK_IMPORTED_MODULE_2__data__["c" /* delData */]('menu');
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["e" /* USERINFO */], null);
    },

    //获取用户列表
    getUserList: ({ commit }, searchParams) => {
        __WEBPACK_IMPORTED_MODULE_1__api_common__["d" /* getUserList */](searchParams).then(list => {
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["f" /* USERLIST */], list);
        });
    }

    //提交状态改变
};const mutations = {
    //当前登陆用户信息
    [__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["e" /* USERINFO */]](state, info) {
        state.info = info;
    },

    //用户列表
    [__WEBPACK_IMPORTED_MODULE_0__mutation_types_js__["f" /* USERLIST */]](satate, lists) {
        state.userList = lists;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    state,
    getters,
    actions,
    mutations
});

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view')], 1)
},staticRenderFns: []}

/***/ })
],[44]);
//# sourceMappingURL=app.296ed1ddab2e5b85904d.js.map