<template>
	<el-sample-form></el-sample-form>
</template>
<script>
	import api from '/@/api'
	// import request from '/@/utils/request'
	export default {
		name: 'ElPageDemo',
		data(){
			
			return {
				filterText: '',
				formInline: {
					user: '',
					region: ''
				},
				data:{}
			}
		},
		props: {
			separator: {
				type: String,
				default: '/'
			},
			separatorClass: {
				type: String,
				default: ''
			}
		},
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},
		mounted() {
			api.getMenus.send()
			.then(res => {
				console.log(res)
				
			})
			.catch(e => {
				console.log(e)
			})

		},
		methods:{
			append(data) {
				const newChild = { id: id++, label: 'testtest', children: [] };
				if (!data.children) {
					data.children = []
				}
				data.children.push(newChild);
				this.data = [...this.data]
			},

			remove(node, data) {
				const parent = node.parent;
				const children = parent.data.children || parent.data;
				const index = children.findIndex(d => d.id === data.id);
				children.splice(index, 1);
				this.data = [...this.data]
			},
			renderContent(h, { node, data, store }) {
				return h("span", {
					class: "custom-tree-node"
				}, h("span", null, node.label), h("span", {
					class: ""
				}, h("span", {
					onClick: () => this.append(data),
					class:'el-icon-plus tree-item-icon'
				}, ""), h("span", {
					onClick: () => this.remove(node, data),
					class:'el-icon-delete tree-item-icon'
				}, "")));
			},
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			}
		},
		computed:{

		},
		created(){

		}
	};
</script>
<style >

</style>