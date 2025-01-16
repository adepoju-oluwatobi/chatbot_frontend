import React, { useState, useEffect } from 'react';
import WidgetLogo from '/logo.png';
import ChatModal from './ChatModal';
import axios from 'axios';
import API from '../api/endpoint';

const ChatWidget: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isWidgetOpen, setIsWidgetOpen] = useState(true); // Track the widget open/close state
  const [assistantId, setAssistantId] = useState<string | null>(null); // Store assistant ID from URL

  // Fetch the assistant_id from the URL parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('assistant_id') || 'asst_79azoCwz4RXE6luvA1xQdvLo'; // Provide default if none exists
    setAssistantId(id);
  }, []);

  const handleOpen = async () => {
    try {
      if (!assistantId) {
        throw new Error('Assistant ID is missing.');
      }

      // Fetch the thread_id from the backend
      const response = await axios.get(`${API}/get_thread_id/${assistantId}`);
      const thread_id = response.data.thread_id;

      // Set the thread ID and open the modal
      setThreadId(thread_id);
      setIsModalOpen(true);
      setIsWidgetOpen(false); // Hide the widget when the modal opens
    } catch (error) {
      console.error('Failed to fetch thread ID:', error);
      alert('Unable to start chat. Please try again later.');
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setThreadId(null);
    setIsWidgetOpen(true); // Show the widget when the modal closes
  };

  const handleWidgetClose = () => {
    setIsWidgetOpen(false); // Close the widget entirely
  };

  return (
    <>
      {isWidgetOpen && (
        <div className="bg-gradient-to-tr from-blue-600 via-blue-300 to-blue-500 h-[130px] w-[180px] p-4 flex flex-col justify-center items-center rounded-tl-3xl rounded-bl-3xl transition-all duration-500 ease-in-out relative">
          {/* Close Widget Button */}
          <button
            onClick={handleWidgetClose}
            className="absolute top-0 left-1 text-gray-200 hover:text-white font-bold text-md p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            X
          </button>
          <img
            src={WidgetLogo}
            alt="logo"
            className="h-24 animate__animated animate__fadeIn relative top-[-10px] w-[80px] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          />
          <button
            className="bg-white hover:bg-gray-100 text-blue-400 font-bold py-2 text-sm px-4 rounded mb-8 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleOpen}
          >
            Any Questions?
          </button>
        </div>
      )}

      {/* Render ChatModal only if threadId is available */}
      {isModalOpen && threadId && (
        <ChatModal
          isOpen={isModalOpen}
          onClose={handleClose}
          threadId={threadId}
          assistantId={assistantId || ''}
        />
      )}
    </>
  );
};

export default ChatWidget;
