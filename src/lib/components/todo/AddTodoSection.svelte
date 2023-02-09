<script>
	import { addTodo } from '$lib/store/TodoStore';
</script>

<section class="flex justify-between">
	<h3 class="text-xl font-bold text-slate-800">Checklist</h3>
	<button
		class="group flex items-center rounded-md border-slate-800 bg-slate-300 px-6 py-3 text-lg font-semibold text-slate-800 outline outline-2 outline-offset-2 outline-slate-300 hover:text-slate-200 hover:bg-slate-800 hover:outline-slate-800 focus-visible:text-slate-200 focus-visible:bg-slate-800 focus-visible:outline-slate-800"
		type="button"
		on:click={addTodo}>Add Task <i class="fa-solid fa-circle-plus ml-3 text-lg" /></button
	>
</section>
