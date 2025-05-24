import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <FeatureCard 
        title="SIMULATION" 
        subtitle="TEST YOUR SKILL" 
        href="/simulation"
      />
      <FeatureCard 
        title="EXERCISE" 
        subtitle="HONE YOUR SKILL" 
        href="/exercise"
      />
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  subtitle: string;
  href: string;
}

function FeatureCard({ title, subtitle, href }: FeatureCardProps) {
  return (
    <Link href={href}>
      <Card className="h-48 overflow-hidden group hover:shadow-md transition-shadow">
        <CardContent className="p-0 h-full relative">
          <div className="absolute inset-0 bg-gray-300">
            <IndonesiaMap />
          </div>
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <div className="w-64 h-1 bg-white my-2"></div>
            <p className="text-lg text-white">{subtitle}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function IndonesiaMap() {
  return (
    <div className="w-full h-full bg-gray-400 flex items-center justify-center">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1000 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-50"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M200,150 C250,100 350,120 400,130 C450,140 500,160 550,150 C600,140 650,100 700,120 C750,140 800,180 850,170"
          stroke="#555"
          strokeWidth="60"
          strokeLinecap="round"
        />
        <circle cx="250" cy="120" r="15" fill="#FFD700" />
        <circle cx="350" cy="150" r="15" fill="#FFD700" />
        <circle cx="450" cy="130" r="15" fill="#FFD700" />
        <circle cx="550" cy="140" r="15" fill="#FFD700" />
        <circle cx="650" cy="120" r="15" fill="#FFD700" />
        <circle cx="750" cy="150" r="15" fill="#FFD700" />
      </svg>
    </div>
  );
}