<template>
  <div class="asider-menu">
    <div class="asider-menu-header">
      <div class="asider-menu-empty"></div>         
    </div>
    <el-menu :uniqueOpened="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#001529" text-color="#aaa" active-text-color="#fff" :collapse="isCollapse" router>
      <template v-for="menu in data">
        <el-submenu v-if="'children' in menu && Object.keys(menu.children).length > 0" :index="menu.link+''">
          <template #title>
            <i :class="menu.icon" v-if="menu.icon != ''"></i>
            <span slot="title">{{menu.title}}</span>
          </template>
          <template v-for="submenu in menu.children">
            <el-submenu v-if="'children' in submenu && Object.keys(submenu.children).length > 0"  :index="submenu.link+''" class="grandmenu">
              <template #title>
                <i :class="submenu.icon" v-if="submenu.icon != ''"></i>
                <span slot="title">{{submenu.title}}</span>
              </template>
              <template v-for="grandmenu in submenu.children">
                <el-menu-item :index="grandmenu.id+''">
                  <template #title>
                    <i :class="grandmenu.icon" v-if="grandmenu.icon != ''"></i>
                    <span slot="title">{{grandmenu.title}}</span>
                  </template>
                </el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item v-else :index="submenu.link+''">
              <template #title>
                <i :class="submenu.icon" v-if="submenu.icon != ''"></i>
                <span slot="title">{{submenu.title}}</span>
              </template>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else  :index="menu.link+''">
          <i :class="menu.icon" v-if="menu.icon != ''"></i>
          <template #title>
            <span >{{menu.title}}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="aside-home" @click="handleClick">
      <span v-if="isCollapse" class="el-icon-s-unfold"></span>
      <span v-else class="el-icon-s-fold"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ElAsiderMenu',
    data(){
      return{
        isCollapse: false,
        data:this.tree,
        treeData:[
        {
          'link':'/',
          'title':'面板',
          'icon':'el-icon-odometer',
        },
        {
          'link':'/resources/user1',
          'title':'用户管理',
          'icon':'el-icon-user',
          'children':[
          {
            'link':'/resources/user2',
            'title':'用户',
            'icon':'el-icon-menu',
            'children':[
            {
              'link':'/resources/user/',
              'title':'用户列表',
              'icon':'el-icon-menu',
            },
            {
              'link':'/resources/user/add',
              'title':'添加用户',
              'icon':'el-icon-menu',
            },
            {
              'link':'/resources/user/relationship',
              'title':'亲属关系',
              'icon':'el-icon-menu',
            },
            ],
          },
          {
            'link':'/resources/doctor',
            'title':'医生',
            'icon':'el-icon-menu',
            'children':[
            {
              'link':'/resources/doctor/',
              'title':'医生列表',
              'icon':'el-icon-menu',
            },
            {
              'link':'/resources/doctor/add',
              'title':'添加医生',
              'icon':'el-icon-menu',
            },
            ],
          },
          {
            'link':'/resources/hospital',
            'title':'医院',
            'icon':'el-icon-menu',
            'children':[
            {
              'link':'/resources/hospital/',
              'title':'医院列表',
              'icon':'el-icon-menu',
            },
            {
              'link':'/resources/hospital/add',
              'title':'添加医院',
              'icon':'el-icon-menu',
            },
            {
              'link':'/resources/hospital/department_tag',
              'title':'科室标签',
              'icon':'el-icon-menu',
            },
            ],
          },
          {
            'link':'/resources/orgnization',
            'title':'机构',
            'icon':'el-icon-menu',
            'children':[
            {
              'link':'/resources/orgnization/',
              'title':'机构列表',
              'icon':'el-icon-menu',
            },
            {
              'link':'/resources/orgnization/add',
              'title':'添加机构',
              'icon':'el-icon-menu',
            },
            ],
          },
          ]
        },
        {
          'link':'/resources/product',
          'title':'产品管理',
          'icon':'el-icon-goods',
          'children':[
          {
            'link':'/resources/product',
            'title':'产品列表',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/add',
            'title':'新增产品',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/price',
            'title':'价格备案',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/price',
            'title':'实验室内容管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/laboratory',
            'title':'生信内容管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/bioanalysis',
            'title':'医学报告类型',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/report_type',
            'title':'医学报告模板管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/report_template',
            'title':'生产状态管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/process',
            'title':'生产操作管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/product/progress',
            'title':'生产流程管理',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/resources/sample',
          'title':'样本管理',
          'icon':'el-icon-goblet',
          'children':[
          {
            'link':'/resources/sample/store',
            'title':'样本库存',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/sample/collection',
            'title':'样本采集',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/sample/post',
            'title':'样本寄送',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/sample/receive',
            'title':'样本接收',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/sample/use',
            'title':'样本领用',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/sample/extraction',
            'title':'核酸提取',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/receipt',
            'title':'样本入库',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/sample/destroy',
            'title':'样本销毁',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/resources/project',
          'title':'项目管理',
          'icon':'el-icon-document',
          'children':[
          {
            'link':'/resources/project/store',
            'title':'项目列表',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/project/add',
            'title':'项目录入',
            'icon':'el-icon-menu',
          },
          ]
        },
        {
          'link':'/resources/team',
          'title':'人力管理',
          'icon':'el-icon-help',
          'children':[
          {
            'link':'/resources/team/store',
            'title':'部门管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/team/collection',
            'title':'人员管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/team/post',
            'title':'权限管理',
            'icon':'el-icon-menu',
          },
          {
            'link':'/resources/team/receive',
            'title':'绩效管理',
            'icon':'el-icon-menu',
          },
          ]
        },
        ]
      };
    },
    props: {
      tree:{
        type: Array,
        default: [],
      },
    },

    mounted() {
      console.log('this.data',this.data)
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(){
        console.log('isCollapse',this.isCollapse)
        this.isCollapse = !this.isCollapse;
      },
    },
    setup(props, ctx) {
      const handleInput = e => {
        ctx.emit("update:value", e.target.value);
      };
      return { handleInput };
    }
  };
</script>
<style>
.asider-menu{
  height: 100%;
}
.asider-menu .el-menu{
  border: 1px solid #001529;
}
.asider-menu .el-menu-item, .el-submenu__title{
  height: 36px;
  line-height: 36px;
}
.asider-menu .el-menu-item.is-active{
  padding: 0 14px;
}
.asider-menu .el-menu-item.is-active .aside-menu-item{
  border-radius: 5px;
  background-color: #409EFF;
  color: #fff;
  height: 34px;
}
.asider-menu .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  text-align: left;
}
.asider-menu > .el-menu--collapse + .aside-home{

}
.asider-menu > .el-menu + .aside-home{
  position: absolute;
  bottom: 6px;
  right: 20px;
  font-size:20px;
  color: #fff;
}
.asider-menu-header{
  height: 50px;
}
.asider-menu-empty{
  height: 40px;
}
.aside-menu-item{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
  padding: 4px 12px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 4px;
  font-size: 18px;
}
.aside-home{
  height: 56px;
  line-height: 56px;
  position: relative;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color .3s,background-color .3s,color .3s;
  transition: border-color .3s,background-color .3s,color .3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
}
.aside-home-text{
  color:#bebec0;
}

</style>