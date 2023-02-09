<script>
	import { deleteTodo, toggleComplete, editTodo } from '$lib/store/TodoStore';

	export let todo;
	$: completeClass = todo.complete ? 'bg-slate-800 text-slate-100' : 'bg-slate-300';
</script>

<div class="flex items-center justify-between rounded-md border-2 border-slate-300 px-5 py-4">
	<div class="flex w-full max-w-lg items-center justify-start">
		<label for={`${todo.id}-checkbox`} class="sr-only">Complete todo</label>
		<input
			type="checkbox"
			checked={todo.complete}
			id={`${todo.id}-checkbox`}
			on:change={() => toggleComplete(todo.id)}
			class="h-4 w-4 rounded border-slate-500 bg-slate-200 text-slate-800 focus:border-slate-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-slate-800"
		/>
		<label for={`${todo.id}-text`} class="sr-only">Edit todo</label>
		<input
			type="text"
			id={`${todo.id}-text`}
			placeholder="Enter a todo"
			vale={todo.text}
			on:input={(e) => editTodo(todo.id, e.target.value)}
			class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-slate-500 bg-slate-200 px-0 pb-1 text-base font-normal text-slate-700 placeholder:text-slate-400 focus:border-slate-800 focus:outline-none focus:ring-0 font-[Inter]"
		/>
		<span
			class="{completeClass} ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal text-slate-800 md:block"
		>
			{todo.complete ? 'Complete' : 'In progress'}
		</span>
	</div>
	<button
		type="button"
		on:click={() => deleteTodo(todo.id)}
		class="group ml-4 flex items-center justify-center rounded-md bg-slate-200 p-2 hover:bg-slate-800 hover:text-slate-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
	>
		<span class="sr-only">Delete todo</span>
		<i class="fa-solid fa-trash text-lg h-7 w-8" />
	</button>
</div>
