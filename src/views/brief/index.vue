<template>
  <div class="content">
    <div class="box-card bg">
      <el-container>
        <el-aside style="width: 300px;min-height: 500px;" class="border-right">
          <el-menu 
            :default-active="menuActive" 
            class="el-menu-vertical-demo" 
            background-color="#545c64" 
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="selectMenu">
            <template v-for="parent in menuList">
              <el-submenu :index="parent.index" v-if="parent.children.length > 0" :key="parent.index">
                <template slot="title">
                  <i :class="parent.icon"></i>
                  <span slot="title">{{parent.title}}</span>
                </template>
                <el-menu-item-group :index="child.index" v-for="child in parent.children" :key="child.index">
                  <el-menu-item :index="child.index">
                    <template slot="title">
                      <i :class="child.icon"></i>
                      <span slot="title">{{child.title}}</span>
                    </template>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item :index="parent.index" v-else :key="parent.index">
                <i :class="parent.icon"></i>
                <span slot="title">{{parent.title}}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <navSh v-if="menuActive == 'nav'"></navSh>
          <webType v-if="menuActive == 'webType'"></webType>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  import service from './service.js'
  import navSh from './nav_sh.vue'
  import webType from './web_type.vue'
  export default {
    components:{
      navSh,
      webType
    },
    data() {
      return {
        menuActive: 'webType',
        menuList:[
          { title:'导航管理', index:'nav', icon:'el-icon-link', children: [] },
          { title:'权限管理', index:'qxgl', icon:'el-icon-lock', children: [] },
          { title:'标准项维护', index:'bzx', icon:'el-icon-lock', children:[
            { title:'网站类型', index:'webType', icon:'el-icon-link' }
          ]}
        ]
      }
    },
    mounted() {
      
    },
    methods:{
      selectMenu(key, keyPath){
        this.menuActive = key;
      }
    }
  }
</script>

<style scoped="scoped">
	
</style>
