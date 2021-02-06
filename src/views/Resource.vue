<template>
  <div class="home">
    <Navbar v-bind:resourcedisabled="true" />
    <div>
       <el-table
      :data="tableData"
      @row-click="UserDetails($event)"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="year"
        label="Year"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="color"
        label="Color"
        min-width="120">
      </el-table-column>
         <el-table-column
        prop="pantone_value"
        label="Pantone Value"
        min-width="120">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from './Navbar'
import sendRequest from "../apimodule"

export default {
  name: 'Resource',
  components: {
    Navbar
  },
  data() {
    return {
      tableData: [],
      resourcedisabled: true,
      usersdisabled: false
    }
  },
  methods: {
      UserDetails(event){
          this.$router.push ({
              name: 'UserProfile',
              params: { 
                id: event.id
            }
          })

      },
    getResource() {
      var successCallback = response => {
			this.tableData = response.data.data
			
			}

			var errorCallback = error => {
				this.$message ({
					type: error,
					message: "There is an error. Please try again.",
					showClose: true
				})
			}

			sendRequest('get', 'unknown', null, successCallback, errorCallback)
    }
  },
  mounted() {
    this.getResource()
  }
}
</script>
