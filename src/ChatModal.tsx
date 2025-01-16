import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import WidgetLogo from '/logo.png';
import API from '../api/endpoint';

interface Message {
  text: string;
  sender: 'user' | 'assistant';
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  threadId: string | null;
  assistantId: string;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose, threadId, assistantId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [firstMessageSent, setFirstMessageSent] = useState(false);

  useEffect(() => {
    setMessages([
      {
        text: `Hello! I'm Xeko, your AI. How can I help you today?`,
        sender: 'assistant',
      },
    ]);
    setFirstMessageSent(true);
  }, [threadId, assistantId]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !threadId || !assistantId) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: 'user' },
    ]);
    setNewMessage('');

    try {
      const response = await fetch(`${API}/send_message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          thread_id: threadId,
          assistant_id: assistantId,
          text: newMessage,
        }),
      });

      if (!response.body) throw new Error('No response body from server');

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let assistantMessage = '';

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: '', sender: 'assistant' },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        assistantMessage += chunk;

        setMessages((prevMessages) => {
          const lastMessageIndex = prevMessages.length - 1;
          const lastMessage = prevMessages[lastMessageIndex];

          if (lastMessage.sender === 'assistant') {
            const updatedMessages = [...prevMessages];
            updatedMessages[lastMessageIndex] = {
              ...lastMessage,
              text: assistantMessage,
            };
            return updatedMessages;
          }
          return prevMessages;
        });
      }
    } catch (error) {
      console.error('Error receiving streamed message:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Something went wrong. Please try again.', sender: 'assistant' },
      ]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center md:justify-end md:items-end mb-5 p-4 bg-opacity-75 z-50">
      <div
        className="relative align-middle bg-white h-[90vh] mr-2 rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all w-full max-w-md flex flex-col"
        aria-labelledby="modal-headline"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <header className="w-full h-[100px] bg-gradient-to-tr from-blue-400 via-blue-400 to-blue-600 text-white text-center flex items-center justify-between p-4">
          <div className="flex gap-3">
            <div>
              <img src={WidgetLogo} className="w-[70px]" alt="" />
            </div>
            <div>
              <p>Xeko Assistant AI</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p>User name</p>
              </div>
            </div>
          </div>
          <div className="h-9 w-9 bg-blue-400 hover:bg-blue-300 p-2 rounded-full flex justify-center items-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <button
              className="text-white bg-transparent border-none text-2xl font-bold"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </header>

        {/* Chat Content */}
        <div className="flex-grow overflow-y-auto p-4">
          <Chat messages={messages} firstMessageSent={firstMessageSent} />
        </div>

        {/* Input Field */}
        <div className="p-4 bg-white border-t border-b border-gray-300">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full p-2 text-sm bg-gray-200 border rounded-lg focus:outline-none focus:border-transparent"
              placeholder="Type a message..."
            />
            <div onClick={handleSendMessage}>
              <img
                src="https://i.ibb.co/mcphR4S/Design-sans-titre-33.png"
                className="w-12 cursor-pointer rounded-full p-2 bg-blue-500"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-4">
          <p className="text-center text-gray-500 text-xs">Powered by Xeko.ai</p>
        </footer>
      </div>
    </div>

  );
};

export default ChatModal;
