<script>
	import AddTodoSection from '$lib/components/todo/AddTodoSection.svelte';
</script>

<div class="min-h-screen bg-slate-300 p-0 selection:bg-slate-300 md:py-24 md:px-8">
	<main
		class="mx-auto min-h-screen max-w-none rounded-none bg-slate-200 px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-slate-200"
	>
		<h1 class="text-2xl font-bold text-slate-800">Dashboard</h1>
		<div class="mt-10">
			<AddTodoSection />
		</div>
	</main>
</div>
