<script setup>
import { Picture as IconPicture } from '@element-plus/icons-vue'
import {useRouter} from "#app";
const props = defineProps({
	videos: {
		type: Array,
		required: true,
	}
})

const router = useRouter()
</script>

<template>
	<section class="popular-video mt-10">
		<div class="content">
			<div class="grid grid-cols-5 gap-6">
				<el-card
						@click="router.push(`/watch/${item.kp_id}`)"
						:body-style="{ padding: '0px' }"
						v-for="item in videos" :key="item.kp_id"
						class="!bg-transparent !border-none cursor-pointer">
					<el-image :src="item.poster_url" lazy
					          class="w-full h-auto mr-4 rounded-xl">
						<template #error>
							<div class="image-slot">
								<el-icon><icon-picture /></el-icon>
							</div>
						</template>
					</el-image>
				</el-card>

			</div>
		</div>
	</section>
</template>

<style scoped>
</style>