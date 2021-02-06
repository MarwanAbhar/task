<template>
  <div class="home">
    <Navbar />
    <div>
       <!-- <el-table
      :data="tableData"
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
    </el-table> -->
    <el-form>
    <el-form-item label="Name">
        <el-input disabled v-model="tableData.name"></el-input>
    </el-form-item>
    <el-form-item label="Year">
        <el-input disabled v-model="tableData.year"></el-input>
    </el-form-item>
    <el-form-item label="Color">
        <el-input disabled v-model="tableData.color"></el-input>
    </el-form-item>
    <el-form-item label="Pantone value">
        <el-input disabled v-model="tableData.pantone_value"></el-input>
    </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from './Navbar'
import sendRequest from "../apimodule"

export default {
  name: 'UserProfile',
  components: {
    Navbar
  },
  data() {
    return {
      userId: '',
      tableData: {}
    }
  },
  methods: {
    getUserData() {
      var successCallback = response => {
          console.log(response.data.data)
			this.tableData = response.data.data
			
			}

			var errorCallback = error => {
				this.$message ({
					type: error,
					message: "There is an error. Please try again.",
					showClose: true
				})
			}

			sendRequest('get', 'unknown/' + this.userId, null, successCallback, errorCallback)
    }
  },
  mounted() {
      this.userId = this.$route.params.id
    this.getUserData()
  },
}
</script>
