import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import MaterialList from "./material-list";

export default function Dashboard() {
  return (
    <div className="my-6">
      <Card className="border rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <Avatar className="h-32 w-32 rounded-full border-2 border-gray-200">
                <AvatarFallback className="bg-gray-100 text-gray-400">
                  <ProfileIcon />
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-1">
              <div className="space-y-1.5">
                <h2 className="text-xl font-semibold">Nama: Joko Aditya Purnama</h2>
                <p className="text-gray-700">Tujuan Universitas: Universitas Indonesia</p>
                <p className="text-gray-700">Tujuan Jurusan: Teknik Informatika</p>
                <div className="mt-4 space-y-1">
                  <p className="text-gray-700">Best score: 620</p>
                  <p className="text-gray-700">
                    Target score: 720 <span className="text-red-500">(not accomplished)</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 border-l pl-6 hidden md:block">
              <h3 className="font-medium mb-2">Materi Belajar</h3>
              <MaterialList />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-4 block md:hidden">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Materi Belajar</h3>
            <MaterialList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ProfileIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="80" 
      height="80" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}