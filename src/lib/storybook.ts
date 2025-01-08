
interface StoryBook
{
	title: string;

	characters: Character[]
}

interface Character
{
	name: string;
	prefix: string;
}

export function renderStory(text: string, story: StoryBook)
{
	return text;
}
