export interface PracticumModule {
  id: string;
  code: string;
  title: string;
  astmStandard: string;
  category: 'mechanical' | 'microstructure' | 'ndt';
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  equipment: string[];
  testSpecimens: string[];
  equations: { name: string; formula: string; explanation: string }[];
  downloadFileName: string;
  fileSize: string;
}

export interface Assistant {
  id: string;
  name: string;
  nim: string;
  role: 'Koordinator Praktikum' | 'Koordinator Asisten' | 'Asisten Modul' | 'Laboran';
  assignedModule: string;
  phone: string;
  email: string;
  officeHours: string;
  initials: string;
  badgeColor?: string;
}

export interface ScheduleItem {
  id: string;
  groupNumber: number;
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';
  shift: 'Shift 1 (08.00 - 10.30 WIB)' | 'Shift 2 (10.45 - 13.15 WIB)' | 'Shift 3 (13.45 - 16.15 WIB)';
  room: string;
  moduleCode: string;
  moduleTitle: string;
  leadAssistant: string;
  weekSession: number;
}

export interface AnnexDocument {
  id: string;
  code: string;
  title: string;
  category: 'template' | 'logbook' | 'sop' | 'rubric';
  description: string;
  format: 'DOCX' | 'PDF';
  fileSize: string;
  lastUpdated: string;
  previewType: 'cover' | 'pengesahan' | 'kartu_asistensi' | 'sop_k3' | 'format_tugas';
}

export interface LabAnnouncement {
  id: string;
  date: string;
  title: string;
  category: 'Penting' | 'Jadwal' | 'Tugas';
  content: string;
  isUrgent?: boolean;
}
