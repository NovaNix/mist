
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

class StoryWriter
{
	output: string;
	buffer: string;

	constructor()
	{
		this.output = "";
		this.buffer = "";
	}

	getOutput(): string
	{
		this.flushBuffer();

		return this.output;
	}

	writeText(text: string)
	{
		if (this.hasBuffered())
		{
			// There's already stuff in the buffer, add a new line character and write our text
			this.buffer += "\n";
		}

		this.buffer += markdownify(text);
	}

	writeDialogue(text: string, character: Character)
	{
		this.flushBuffer();

		let cleanedName = character.name;
		cleanedName = cleanedName.replace(/\s+/g, "-")
		cleanedName = cleanedName.toLowerCase()

		let clazz = `speaker-${cleanedName}`

		this.output += `<p class="story-text dialogue ${clazz}">${markdownify(text)}</p>`
	}

	flushBuffer()
	{
		if (this.hasBuffered())
		{
			this.output += `<p class="story-text">${this.buffer}</p>`;
			this.buffer = ""
		}
	}

	hasBuffered(): boolean
	{
		return this.buffer.length != 0;
	}
}

const dialogueRegex = /(\w+): "(.*)"/

export function renderStory(text: string, story: StoryBook)
{
	let writer = new StoryWriter(); 

	let lines = text.split(/\r?\n/g)

	for (let line of lines)
	{
		line = line.trim()
		line.replace(/\r/g, "");

		// Check for dialogue
		let dialogue = line.match(dialogueRegex);

		if (dialogue != null)
		{
			let character = getCharacter(dialogue[1], story);

			if (character != null)
			{
				writer.writeDialogue(dialogue[2], character);
				continue;
			}
		}

		if (line.length == 0)
		{
			writer.flushBuffer()
			continue;
		}

		writer.writeText(line);

	}

	return writer.getOutput();
}

function markdownify(text: string)
{
	return text.replace(/\*(.*?)\*/, "<i>$1</i>")
}

function getCharacter(label: string, story: StoryBook): Character | null
{
	// This could be much more optimized, but it'll only be run on the server and not really on the client, so it's fine for now
	// Could be optimzied later

	for (let character of story.characters)
	{
		if (character.name == label)
			return character;
		if (character.prefix == label)
			return character;
	}

	return null;
}