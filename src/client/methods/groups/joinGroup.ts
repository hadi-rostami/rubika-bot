import Client from '../../client';

async function joinGroup(this: Client, link: string) {
 
	if (link.includes('/')) link = link.split('/').pop() || '';
  
	return await this.builder('joinGroup', { hash_link: link });
}

export default joinGroup;
