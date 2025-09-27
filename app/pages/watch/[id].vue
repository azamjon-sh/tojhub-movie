<script setup>
import {useAsyncData, useRoute } from '#app'
import {ref,onMounted} from "vue";
const { $axios } = useNuxtApp();
const route = useRoute()

// Получаем данные с API через SSR
const { data: video } = await useAsyncData(`video-${route.params.id}`, () =>
		$axios.get(`/api/v1/publisher/videos/kp/${route.params.id}?design=4`).then((res) => res.data)
);
const activeTab = ref('description')

onMounted(async () => {
	try {
		if (!video.value.id) {
		const res = await $axios.get(`/api/v1/publisher/videos/kp/${route.params.id}`);
		video.value = res.data;
		}
	} catch (error) {
		console.error("Ошибка загрузки товаров:", error);
	}
});
</script>

<template>
	<template v-if="video">
		<section class="video-preview w-full h-[calc(100vh-80px)] bg-center-top
		 bg-no-repeat bg-cover"
		         :style="video.backdrop_url?`background-image:url('${video.backdrop_url}')`:''">
			<div class="content relative h-full">
				<div class="absolute bottom-[100px] left-5 p-6 backdrop-blur-md rounded-2xl">
					<h1 class="text-[40px] leading-[56px] text-white font-bold">{{ video.name_rus ?? video.name }}</h1>
					<div class="flex items-center gap-2 text-sm text-white">
					<span
							class="bg-[#f50] rounded-md p-1.5"
							v-if="video.kp_rating || video.imdb_rating">
						{{ video.kp_rating ? 'KP: ' + video.kp_rating : (video.imdb_rating ? 'KP: ' + video.imdb_rating : '') }}
					</span>
						<span class="font-bold">{{ video.year }}</span>
						<span class="">{{ video.genre ? video.genre.join(', ') : '' }}</span>
					</div>
				</div>
			</div>
		</section>
	</template>
	<section class="section py-10">
		<div class="content">
			<el-tabs v-model="activeTab" class="demo-tabs" v-if="video && (video.description || video.persons?.length)">
				<el-tab-pane label="Описание" name="description" v-if="video.description">
					<div class="py-10 text-white" v-html="video.description">
					</div>
				</el-tab-pane>
				<el-tab-pane label="Актеры" name="actors" v-if="video.persons.length">
					<VideoPersons class="py-10" :persons="video.persons">
					</VideoPersons>
				</el-tab-pane>
			</el-tabs>
			<iframe
					v-if="video"
					width="100%"
					height="500px"
					allowfullscreen allow="autoplay *; fullscreen *;"
					:src="video.iframe_url">
			</iframe>
		</div>
	</section>
</template>
