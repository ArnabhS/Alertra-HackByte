import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { UserPlus, Users, ShieldAlert, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Sign Up & Verify Identity",
    description: "Create your account and complete the secure verification process with your Smart ID Card.",
    icon: <UserPlus size={24} />, 
    bgColor: "rgb(233, 30, 99)",
  },
  {
    id: 2,
    title: "Set Up Safety Network",
    description: "Add trusted contacts and customize your emergency response settings.",
    icon: <Users size={24} />, 
    bgColor: "#AA60C8",
  },
  {
    id: 3,
    title: "Enable Location Services",
    description: "Grant location access for real-time tracking and safety zone monitoring.",
    icon: <ShieldAlert size={24} />, 
    bgColor: "rgb(233, 30, 99)",
  },
  {
    id: 4,
    title: "Ready for Protection",
    description: "Your safety system is active. Use the SOS button anytime for immediate assistance.",
    icon: <CheckCircle size={24} />, 
    bgColor: "#AA60C8",
  },
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-pink-500  text-center mb-2">How Alertra Keeps You Safe</h2>
      <p className="text-slate-500 text-center tracking-tight mb-12">Simple steps to ensure your safety with our advanced Smart ID Card system.</p>
      
      <VerticalTimeline >
        {steps.map((step) => (
          <VerticalTimelineElement
            key={step.id}
            className="vertical-timeline-element--work "
            contentStyle={{ background: '#FBD9ED', color: '#000' }}
            contentArrowStyle={{ borderRight: `7px solid #FBD9ED` }}
            date={`Step 0${step.id}`}
            iconStyle={{ background: step.bgColor, color: '#fff' }}
            icon={step.icon}
          >
            <h3 className="text-lg font-semibold text-rose-500">{step.title}</h3>
            <p className="text-slate-600 text-sm mt-2">{step.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}