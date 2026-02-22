import Client from '../../client';

interface InputType {
	updated_parameters: string[];
	first_name?: string;
	last_name?: string;
	bio?: string;
}

async function updateProfile(
	this: Client,
	first_name: string | null = null,
	last_name: string | null = null,
	bio: string | null = null,
) {
	let input: InputType = {
		updated_parameters: [],
	};

	if (typeof first_name === 'string') {
		input.updated_parameters.push('first_name');
		input.first_name = first_name;
	}

	if (typeof last_name === 'string') {
		input.updated_parameters.push('last_name');
		input.last_name = last_name;
	}

	if (typeof bio === 'string') {
		input.updated_parameters.push('bio');
		input.bio = bio;
	}

	return await this.builder('updateProfile', input);
}

export default updateProfile;
