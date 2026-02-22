import { ClientTypes } from '../../types/index.type';
import Client from '../../client';

async function usePlugin(this: Client, plugin: ClientTypes.RubPlugin): Promise<void> {
	const existingIndex = this.plugins.findIndex((p) => p.name === plugin.name);

	if (existingIndex !== -1) {
		const existing = this.plugins[existingIndex];

		if (
			existing.version &&
			plugin.version &&
			existing.version === plugin.version
		) {
			console.warn(
				`[usePlugin] Plugin "${plugin.name}" version ${plugin.version} is already registered.`,
			);
			return;
		}

		console.log(
			`[usePlugin] Replacing plugin "${plugin.name}" version ${existing.version ?? 'unknown'} with version ${plugin.version ?? 'unknown'}.`,
		);
		this.plugins.splice(existingIndex, 1);
	}

	try {
		await plugin.run(this);
		this.plugins.push(plugin);
		console.log(
			`[usePlugin] Plugin "${plugin.name}" version ${plugin.version ?? 'unknown'} loaded successfully.`,
		);
	} catch (error) {
		console.error(`[usePlugin] Failed to run plugin "${plugin.name}":`, error);
	}
}

export default usePlugin;
