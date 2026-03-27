'use client';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

type Step = 'start' | 'q1' | 'q2' | 'q3' | 'qualified' | 'unqualified';

interface Message { role: 'bot' | 'user'; text: string; }

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('start');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hey! 👋 I'm your AI Lead System qualifier. Let me see if we're a fit in 3 quick questions." },
  ]);

  const addMsg = (msgs: Message[]) => setMessages(prev => [...prev, ...msgs]);

  const handleOption = (option: string, nextStep: Step, botReply?: string, userLabel?: string) => {
    const newMsgs: Message[] = [{ role: 'user', text: userLabel || option }];
    if (botReply) newMsgs.push({ role: 'bot', text: botReply });
    addMsg(newMsgs);
    setStep(nextStep);
  };

  const renderOptions = () => {
    switch (step) {
      case 'start':
        return (
          <div className="chat-options">
            <p className="chat-msg bot" style={{ marginBottom: '0.75rem' }}>How many leads do you get per month?</p>
            <button className="chat-option-btn" onClick={() => handleOption('under10', 'q2', "Got it. Are you running paid ads right now?", "Under 10")}>Under 10</button>
            <button className="chat-option-btn" onClick={() => handleOption('10to50', 'q2', "Nice! Are you running paid ads right now?", "10–50 leads")}>10–50 leads</button>
            <button className="chat-option-btn" onClick={() => handleOption('50plus', 'q2', "Impressive volume! Are you running paid ads?", "50+ leads")}>50+ leads</button>
          </div>
        );
      case 'q2':
        return (
          <div className="chat-options">
            <p className="chat-msg bot" style={{ marginBottom: '0.75rem' }}>Are you running paid ads (Google/Meta)?</p>
            <button className="chat-option-btn" onClick={() => handleOption('yes', 'q3', "Perfect. How big is your team?", "Yes, running ads")}>Yes, running ads</button>
            <button className="chat-option-btn" onClick={() => handleOption('no', 'q3', "No worries. How big is your team?", "Not yet")}>Not yet</button>
          </div>
        );
      case 'q3':
        return (
          <div className="chat-options">
            <p className="chat-msg bot" style={{ marginBottom: '0.75rem' }}>What's your team size?</p>
            <button className="chat-option-btn" onClick={() => handleOption('solo', 'qualified', "You're a great fit! Here's how to get started 👇", "Just me")}>Just me (solo agent)</button>
            <button className="chat-option-btn" onClick={() => handleOption('small', 'qualified', "Perfect fit for the system. Here's your next step 👇", "2–5 people")}>2–5 agents</button>
            <button className="chat-option-btn" onClick={() => handleOption('large', 'qualified', "A full team — this is built for you. 👇", "6+ people")}>6+ agents</button>
          </div>
        );
      case 'qualified':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="/book" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.875rem' }}>
              📅 Book Your Strategy Call
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.65rem 1rem', borderRadius: '8px', background: '#25D366', color: '#fff', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
              ⚡ WhatsApp (Fastest Reply)
            </a>
          </div>
        );
      case 'unqualified':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p className="chat-msg bot">No problem! Let's chat on WhatsApp and explore how we can help you scale.</p>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '8px', background: '#25D366', color: '#fff', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              ⚡ Message on WhatsApp
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel">
          <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>🤖 AI Lead Qualifier</span>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
          </div>
          <div className="chat-body">
            {messages.map((m, i) => (
              <p key={i} className={`chat-msg ${m.role}`}>{m.text}</p>
            ))}
            {renderOptions()}
          </div>
        </div>
      )}
      <button className="chat-fab" onClick={() => setOpen(!open)} aria-label="Open chat">
        {open ? <X size={22} color="#0B0B0F" /> : <MessageCircle size={22} color="#0B0B0F" />}
      </button>
    </div>
  );
}
