<script>
	import { deleteTodo, toggleComplete, editTodo } from '$lib/store/TodoStore';

	export let todo;
	$: completeClass = todo.complete ? 'bg-moonstone text-alice-blue' : 'bg-mint-green';
</script>

<div class="flex items-center justify-between rounded-md border-2 border-moonstone px-5 py-4">
	<div class="flex w-full max-w-lg items-center justify-start">
		<label for={`${todo.id}-checkbox`} class="sr-only">Complete todo</label>
		<input
			type="checkbox"
			checked={todo.complete}
			id={`${todo.id}-checkbox`}
			on:change={() => toggleComplete(todo.id)}
			class="h-4 w-4 rounded border-moonstone bg-alice-blue text-moonstone focus:border-moonstone focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-moonstone transition-all duration-100"
		/>
		<label for={`${todo.id}-text`} class="sr-only">Edit todo</label>
		<input
			type="text"
			id={`${todo.id}-text`}
			placeholder="Enter a todo"
			value={todo.text}
			on:input={(e) => editTodo(todo.id, e.target.value)}
			class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-picton-blue bg-alice-blue px-0 pb-1 text-base font-normal text-indigo-dye placeholder:text-moonstone focus:border-indigo-dye focus:outline-none focus:ring-0 font-[Inter]"
		/>
		<span
			class="{completeClass} ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal md:block text-indigo-dye"
		>
			{todo.complete ? 'Complete' : 'In progress'}
		</span>
	</div>
	<button
		type="button"
		on:click={() => deleteTodo(todo.id)}
		class="group ml-4 flex items-center justify-center rounded-md bg-alice-blue p-2 hover:bg-picton-blue hover:text-alice-blue focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-dye text-indigo-dye"
	>
		<span class="sr-only">Delete todo</span>
		<i class="fa-solid fa-trash text-lg h-7 w-8" />
	</button>
</div>
