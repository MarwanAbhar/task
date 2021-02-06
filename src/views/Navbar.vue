<template>
<div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item :disabled="resourcedisabled" index="1">Resource</el-menu-item>
  <el-menu-item :disabled="usersdisabled"  index="2">Users</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        resourcedisabled: {
            type: Boolean,
            default: false 
        },
        usersdisabled: { 
            type: Boolean,
            default: false 
        }
    },
    data() {
        return {
            activeIndex: '',
        }
    },
    methods: {
        handleSelect(key) {
            if(key == 2){
                 this.usersdisabled = true
                this.resourcedisabled = false
                this.$router.push('/users')
               

            } else if (key ==1) {
               
                this.$router.push('/resource')
                 this.resourcedisabled = true
                this.usersdisabled = false
               
            }

        }
    },
    mounted() {
        console.log(this.activeIndex)
    }
}
</script>