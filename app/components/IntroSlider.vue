<script setup>
import {useRouter} from "#app";

const router = useRouter();
const props = defineProps({
	videos: {
		type: Array,
		required: true,
	}
})
</script>

<template>
	<div class="content">
		<el-carousel type="card" :interval="6000" height="360px" arrow="always" trigger="click" class="mt-10">
			<template v-for="url in videos" :key="url">
				<el-carousel-item v-if="url.backdrop_url != null" @click.stop="router.push(`/watch/${url.kp_id}`)">
					<el-image :src="url.backdrop_url" fit="contain" class="rounded-xl"/>
					<div class="absolute flex flex-col z-[1] justify-end bottom-0 left-0 p-6 bg-[rgba(0,0,0,.2)] w-full h-full">
						<h1 class="text-white text-2xl">
							{{ url.name_rus ?? url.name }}
						</h1>
						<div class="text-white text-sm">
							{{ url.genre.join(', ') }}
						</div>
					</div>
				</el-carousel-item>
			</template>
		</el-carousel>
	</div>
</template>

