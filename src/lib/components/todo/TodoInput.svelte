<script>
	import { deleteTodo, toggleComplete, editTodo } from '$lib/store/TodoStore';

	export let todo;
	$: completeClass = todo.complete
		? 'bg-moonstone text-alice-blue'
		: 'bg-mint-green text-indigo-dye';
</script>

<div class="border-moonstone flex items-center justify-between rounded-md border-2 px-5 py-4">
	<div class="flex w-full max-w-lg items-center justify-start">
		<label for={`${todo.id}-checkbox`} class="sr-only">Complete todo</label>
		<input
			type="checkbox"
			checked={todo.complete}
			id={`${todo.id}-checkbox`}
			on:change={() => toggleComplete(todo.id)}
			class="border-moonstone bg-alice-blue text-moonstone focus:border-moonstone focus:outline-moonstone h-4 w-4 rounded transition-all duration-100 focus:outline focus:outline-1 focus:outline-offset-2"
		/>
		<label for={`${todo.id}-text`} class="sr-only">Edit todo</label>
		<input
			type="text"
			id={`${todo.id}-text`}
			placeholder="Enter a todo"
			value={todo.text}
			on:input={(e) => editTodo(todo.id, e.target.value)}
			class="border-picton-blue bg-alice-blue text-indigo-dye placeholder:text-moonstone focus:border-indigo-dye ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed px-0 pb-1 font-[Inter] text-base font-normal focus:outline-none focus:ring-0"
		/>
		<span class="{completeClass} ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal md:block">
			{todo.complete ? 'Complete' : 'In progress'}
		</span>
	</div>
	<button
		type="button"
		on:click={() => deleteTodo(todo.id)}
		class="bg-alice-blue hover:bg-picton-blue hover:text-alice-blue focus-visible:outline-indigo-dye text-indigo-dye group ml-4 flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
	>
		<span class="sr-only">Delete todo</span>
		<i class="fa-solid fa-trash h-7 w-8 text-lg" />
	</button>
</div>
