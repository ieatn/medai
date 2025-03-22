'use client';

import { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Loader2, PaperclipIcon, X } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! I\'m MedAI, your medical report assistant. Upload a report or ask me a question about a medical document.',
    role: 'assistant',
    timestamp: new Date(),
  },
];

// Create a global function to control the chatbot
let globalOpenChatbot: (() => void) | null = null;

export function openChatbot() {
  if (globalOpenChatbot) {
    globalOpenChatbot();
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Register the open function to the global handler
  useEffect(() => {
    globalOpenChatbot = () => setIsOpen(true);
    return () => {
      globalOpenChatbot = null;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !uploadedFile) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: uploadedFile 
        ? `Uploaded: ${uploadedFile.name}`
        : input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      let responseContent = '';
      
      if (uploadedFile) {
        responseContent = "I've analyzed the report you uploaded. The main findings include normal blood pressure, slightly elevated cholesterol levels (LDL: 130 mg/dL), and normal kidney function. No significant abnormalities were detected in the MRI scan. Would you like me to focus on a specific aspect of these results?";
      } else if (input.toLowerCase().includes('diagnosis')) {
        responseContent = "Based on the report, there are no signs of acute pathology. The patient shows mild age-related changes consistent with their demographic, but no evidence of significant disease progression.";
      } else if (input.toLowerCase().includes('treatment')) {
        responseContent = "The report suggests continued monitoring of cholesterol levels with a follow-up in 6 months. Lifestyle modifications including diet and exercise are recommended rather than pharmaceutical intervention at this time.";
      } else {
        responseContent = "I can help you understand medical reports and extract key information. Would you like me to summarize a specific aspect of a report or answer questions about medical terminology?";
      }

      const aiMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      setUploadedFile(null);
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50 chat-bubble-pulse"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageIcon />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-40 border border-slate-200 flex flex-col h-[600px] max-h-[80vh] chat-fade-in">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <BrainIcon />
            </div>
            <div>
              <h3 className="font-semibold">MedAI Assistant</h3>
              <p className="text-xs text-indigo-100">Medical report expert</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none chat-message-out'
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-200 chat-message-in'
                  }`}
                >
                  <p>{message.content}</p>
                  <div 
                    className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-indigo-200' : 'text-slate-400'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start chat-fade-in">
                <div className="bg-white p-3 rounded-lg rounded-tl-none border border-slate-200">
                  <div className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-indigo-600" />
                    <span className="text-slate-500 text-sm">MedAI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* File upload preview */}
          {uploadedFile && (
            <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 chat-fade-in">
              <div className="flex items-center justify-between rounded-lg bg-indigo-50 p-2 border border-indigo-100">
                <div className="flex items-center gap-2 text-sm text-indigo-700 truncate">
                  <PaperclipIcon size={16} />
                  <span className="truncate">{uploadedFile.name}</span>
                </div>
                <button 
                  onClick={removeFile}
                  className="text-slate-500 hover:text-indigo-700"
                  aria-label="Remove file"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200 bg-white">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={triggerFileInput}
                className="p-2 text-slate-500 hover:text-indigo-600 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Upload file"
              >
                <PaperclipIcon size={20} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png,.txt"
                onChange={handleFileUpload}
                className="hidden"
              />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a medical report..."
                className="flex-1 py-2 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`p-2 rounded-lg ${
                  !input.trim() && !uploadedFile
                    ? 'text-slate-400 bg-slate-100'
                    : 'text-white bg-indigo-600 hover:bg-indigo-700'
                } transition-colors`}
                disabled={!input.trim() && !uploadedFile}
                aria-label="Send message"
              >
                <SendHorizontal size={20} />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Upload medical reports or type your questions
            </p>
          </form>
        </div>
      )}
    </>
  );
}

// Icons
function MessageIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 11.5C21 16.1944 16.9706 20 12 20C10.5331 20 9.14734 19.6958 7.91203 19.1547C7.39958 18.9379 6.99847 18.7822 6.66916 18.7391C6.34421 18.6965 6.12268 18.7583 5.83611 18.9162C5.17294 19.2808 4.42212 19.6478 3.33989 19.4932C3.8222 18.7499 4.25216 17.9564 4.25216 17.0899C4.25216 16.7448 4.18378 16.5116 4.06284 16.2298C3.36713 14.9912 3 13.587 3 12.1211C3 7.42666 7.02944 3.5 12 3.5C16.9706 3.5 21 7.42666 21 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.5V6.5M18.5 8.5C18.5 6.01472 16.4853 4 14 4C12.1259 4 10.5087 5.08554 9.76455 6.66793M5.5 8.5C5.5 6.01472 7.51472 4 10 4C10.1685 4 10.3344 4.00858 10.4976 4.02544M18.5 15.5C18.5 17.9853 16.4853 20 14 20H10C7.51472 20 5.5 17.9853 5.5 15.5C5.5 13.0147 7.51472 11 10 11H14C16.4853 11 18.5 13.0147 18.5 15.5ZM14 11V20M10 11V20M18.5 11V15.5M5.5 11V15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
} 