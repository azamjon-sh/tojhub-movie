<script setup>
import {useAsyncData, useFetch, useRuntimeConfig} from '#app'

const runtimeConfig = useRuntimeConfig()
const {data: videos, pending, error} = await useAsyncData('links', async () => {
	const res = await useFetch(`${runtimeConfig.public.baseURL}/api/v1/publisher/videos/links?limit=20&type=serial`, {
				onRequest({request, options}) {
					options.headers.set('Authorization', `Bearer ${runtimeConfig.public.baseToken}`)
				},
			}
	)
	return res.data
})
</script>

<template>
	<template v-if="videos.data?.length">
		<IntroSlider :videos="videos.data"/>
		<PopularVideos :videos="videos.data"/>
	</template>
</template>
