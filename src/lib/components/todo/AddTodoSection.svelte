<script>
	import { addTodo } from '$lib/store/TodoStore';
</script>

<section class="flex justify-between">
	<h3 class="text-xl font-bold text-indigo-dye">Checklist</h3>
	<button
		class="group flex items-center rounded-md border-mint-green bg-mint-green px-6 py-3 text-lg font-semibold text-indigo-dye outline outline-2 outline-offset-2 outline-mint-green hover:text-alice-blue hover:bg-moonstone hover:outline-moonstone focus-visible:text-alice-blue focus-visible:bg-moonstone focus-visible:outline-moonstone transition-all duration-100 ease-in"
		type="button"
		on:click={addTodo}>Add Task <i class="fa-solid fa-circle-plus ml-3 text-lg" /></button
	>
</section>
