<script lang="ts">
	import icon from "/logo-background-192.png";
	import InstallPWA from "./InstallPWA.svelte";
	import { panels } from "../utilities/PanelStore";
</script>

<div
	class={`about invisible flex flex-grow max-h-0 transition-all ${
		$panels.about ? "show-about" : ""
	}`}
>
	<!-- left -->
	<div class="flex-1 text-center p-4 overflow-y-auto">
		<img src={icon} alt="" class="rounded-3xl mx-auto" />
		<h1 class="text-4xl font-bold">textarea.site v3</h1>
		<p>
			textarea.site is a persistent textbox that will hold on to whatever
			you write. No ads, trackers, etc. All free and open source. Enjoy!
		</p>
		<p>
			Feel free to check out my website and follow me on social media to
			stay tuned for updates. You can also report issues, star, and fork
			the repo on GitHub.
		</p>
		<ul>
			<li class="text-blue-400 underline">
				<a href="https://github.com/real-jame/textarea">
					GitHub: real-jame/textarea
				</a>
			</li>
			<li class="text-blue-400 underline">
				<a href="https://realja.me">My website: realja.me</a>
			</li>
			<li class="text-blue-400 underline">
				<a href="https://twitter.com/real__jame"
					>My Twitter: @real__jame</a
				>
			</li>
			<li class="text-blue-400 underline">
				<a href="https://wetdry.world/@jame">
					My Mastodon: @jame@wetdry.world
				</a>
			</li>
		</ul>

		<InstallPWA />
	</div>
	<!-- right -->
	<div class="flex-1 text-left overflow-y-auto">
		<h1 class="text-4xl font-bold text-center">Releases</h1>
		<div>
			<h2 class="text-3xl font-medium">
				v3 (
				<a
					href="https://github.com/real-jame/textarea/releases/tag/v3.0.0"
					class="text-blue-400 underline"
				>
					latest commit
				</a>
				)
			</h2>
			<p>
				textarea.site has been inactive for almost a year... no better
				time to revive it than the present! Hope you enjoy the
				smattering of improvements and additions across the board! In
				fact, I'll have to split the change list into separate groups.
			</p>
			<p class="text-xl font-bold">Theming improvements:</p>
			<ul class="list-disc w-[90%] m-auto mb-1">
				<li>TODO: this</li>
				<li>New themes: Monokai, Solarized Dark, Solarized Light.</li>
				<li>
					Default theme is now based off your device's dark mode
					preference.
				</li>
				<li>
					Scrollbar color is now affected by light/dark theme
					selection.
				</li>
				<li>Your selected theme now saves.</li>
			</ul>
			<p class="text-xl font-bold">Utility/footer improvements:</p>
			<ul class="list-disc w-[90%] m-auto mb-1">
				<li>Added About/Releases screen.</li>
				<li>Improved footer styling.</li>
			</ul>
		</div>
		<div>
			<h2 class="text-3xl">
				v2.1 (
				<a
					href="https://github.com/real-jame/textarea/releases/tag/v2.0.0"
					class="text-blue-400 underline"
				>
					93f9c28
				</a>
				)
			</h2>
			<p class="mb-1">This update adds initial PWA support.</p>
			<ul class="list-disc w-[90%] m-auto mb-1">
				<li>
					The website can now be installed to your desktop / home
					screen as a Progressive Web App, allowing it to be used
					offline.
				</li>
				<li>
					There is now a testing version of textarea.site built from
					the latest development commit available at{" "}
					<a
						href="https://real-jame.github.io/textarea"
						class="text-blue-400 underline"
					>
						https://real-jame.github.io/textarea
					</a>
					.
				</li>
				<li>
					Removed a footer item displaying the current save status
					(saved, saving, unsaved)
				</li>
			</ul>
		</div>
		<div>
			<h2 class="text-3xl">
				v2 (
				<a
					href="https://github.com/real-jame/textarea/releases/tag/v2.0.0"
					class="text-blue-400 underline"
				>
					8abb479
				</a>
				)
			</h2>
			<p>This update adds additional support for themes.</p>
			<ul class="list-disc w-[90%] m-auto">
				<li>2 themes, Light and Dark. More to come.</li>
				<li>Footer bar items look a bit nicer now</li>
			</ul>
		</div>
		<div>
			<h2 class="text-3xl">
				v1 (
				<a
					href="https://github.com/real-jame/textarea/releases/tag/v1.0.0"
					class="text-blue-400 underline"
				>
					3d46063
				</a>
				)
			</h2>
			<p>The first public release, used on textarea.site.</p>
			<ul class="list-disc w[90%] w[90%] m-auto">
				<li>🎉</li>
			</ul>
		</div>
	</div>
</div>
