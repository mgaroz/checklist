<script>
	export let title;
	export let percentage;

	$: completeClass = title === 'Completed' ? 'bg-slate-700' : 'bg-slate-400';
</script>

<div>
	<div class="flex justify-between text-base font-normal text-slate-800">
		<p>{title}</p>
		<p>{percentage}%</p>
	</div>
	<div class="mt-5 h-4 w-full overflow-hidden rounded-full bg-slate-300">
		<div
			class="{completeClass} h-4 rounded-full transition-all duration-500 ease-out"
			style="width: {percentage}%"
		/>
	</div>
</div>
