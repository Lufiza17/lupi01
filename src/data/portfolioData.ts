export interface PersonalInfo {
  fullName: string;
  nickname: string;
  school: string;
  major: string;
  classGrade: string;
  age: number;
  status: string;
  city: string;
  province: string;
  country: string;
  year: number;
  email: string;
  bioHeadline: string;
  heroHeadline: string;
  heroDescription: string;
  aboutDescription: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'concept';
  status: string; // e.g. "Sedang Dipelajari"
  icon: string;
  accent: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  statusBadge: string;
  description: string;
  technologies: string[];
  gradient: string;
}

export interface EducationItem {
  school: string;
  major: string;
  classGrade: string;
  year: string;
  description: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const PORTFOLIO_DATA: {
  personal: PersonalInfo;
  skills: SkillItem[];
  projects: ProjectItem[];
  education: EducationItem;
  journey: JourneyStep[];
} = {
  personal: {
    fullName: "Lufi Noferiza",
    nickname: "Lufi",
    school: "SMK Negeri Tembarak",
    major: "Rekayasa Perangkat Lunak (RPL)",
    classGrade: "XI RPL A",
    age: 16,
    status: "Pelajar",
    city: "Temanggung",
    province: "Jawa Tengah",
    country: "Indonesia",
    year: 2026,
    email: "EMAIL_KAMU",
    bioHeadline: "Software Engineering Student",
    heroHeadline: "Future Software Developer",
    heroDescription: "Saya adalah siswa Rekayasa Perangkat Lunak di SMK Negeri Tembarak yang sedang belajar membangun website, mempelajari pemrograman, dan mengembangkan kemampuan di dunia teknologi.",
    aboutDescription: "Halo, saya Lufi Noferiza, biasa dipanggil Lufi. Saya adalah siswa kelas XI RPL A di SMK Negeri Tembarak, jurusan Rekayasa Perangkat Lunak. Saya memiliki ketertarikan terhadap dunia teknologi, pemrograman, dan pengembangan website. Saat ini saya terus belajar dan mengembangkan kemampuan saya melalui berbagai latihan dan project."
  },

  skills: [
    {
      name: "HTML",
      category: "frontend",
      status: "Fondasi Web & Semantik",
      icon: "Code2",
      accent: "#f97316"
    },
    {
      name: "CSS",
      category: "frontend",
      status: "Styling & Responsive Layout",
      icon: "Palette",
      accent: "#38bdf8"
    },
    {
      name: "JavaScript",
      category: "frontend",
      status: "Logika Web & DOM",
      icon: "FileCode2",
      accent: "#facc15"
    },
    {
      name: "PHP",
      category: "backend",
      status: "Server-side Scripting",
      icon: "Server",
      accent: "#818cf8"
    },
    {
      name: "MySQL",
      category: "backend",
      status: "Relational Database",
      icon: "Database",
      accent: "#06b6d4"
    },
    {
      name: "Git",
      category: "tools",
      status: "Version Control Dasar",
      icon: "GitBranch",
      accent: "#f43f5e"
    },
    {
      name: "GitHub",
      category: "tools",
      status: "Repository & Kolaborasi",
      icon: "Github",
      accent: "#a855f7"
    },
    {
      name: "Responsive Web Design",
      category: "concept",
      status: "Mobile-First & Fluid Layout",
      icon: "Smartphone",
      accent: "#10b981"
    },
    {
      name: "UI/UX",
      category: "concept",
      status: "Prinsip Desain Antarmuka",
      icon: "Layout",
      accent: "#ec4899"
    }
  ],

  projects: [
    {
      id: "project-01",
      number: "Project 01",
      title: "Project Coming Soon",
      statusBadge: "Under Development",
      description: "Project yang sedang saya kembangkan.",
      technologies: ["HTML", "CSS", "JavaScript"],
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent"
    },
    {
      id: "project-02",
      number: "Project 02",
      title: "Project Coming Soon",
      statusBadge: "Planned Showcase",
      description: "Website/aplikasi yang akan saya tambahkan ke portfolio.",
      technologies: ["HTML", "CSS", "JavaScript"],
      gradient: "from-cyan-500/20 via-violet-500/10 to-transparent"
    },
    {
      id: "project-03",
      number: "Project 03",
      title: "Project Coming Soon",
      statusBadge: "Learning Milestone",
      description: "Project berikutnya dalam perjalanan belajar saya.",
      technologies: ["PHP", "MySQL"],
      gradient: "from-violet-500/20 via-purple-500/10 to-transparent"
    }
  ],

  education: {
    school: "SMK Negeri Tembarak",
    major: "Rekayasa Perangkat Lunak (RPL)",
    classGrade: "XI RPL A",
    year: "2026",
    description: "Mempelajari dasar-dasar pemrograman, pengembangan website, database, dan konsep rekayasa perangkat lunak."
  },

  journey: [
    {
      step: "01",
      title: "Learn",
      description: "Mempelajari teknologi dan dasar pemrograman.",
      icon: "BookOpen",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Build",
      description: "Menerapkan ilmu melalui latihan dan project.",
      icon: "Hammer",
      color: "from-cyan-500 to-teal-500"
    },
    {
      step: "03",
      title: "Improve",
      description: "Memperbaiki kemampuan dan mempelajari teknologi baru.",
      icon: "TrendingUp",
      color: "from-violet-500 to-purple-500"
    },
    {
      step: "04",
      title: "Create",
      description: "Membangun karya digital yang bermanfaat.",
      icon: "Sparkles",
      color: "from-purple-500 to-pink-500"
    }
  ]
};
