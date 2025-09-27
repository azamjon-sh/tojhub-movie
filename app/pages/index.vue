<script setup>
import {useAsyncData, useFetch, useRuntimeConfig,useNuxtApp} from '#app'
import {onMounted} from "vue";

const {$axios} = useNuxtApp();

const {data: videos, pending: loading} = await useAsyncData("videos", async () => {
	const res = await $axios.get("/api/v1/publisher/videos/links?limit=20");
	return res.data.data;
});
onMounted(async () => {
	try {
		if (!videos.value.length) {
		const res = await $axios.get("/api/v1/publisher/videos/links?limit=20");
		videos.value = res.data.data;
		}
	} catch (error) {
		console.error("Ошибка загрузки товаров:", error);
	} finally {
		loading.value = false;
	}
});
</script>

<template>
	<template v-if="videos?.length">
		<IntroSlider :videos="videos"/>
		<PopularVideos :videos="videos"/>
	</template>
</template>
