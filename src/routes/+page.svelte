<script>
  import { onMount } from 'svelte';

  let data = ''

  onMount(async () => {
    try {
      const response = await fetch('/api/test');
      if (!response.ok) throw new Error('Failed to fetch dashboard data');
      data = await response.json();
    } catch (e) {
      console.error('Error fetching dashboard data:', e);
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

{ JSON.stringify(data) }

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
