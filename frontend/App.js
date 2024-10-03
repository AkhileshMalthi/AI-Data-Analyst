import React, { useState } from 'react';
import { Send, Paperclip, MessageSquare } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatbotWebsite = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: 'Previous Chat 1' },
    { id: 2, title: 'Previous Chat 2' },
  ]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
     
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
   
      console.log('File uploaded:', file.name);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      
      <div className="w-64 bg-white border-r">
        <h2 className="p-4 text-lg font-semibold">Chat History</h2>
        <ul>
          {chatHistory.map((chat) => (
            <li key={chat.id} className="p-2 hover:bg-gray-100 cursor-pointer">
              <MessageSquare className="inline-block mr-2" size={18} />
              {chat.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
      
        <ScrollArea className="flex-1 p-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </ScrollArea>

       
        <div className="p-4 bg-white border-t flex items-center">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 mr-2"
          />
          <Button variant="ghost" size="icon" onClick={() => document.getElementById('file-upload').click()}>
            <Paperclip />
          </Button>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button onClick={handleSend}>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWebsite;
