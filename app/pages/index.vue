<script setup>
import {ref, computed} from 'vue';
import {useAsyncData, useNuxtApp, useRuntimeConfig, useRoute, useHead} from '#app';


const {$axios} = useNuxtApp();
const config = useRuntimeConfig();


// SEO / head
useHead({
	title: 'TojhubMovie — Смотреть фильмы и сериалы онлайн',
	meta: [
		{
			name: 'description',
			content: 'Смотрите фильмы и сериалы на TojhubMovie — новинки в хорошем качестве и озвучке и с быстрой загрузкой'
		},
		{property: 'og:title', content: 'TojhubMovie — Смотреть фильмы и сериалы онлайн'},
		{
			property: 'og:description',
			content: 'Смотрите фильмы, сериалы, и мультфильмы в нашем онлайн-кинотеатре в хорошем качестве.Хорошая озвучка с быстрая загрузка'
		},
		{property: 'og:type', content: 'website'}
	],
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": "WebSite",
						"name": "TojhubMovie",
						"url": "https://tojhub-movie.netlify.app/",
						"potentialAction": {
							"@type": "SearchAction",
							"target": "https://tojhub-movie.netlify.app/search?q={search_term_string}",
							"query-input": "required name=search_term_string"
						}
					},
					{
						"@type": "Organization",
						"name": "TojhubMovie",
						"url": "https://tojhub-movie.netlify.app/",
					}
				]
			})
		}
	],
	link: [{
		rel: 'canonical',
		href: (typeof window !== 'undefined') ? window.location.href : 'https://tojhub-movie.netlify.app/'
	}]
});


const limit = 20;
const {data: videos, pending: loading} = await useAsyncData("videos", async () => {
	const res = await $axios.get("/api/v1/publisher/videos/links?limit=20");
	return res.data.data;
});

if (!videos.value || !videos.value.length) {
	try {
		const res = await $axios.get(`/api/v1/publisher/videos/links?limit=${limit}`);
		videos.value = res.data?.data || [];
	} catch (e) {
		console.warn('Client fetch failed', e);
	}
}
</script>

<template>
	<template v-if="videos?.length">
		<IntroSlider :videos="videos"/>
		<PopularVideos :videos="videos"/>
	</template>
</template>
