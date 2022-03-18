import { getMenuList } from '@/api/url'
import Mock from 'mockjs'

export const adminRoutes = [
  {
    menuUrl: '/system',
    menuName: '系统管理',
    iconPrefix: 'iconfont',
    icon: 'icon-settings',
    parentPath: '',
    children: [
      {
        parentPath: '/system',
        menuUrl: '/system/department',
        menuName: '部门管理',
        badge: 'new',
        cacheable: true,
      },
      {
        parentPath: '/system',
        menuUrl: '/system/user',
        menuName: '用户管理',
        badge: 'dot',
      },
      {
        parentPath: '/system',
        menuUrl: '/system/role',
        menuName: '角色管理',
        badge: '12',
      },
      {
        parentPath: '/system',
        menuUrl: '/system/menu',
        menuName: '菜单管理',
        cacheable: true,
      },
    ],
  },
  {
    menuUrl: '/list',
    menuName: '列表页面',
    icon: 'icon-list',
    parentPath: '',
    children: [
      {
        parentPath: '/list',
        menuUrl: '/list/table-with-search',
        menuName: '表格搜索',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/table-custom',
        menuName: '自定义表格',
      },
    ],
  },
  {
    menuUrl: '/form',
    menuName: '表单页面',
    badge: 'dot',
    icon: 'icon-edit',
    parentPath: '',
    children: [
      {
        parentPath: '/form',
        menuUrl: '/form/base-form-view',
        menuName: '基本表单',
        cacheable: true,
      },
    ],
  },
  {
    menuUrl: '/project',
    menuName: '项目信息',
    icon: 'icon-mind-mapping',
    isSingle: true,
    children: [
      {
        parentPath: '/project',
        menuUrl: '/project/infomation',
        menuName: '项目依赖',
      },
    ],
  },
]
export const editorRoutes = [
  {
    menuUrl: '/project',
    menuName: '项目信息',
    iconPrefix: 'iconfont',
    icon: 'detail',
    children: [
      {
        parentPath: '/project',
        menuUrl: '/project/infomation',
        menuName: '项目依赖',
      },
    ],
  },
]

Mock.mock(RegExp(getMenuList), 'post', function () {
  return Mock.mock({ code: 200, data: adminRoutes, msg: '获取菜单列表成功' })
})
