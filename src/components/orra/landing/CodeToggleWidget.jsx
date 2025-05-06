import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeToggleWidget = () => {
	const [activeTab, setActiveTab] = useState('python');
	
	const pythonCode = `from orra import OrraAgent, Task
from pydantic import BaseModel

class ResearchInput(BaseModel):
    topic: str
    depth: str

class ResearchOutput(BaseModel):
    summary: str

agent = OrraAgent(
    name="research-agent",
    description="Researches topics using web search and knowledge base",
    url=os.getenv("ORRA_URL"),
    api_key=os.getenv("ORRA_API_KEY")
)

@agent.handler()
async def research(task: Task[ResearchInput]) -> ResearchOutput:
    results = await run_research(task.input.topic, task.input.depth)
    return ResearchOutput(summary=results.summary)`;
	
	const javascriptCode = `import { initAgent } from '@orra.dev/sdk';
import schema from './schema.json' with { type: 'json' };

const agent = initAgent({
  name: 'research-agent',
  orraUrl: process.env.ORRA_URL,
  orraKey: process.env.ORRA_API_KEY
});

await agent.register({
  description: 'Researches topics using web search and knowledge base',
  schema
});

agent.start(async (task) => {
  const results = await runResearch(task.input.topic, task.input.depth);
  return { summary: results.summary };
});



`;
	
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
			<div className="flex border-b border-gray-200">
				<button
					className={`px-4 py-2 text-sm font-medium ${
						activeTab === 'python'
							? 'bg-rose-50 text-black border-b-2 border-purple-600'
							: 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
					}`}
					onClick={() => setActiveTab('python')}
				>
					Python
				</button>
				<button
					className={`px-4 py-2 text-sm font-medium ${
						activeTab === 'javascript'
							? 'bg-rose-50 text-black border-b-2 border-purple-600'
							: 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
					}`}
					onClick={() => setActiveTab('javascript')}
				>
					JavaScript
				</button>
			</div>
			
			{/* Simple tab approach with display toggle instead of absolute positioning */}
			<div className="h-[500px] overflow-auto">
				<div className={`${activeTab === 'python' ? 'block' : 'hidden'}`}>
					<SyntaxHighlighter
						language="python"
						style={atomDark}
						customStyle={{
							margin: 0,
							padding: '16px',
							backgroundColor: '#1e1e1e',
							fontSize: '14px',
							lineHeight: '1.5',
							height: '100%'
						}}
					>
						{pythonCode}
					</SyntaxHighlighter>
				</div>
				<div className={`${activeTab === 'javascript' ? 'block' : 'hidden'}`}>
					<SyntaxHighlighter
						language="javascript"
						style={atomDark}
						customStyle={{
							margin: 0,
							padding: '16px',
							backgroundColor: '#1e1e1e',
							fontSize: '14px',
							lineHeight: '1.5',
							height: '100%'
						}}
					>
						{javascriptCode}
					</SyntaxHighlighter>
				</div>
			</div>
		</div>
	);
};

export default CodeToggleWidget;
