<template>
  <div class="home">
    <Navbar v-bind:usersdisabled="true" />
    <div>
       <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="first_name"
        label="First Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="last_name"
        label="Last Name"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email"
        min-width="120">
      </el-table-column>
         <el-table-column
        prop="avatar"
        label="avatar"
        min-width="150">
        <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="img">
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :page-size="PageSize"
    :total="count"
    :current-page="PageNumber"
    @current-change="handleCurrentChange">
  </el-pagination>
</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from './Navbar'
import sendRequest from "../apimodule"

export default {
  name: 'Users',
  components: {
    Navbar
  },
  data() {
    return {
      tableData: [],
      usersdisabled: true,
      PageNumber: 1,
      totalItems: 0,
      PageSize: 6
    }
  },
  methods: {
      handleCurrentChange(val) {
          this.pageNumber = val
          this.getUsers()
      },
 

    getUsers() {
      var successCallback = response => {
			this.tableData = response.data.data
            this.totalItems = response.data.total
			
			}

			var errorCallback = error => {
				this.$message ({
					type: error,
					message: "There is an error. Please try again.",
					showClose: true
				})
			}

			sendRequest('get', 'users?page=' + this.pageNumber, null, successCallback, errorCallback)
    }
  },
  mounted() {
    this.getUsers()
  },
  computed: {
      count() {
          return this.totalItems;
      }
  }
}
</script>
