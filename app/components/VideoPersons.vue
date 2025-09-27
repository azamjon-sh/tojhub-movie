<script setup>
import {computed} from "vue";

const props = defineProps({
	persons: {
		type: Array,
		required: true,
	}
})

const translates = {
	operator: 'Оператор',
	producer: 'Продюсер',
	actor: 'Актёр',
	director: 'Режиссёр',
	writer: 'Сценарист',
	editor: 'Редактор',
	composer: 'Композитор',
}

const personsSorted = computed(() => {
	let personsSorted = {
		operator: [],
		producer: [],
		actor: [],
		director: [],
		writer: [],
		editor: [],
		composer: [],
	}
	if (props.persons) {
		props.persons.forEach(person => {
			if (personsSorted[person.occupation]) {
				personsSorted[person.occupation].push(person.name);
			}
		});
	}
	return personsSorted;
})
</script>

<template>
	<div v-if="personsSorted">
		<template v-for="item in Object.keys(personsSorted)">
			<div v-if="personsSorted[item].length" class="flex items-start text-white font-semibold gap-5 mb-5">
				<div class="basis-[140px] min-w-[140px]">{{ translates[item] }}</div>
				<div class="grow">
					<template v-for="(person,i) in personsSorted[item]">
						{{ person ? (i === 0 ? person : ', ' + person) : '' }}
					</template>
				</div>
			</div>
		</template>
	</div>
</template>

<style scoped>

</style>