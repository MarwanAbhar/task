<template>
<div class="login-page">
	<div class="login">
		<div class="box">
			<div class="container">
			<el-row>
				<p class="register">Login</p>
			</el-row>
			<el-container>
			<el-form label-position="left" style="width: 80%; margin-left: 20px" label-width="130px" ref="form" :model="form" :rules="rules">
				
					<el-form-item label="Email" style="width: 100%" prop="email">
						<el-input v-model="form.email" placeholder="Enter Email Address"></el-input>
					</el-form-item>
					<el-form-item label="Password" prop="password">
						<el-input v-model="form.password" style="width: 100%" placeholder="Enter Password" type="password"></el-input>
					</el-form-item>

					<el-form-item style="text-align: center">
						<el-button round @click="login('form')" class="signup"><span class="text">Sign in</span></el-button>
					</el-form-item>

			</el-form>
			</el-container>
			<div class="accountdiv">
			<p class="account">Don't have an account?</p>
			<p class="click" @click="register">Register Here</p>
			</div>
			</div>



		</div>

	</div>


</div>
	
</template>

<script>
import sendRequest from "../../apimodule";
export default {
	name: 'Login',
	data() {
		return {
			form: {
				email: '',
				password: ''
			},
			rules: {
				email: [
				{ required: true, message: "Please enter an email", trigger: 'blur' }
				],
				password: [
				{	required:true, message:"Please enter a password", trigger: 'blur' }
				]

			}
		}

	},
	methods: {
		login() {
			this.$refs.form.validate((valid) => {
				if(valid) {
				var successCallback = response => {
				this.$store.commit("setToken", response.data.token)
				this.$router.push ({
					name: 'Resource'
				})


			}

			var errorCallback = error => {
				this.$message ({
					type: error,
					message: "There is an error. Please try again.",
					showClose: true
				})
			}

			sendRequest('post', 'login', this.form, successCallback, errorCallback)

			} else {
				this.$message({
					type: "error",
					message: "Please fill the missing fields",
					showClose: true
				})
			}

			})
			
			
		},
		register() {
			this.$router.push({
				name: 'Register'
			})
		}
	}
}
</script>

<style>
.login-page {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0 !important;
	background-color: aquamarine;
}

.register {
	margin-left: 20px;
}

 .box {
	background-color: white;
	margin: auto;
	width: 55%;
	text-align: left;
	margin-top: 80px;
 }

 .signup {
	background-color: aquamarine !important;
	color: white !important;
	
 }

.text {
	padding-left: 10px !important;
	padding-right: 10px !important;

}	

@media screen and (max-width: 600px) {
	.box {
		width: 100%!important;
	}
	
}

</style>