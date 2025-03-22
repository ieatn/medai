'use client';

import { ArrowRight } from 'lucide-react';
import { openChatbot } from './Chatbot';

export default function ChatbotButton() {
  return (
    <button 
      className="btn-secondary inline-flex items-center gap-2"
      onClick={() => openChatbot()}
    >
      Try MedAI Assistant Now
      <ArrowRight size={16} />
    </button>
  );
} 