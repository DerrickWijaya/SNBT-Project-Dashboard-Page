import { Circle } from 'lucide-react';

type MaterialItem = {
  id: string;
  title: string;
};

const materials: MaterialItem[] = [
  { id: '1', title: 'Kumpulan Soal Penalaran Umum' },
  { id: '2', title: 'Kumpulan Soal PPN, PBM, dan LBI' },
  { id: '3', title: 'Kumpulan Soal PK & PM' },
  { id: '4', title: 'Kumpulan Soal Literasi dalam Bahasa Inggris' },
  { id: '5', title: 'Simulasi UTBK' },
];

export default function MaterialList() {
  return (
    <ul className="space-y-2">
      {materials.map((material) => (
        <li key={material.id} className="flex items-start gap-2">
          <Circle className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" />
          <span className="text-sm">{material.title}</span>
        </li>
      ))}
    </ul>
  );
}