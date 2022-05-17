<script>
    import {config} from '$lib/js/stores'
    import {onMount} from 'svelte'
    
    let first_name_chars = []
    let last_name_chars = []
    onMount(() => {


        for(let i = 0; i < $config.author.first_name.length; i++) {
            first_name_chars.push($config.author.first_name[i]);
        }

        for(let i = 0; i < $config.author.last_name.length; i++) {
            last_name_chars.push($config.author.last_name[i]);
        }

        first_name_chars = first_name_chars
        last_name_chars = last_name_chars
    })  
</script>

<h1 class="capitalize font-semibold text-xl w-fit title text-primary">
    <span class="flex flex-row justify-between">
        {#each first_name_chars as char}
            <span>{char}</span>
        {/each}
    </span>
    <span class="flex flex-row justify-between">
        {#each last_name_chars as char}
            <span>{char}</span>
        {/each}
    </span>
</h1>