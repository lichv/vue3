<template>
  <el-menu :default-active="activeIndex" class="el-top-menu" mode="horizontal" @select="handleSelect" router>
    <template v-for="menu in menus">
      <el-menu-item  :index="menu.link+''">
        <i :class="menu.icon" v-if="menu.icon != ''"></i>
        <template #title>
          <span >{{menu.title}}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
  export default {
    name: 'ElTopMenu',
    data(){
      return{
        isCollapse: true,
        activeIndex: '1',
        menus:[
        {
          "link":"/",
          "title":"资源管理",
          "icon":"el-icon-s-management",
          "children":[

          ],
        },
        {
          "link":"/sale",
          "title":"销售管理",
          "icon":"el-icon-s-promotion",
          "children":[

          ],
        },
        {
          "link":"/research",
          "title":"研发管理",
          "icon":"el-icon-s-opportunity",
          "children":[

          ],
        },
        {
          "link":"/production",
          "title":"生产管理",
          "icon":"el-icon-s-claim",
          "children":[

          ],
        },
        {
          "link":"/finance",
          "title":"财务管理",
          "icon":"el-icon-s-finance",
          "children":[

          ],
        },
        {
          "link":"/human",
          "title":"人力管理",
          "icon":"el-icon-s-custom",
          "children":[

          ],
        },
        {
          "link":"/analysis",
          "title":"统计分析",
          "icon":"el-icon-s-data",
          "children":[

          ],
        },
        {
          "link":"/system",
          "title":"系统设置",
          "icon":"el-icon-s-tools",
          "children":[

          ],
        },{
          "link":"/test",
          "title":"",
          "icon":"el-icon-s-grid",
          "children":[

          ],
        }
        ],
      };
    },
    compute:{
      path(){
        return this.$router.path;
      }
    },
    mounted() {

    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>
<style>

</style>