<script>

    /* Navbar menu content here
        - Title always links to first menu item
    */

    import {fly} from 'svelte/transition'
    import Title from '$lib/components/Title.svelte'

    const navigation = [
        {
            title: 'Portfolio',
            url: '/',
        },
        {
            title: 'Commercial',
            url: '/commercial',
            navigation: [
                {
                    title: 'Wedding',
                    url: '/commercial/wedding'
                },
                {
                    title: 'Product',
                    url: '/commercial/product'
                }
            ]
        },
        {
            title: 'Blog',
            url: '/blog'
        },
        {
            title: 'About',
            url: '/about',
        },
        {
            title: 'Contact',
            url: '/contact'
        }
    ]

    let open = false; 
</script>

<nav class="m-4 mb-8 flex flex-row flex-nowrap justify-between text-green-700">
    <!-- Navbar content -->
        <!-- Title -->
        <div class="w-fit">
            <a href="{navigation[0].url}"><Title/></a>
        </div>

        <!-- Menu items -->
        <div class="hidden lg:block">
          <ul class="flex flex-row row-nowrap justify-start">
            {#each navigation as item}
                {#if item.navigation}
                    <li class="pr-4 dropdown dropdown-hover">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label tabindex="0" class="">
                            <a sveltekit:prefetch href={item.url} tabindex="0" class="">{item.title}</a>
                        </label>
                        <ul tabindex="0" class="menu dropdown-content w-fit !top-full">
                            {#each item.navigation as sub_item}
                                <li><a sveltekit:prefetch href={sub_item.url}>{sub_item.title}</a></li>
                            {/each}
                        </ul>
                    </li>
                {:else}
                    <li class="pr-4"><a sveltekit:prefetch href={item.url}>{item.title}</a></li>
                {/if}
            {/each}
          </ul>
        </div>

        <!-- Hamburger icon -->
        <button class="lg:hidden hover:stroke-primary hover:cursor-pointer" on:click={() => open = !open}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
</nav>

<!--Sidebar content-->
{#if open}
<aside in:fly="{{ x: 100, duration: 300 }}" out:fly="{{ x: 100, duration: 300 }}" class="text-blue-600 bg-slate-100 fixed {open ? "right-0" : "-right-full"} lg:hidden w-full md:w-2/6 h-screen top-0 p-4">

    <!-- Sidebar header -->
    <div class="flex flex-row row-nowrap justify-between mb-4">
        <a sveltekit:prefetch href="{navigation[0].url}"><Title/></a>

        <button on:click={() => open = !open} class="hover:stroke-primary hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

    <!-- Sidebar menu items -->
    <ul class="text-lg">
        {#each navigation as item}
            {#if item.navigation}
                <li class="pb-2">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <a sveltekit:prefetch href={item.url}>{item.title}</a>
                    <ul class="pl-4 pt-2">
                        {#each item.navigation as sub_item}
                            <li class="pb-2"><a sveltekit:prefetch href={sub_item.url}>{sub_item.title}</a></li>
                        {/each}
                    </ul>
                </li>
            {:else}
                <li class="pb-2"><a sveltekit:prefetch href={item.url}>{item.title}</a></li>
            {/if}
        {/each}
    </ul>
</aside>
{/if}

<style>
    .menu :where(li) > :where(:not(ul)) {
        @apply p-0 gap-0
    }

    .menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul):focus), .menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul):hover) {
        @apply bg-transparent
    }
</style>