<template>
	<el-calendar>
		<template #dateCell="{data}">
			<p :class="data.isSelected ? 'is-date-selected' : ''">
				{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
			</p>
		</template>
	</el-calendar>
</template>
<script>
</script>
<style>
.is-date-selected {
	color: #1989FA;
}
</style>
