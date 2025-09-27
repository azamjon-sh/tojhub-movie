<script setup lang="ts">

</script>

<template>
	<header class="header flex items-center justify-between h-20 px-8 top-0 z-10">
				<NuxtLink to="/" class="header_logo text-white text-[30px]">
					Tojhub<span class="text-green">Movie</span>
				</NuxtLink>
				<div class="header_menu flex items-center gap-6 text-white ">
					<NuxtLink to="/">Главная</NuxtLink>
					<NuxtLink to="/movies">Фильмы</NuxtLink>
					<NuxtLink to="/serials">Сериалы</NuxtLink>
				</div>
				<AppButton>Войти</AppButton>
	</header>
</template>

<style scoped>

</style>