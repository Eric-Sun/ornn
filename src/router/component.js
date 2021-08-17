const _import = require('./_import_' + process.env.NODE_ENV);

//login 
const Login = _import('Login/Login');

//layout
const layout = _import('main');

//主面板
const main = _import('index/index');


const postList = _import('post/index')
const postDetail = _import("post/detail")
const replyDetail=_import("post/replyDetail")
const deletedPostList= _import("post/deletedList")
const offlineList = _import("post/offlineList")
const starPostList = _import("post/starPostList")
const topicList = _import("topic/list")
const unauditList = _import("post/unauditList")
const bannerIndex = _import("banner/index")

/** 仓库模块 end **/

export default [
  {
    path: '/login', component: Login, hidden: true
  },
  {
    path: '/', redirect: '/main', hidden: true
  },
  {
    path: '/main', name: '', icon: 'grid', component: layout, noDropdown: true, children: [{ path: '', name: '主页', component: main }]
  },
  {
    path: '/post', name: '贴吧', icon: 'ios-cog', component: layout, redirect: '/post/postList',
    children: [
      { path: 'list', name: '帖子列表', meta: { alias: 'postList' }, component: postList },
      { path: 'deletedList', name: '已删除帖子列表', meta: { alias: 'deletedPostList' }, component: deletedPostList },
      { path: 'offlineList', name: '已下架帖子列表', meta: { alias: 'offlineList' }, component: offlineList },
      { path: 'starPostList', name: '精华帖子列表', meta: { alias: 'starPostList' }, component: starPostList },
      { path: 'detail', name: '帖子列表', meta: { alias: 'postDetail' }, component: postDetail ,hidden: true  },
      { path: 'replyDetail', name: '回复列表', meta: { alias: 'replyDetail' }, component: replyDetail ,hidden: true  },
      { path: 'unauditList', name: '需审核列表', meta: { alias: 'unauditList' }, component: unauditList  }

      // 如果写多行的话才会在menu显示出贴吧两个字,需要修改mock，需要修改menu.js
    ]
  },
  {
    path: '/topic', name: 'topic', icon: 'ios-cog', component: layout, redirect: '/topic/list',
    children: [
      { path: 'list', name: 'topic列表', meta: { alias: 'topicList' }, component: topicList }

    ]
  },
  {
    path: '/banner', name: 'banner', icon: 'ios-cog', component: layout, redirect: '/banner/index',
    children: [
      { path: 'index', name: 'banner列表', meta: { alias: 'bannerIndex' }, component: bannerIndex }

    ]
  }
  // {
  //   path: '/sys', name: '系统设置', icon: 'ios-cog', component: layout, redirect: '/sys/user',
  //   children: [
  //     { path: 'user', name: '用户列表', meta: { alias: 'user' }, component: userMain },
  //     { path: 'user/add', name: '添加用户', meta: { alias: 'user_add' }, component: addUser, hidden: true },
  //     { path: 'user/edit', name: '编辑用户', meta: { alias: 'user_edit' }, component: editUser, hidden: true },
  //     { path: 'user/change', name: '修改密码', meta: { alias: 'user_pwd' }, component: changPwd, hidden: true },
  //     { path: 'group', name: '权限分组', meta: { alias: 'group' }, component: authMain },
  //     { path: 'group/add', name: '添加分组', meta: { alias: 'group_add' }, component: addAuth, hidden: true },
  //     { path: 'group/edit', name: '编辑分组信息', meta: { alias: 'group_edit' }, component: editAuth, hidden: true }
  //   ]
  // },
  // {
  //   path: '/pro', name: '产品中心', component: layout, redirect: '/pro/goods', icon: 'android-playstore',
  //   children: [
  //     { path: 'brand', name: '品牌列表', meta: { alias: 'brand' }, component: brand },
  //     { path: 'brand/add', name: '添加品牌', meta: { alias: 'brand_create' }, component: brandAdd, hidden: true },
  //     { path: 'brand/edit', name: '编辑品牌', meta: { alias: 'brand_update' }, component: brandEdit, hidden: true },
  //     { path: 'cate', name: '商品分类', meta: { alias: 'cate' }, component: cate },
  //     { path: 'cate/add', name: '添加分类', meta: { alias: 'cate_create' }, component: addGoodsTemp, hidden: true },
  //     { path: 'cate/edit', name: '编辑分类', meta: { alias: 'cate_update' }, component: editGoodsTemp, hidden: true },
  //     { path: 'attrtemp', name: '属性模板', meta: { alias: 'attr' }, component: goodsTempMain },
  //     { path: 'attrtemp/add', name: '添加属性模板', meta: { alias: 'attr_create' }, component: addGoodsTemp, hidden: true },
  //     { path: 'attrtemp/edit', name: '编辑属性模板', meta: { alias: 'attr_update' }, component: editGoodsTemp, hidden: true },
  //     { path: 'goods', name: '商品列表', meta: { alias: 'goods' }, component: goodsMain },
  //     { path: 'goods/add', name: '添加商品', meta: { alias: 'goods_add' }, component: addGoods, hidden: true },
  //     { path: 'goods/edit', name: '编辑商品', meta: { alias: 'godos_edit' }, component: editGoods, hidden: true },
  //   ]
  // },
  // {
  //   path: '/seller', name: '门店管理', component: layout, redirect: '/seller/store', icon: 'pricetags',
  //   children: [
  //     { path: 'store', name: '门店列表', meta: { alias: 'seller' }, component: seller },
  //     { path: 'store/add', name: '添加门店', meta: { alias: 'seller_create' }, component: sellerAdd, hidden: true },
  //     { path: 'store/edit', name: '修改门店', meta: { alias: 'seller_update' }, component: sellerEdit, hidden: true },
  //     { path: 'store/info', name: '门店详情', meta: { alias: 'seller_info' }, component: sellerInfo, hidden: true },
  //     { path: 'asslist', name: '店员管理', meta: { alias: 'seller_all_asslist' }, component: sellerAsslist }
  //   ]
  // },
  // {
  //   path: '/consumer', name: '消费者管理', component: layout, redirect: '/consumer/index', icon: 'cube',
  //   children: [
  //     { path: 'index', name: '消费者列表', meta: { alias: 'consumer' }, component: consumer },
  //     { path: 'info', name: '消费者详情', meta: { alias: 'consumer_info' }, component: consumerInfo, hidden: true },
  //   ]
  // },
  // {
  //   path: '/order', name: '订单管理', component: layout, redirect: '/order/index', icon: 'bag',
  //   children: [
  //     { path: 'index', name: '订单列表', meta: { alias: 'order' }, component: order },
  //     { path: 'info', name: '订单详情', meta: { alias: 'order_info' }, component: orderInfo, hidden: true },
  //     { path: 'call', name: '呼叫记录', meta: { alias: 'consumer_call' }, component: call },
  //     { path: 'buy', name: '代客下单', meta: { alias: 'order_create' }, component: buy },
  //   ]
  // },
  // {
  //   path: '/finance', name: '财务中心', component: layout, redirect: '/finance/index', icon: 'social-yen',
  //   children: [
  //     { path: 'index', name: '支付记录', meta: { alias: 'finance_pay' }, component: finance },
  //     { path: 'pay', name: '消费者支付记录', meta: { alias: 'finance_pay' }, component: finance, hidden: true },
  //     { path: 'urefund', name: '消费者退款记录', meta: { alias: 'finance_refund' }, component: finance, hidden: true },
  //     { path: 'purlist', name: '门店采购支付记录', meta: { alias: 'finance_purlist' }, component: finance, hidden: true },
  //     { path: 'settlement', name: '门店结算记录', meta: { alias: 'finance_settle' }, component: finance, hidden: true },
  //     { path: 'approvallist', name: '提现审批', meta: { alias: 'finance_cash' }, component: cash },
  //     { path: 'approval', name: '提现申请', meta: { alias: 'finance_cash_audit' }, component: finance, hidden: true },
  //     { path: 'refundlist', name: '退款审批', meta: { alias: 'finance_refund_applf' }, component: refund },
  //     { path: 'refundinfo', name: '退款单详情', meta: { alias: 'finance_refund_audit' }, component: refundInfo, hidden: true },
  //   ]
  // },
  // {
  //   path: '/godown', name: '仓库管理', component: layout, redirect: '/godown/index', icon: 'soup-can',
  //   children: [
  //     { path: 'index', name: '仓库列表', meta: { alias: 'godown' }, component: godown },
  //     { path: 'add', name: '添加仓库', meta: { alias: 'godown_create' }, component: godown_create, hidden: true },
  //     { path: 'edit', name: '编辑仓库', meta: { alias: 'godown_update' }, component: godown_update, hidden: true },
  //     { path: 'user', name: '仓库人员', meta: { alias: 'godown_userlist' }, component: godown_user },
  //     { path: 'useradd', name: '添加仓库人员', meta: { alias: 'godown_adduser' }, component: godown_adduser, hidden: true },
  //   ]
  // }


]