'use client';
import { useEffect, useRef } from 'react';

const NODES = [
  { x: 120, y: 200, label: 'Lead', icon: '👤', active: false },
  { x: 320, y: 150, label: 'AI', icon: '🤖', active: true },
  { x: 520, y: 220, label: 'WhatsApp', icon: '💬', active: true },
  { x: 700, y: 160, label: 'CRM', icon: '📊', active: false },
  { x: 880, y: 210, label: 'Booking', icon: '📅', active: false },
];

const EDGES = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
];

export default function WorkflowAnimation() {
  const canvasRef = useRef<SVGSVGElement>(null);

  return (
    <div style={{ width: '100%', position: 'relative', height: '400px' }}>
      <svg
        ref={canvasRef}
        viewBox="0 0 1000 400"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8FB4E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C8FB4E" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(200,251,78,0.4)" />
          </marker>
        </defs>

        {/* Background floating nodes */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={`bg-${i}`}
            cx={100 + i * 120}
            cy={50 + (i % 3) * 100}
            r={4 + (i % 3) * 2}
            fill="var(--accent)"
            opacity="0.08"
            style={{
              animation: `pulse-node ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        {/* Connection lines */}
        {EDGES.map((edge, i) => {
          const from = NODES[edge.from];
          const to = NODES[edge.to];
          return (
            <line
              key={`edge-${i}`}
              x1={from.x} y1={from.y}
              x2={to.x} y2={to.y}
              stroke="rgba(200,251,78,0.25)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              markerEnd="url(#arrow)"
              style={{
                animation: `flow-dash 3s linear infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          );
        })}

        {/* Node glows */}
        {NODES.map((node, i) => (
          <circle
            key={`glow-${i}`}
            cx={node.x} cy={node.y} r={40}
            fill="url(#nodeGrad)"
            opacity={node.active ? 0.6 : 0.2}
            style={{
              animation: `pulse-node ${2.5 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Node circles */}
        {NODES.map((node, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={node.x} cy={node.y} r={28}
              fill="var(--surface)"
              stroke={node.active ? 'rgba(200,251,78,0.7)' : 'rgba(255,255,255,0.1)'}
              strokeWidth={node.active ? 2 : 1}
              filter={node.active ? 'url(#glow)' : undefined}
              style={{
                animation: node.active ? `pulse-node 2.5s ease-in-out infinite` : undefined,
                animationDelay: `${i * 0.3}s`,
              }}
            />
            <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="middle" fontSize="18">
              {node.icon}
            </text>
            <text
              x={node.x} y={node.y + 45}
              textAnchor="middle"
              fontSize="11"
              fontFamily="DM Mono, monospace"
              fill="rgba(200,251,78,0.7)"
              letterSpacing="0.05em"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
