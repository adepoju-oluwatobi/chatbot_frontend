import WidgetLogo from '/logo.png';

interface Message {
  text: string;
  sender: 'user' | 'assistant';
}

interface ChatProps {
  messages: Message[];
  firstMessageSent: boolean;
}

const Chat = ({ messages, firstMessageSent }: ChatProps) => {
  return (
    <div className="max-w-md mx-auto flex flex-col h-[76vh] rounded relative">
      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-20 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <ul className="list-none p-0 m-0">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`flex items-start space-x-2 mb-4 ${
                message.sender === 'assistant' ? 'justify-start' : 'justify-end'
              }`}
            >
              {message.sender === 'assistant' && (
                <img
                  src={WidgetLogo}
                  alt="Assistant"
                  className="h-8 w-8 rounded-full"
                />
              )}
              <div
                className={`p-4 rounded-lg ${
                  message.sender === 'assistant'
                    ? 'bg-blue-50 text-black'
                    : 'bg-white text-black border border-gray-300 shadow-sm'
                }`}
              >
                <p>{message.text}</p>
                {message.sender === 'assistant' && firstMessageSent && index === 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    <button className="text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5">
                      What are your services?
                    </button>
                    <button className="text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5">
                      How can I book?
                    </button>
                    <button className="text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5">
                      What are the rates?
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;
