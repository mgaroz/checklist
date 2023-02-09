<script>
	import { ProgressSection, TodoSection, AddTodoSection } from '$lib/components';
</script>

<div class="min-h-screen bg-mint-green p-0 selection:bg-picton-blue md:py-24 md:px-8">
	<main
		class="mx-auto min-h-screen max-w-none rounded-none bg-alice-blue px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-alice-blue"
	>
		<h1 class="text-2xl font-bold text-indigo-dye">Todo App</h1>
		<div class="mt-10">
			<AddTodoSection />
			<TodoSection />
			<ProgressSection />
		</div>
	</main>
</div>
