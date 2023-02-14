<script>
	import { ProgressSection, TodoSection, AddTodoSection } from '$lib/components';
</script>

<div
	class="selection:bg-picton-blue min-h-screen bg-[url('$lib/img/img-bg.webp')] bg-cover p-0 md:py-24 md:px-8"
>
	<main
		class="bg-alice-blue md:outline-alice-blue mx-auto min-h-screen max-w-none rounded-none px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8"
	>
		<h1 class="text-indigo-dye text-2xl font-bold">Todo App</h1>
		<div class="mt-10">
			<AddTodoSection />
			<TodoSection />
			<ProgressSection />
		</div>
	</main>
</div>
