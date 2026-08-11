export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  description: string;
  skills?: string[];
}

export interface EducationEntry {
  organization: string;
  program: string;
  period: string;
  location: string;
  description: string;
}

export const profile = {
  name: "Frederick WIjaya 黄瑞鹏",
  shortName: "Frederick WIjaya",
  title: "Engineering student · operations · events",
  summary:
    "Junior undergraduate in the Interdisciplinary Program of Engineering at National Tsing Hua University. Curious, adaptable, and motivated by the way people, systems, and projects come together.",
  location: "Hsinchu City, Taiwan",
  email: "frederickwijaya1688@gmail.com",
  linkedin: "linkedin.com/in/frederick-wijaya",
};

export const experience: ExperienceEntry[] = [
  {
    organization: "臺灣惠爾得股份有限公司 | TAIWAN FELT CO., LTD",
    role: "Rotational Intern – Corporate Operations & Quality Control",
    period: "Jul 2026 — Present",
    location: "Bade District, Taoyuan City, Taiwan",
    type: "On-site",
    description:
      "Transitioned to the corporate office to manage administrative paperwork and support daily operational documentation.",
    skills: ["Corporate operations", "Quality control", "Documentation"],
  },
  {
    organization: "臺灣惠爾得股份有限公司 | TAIWAN FELT CO., LTD",
    role: "Rotational Intern – Manufacturing & Production Operations",
    period: "Jun 2026 — Jul 2026",
    location: "Bade District, Taoyuan City, Taiwan",
    type: "On-site",
    description:
      "Studied end-to-end production lines and machinery workflows on the manufacturing floor during the initial rotation.",
    skills: ["Manufacturing", "Production operations", "Process observation"],
  },
  {
    organization: "NTHU Racing",
    role: "Member — Chassis Division",
    period: "Mar 2026 — Present",
    location: "Hsinchu City, Taiwan",
    type: "On-site",
    description:
      "Active team member following the completion of a six-month chassis engineering and workshop safety training program.",
    skills: ["Engineering teamwork", "Workshop safety", "Chassis systems"],
  },
  {
    organization: "National Tsing Hua University · NTHU ERSA",
    role: "Chief Trainer (司儀／襄儀教學長)",
    period: "Jul 2026 — Present",
    location: "Hsinchu City, Taiwan",
    type: "Part-time",
    description:
      "Developed and delivered training curricula for new trainees in MC and Xiangyi protocols, and mentored more than ten trainees.",
    skills: ["Training", "Public speaking", "Protocol"],
  },
  {
    organization: "National Tsing Hua University · NTHU ERSA",
    role: "Active Duty Member | 清華大學紫荊大使",
    period: "Jul 2025 — Present",
    location: "Hsinchu City, Taiwan",
    type: "Part-time",
    description:
      "Served as the primary English Master of Ceremonies and Xiangyi protocol lead for university ceremonies, VIP receptions, and international events.",
    skills: ["Event protocol", "MC", "International events"],
  },
  {
    organization: "National Tsing Hua University · NTHU ERSA",
    role: "Trainee | 清華大學紫荊大使",
    period: "Sep 2025 — Jul 2026",
    location: "Hsinchu City, Taiwan",
    type: "Part-time",
    description:
      "Completed a rigorous six-month intensive training program focused on professional emceeing, public speaking, and formal campus protocols.",
    skills: ["Emceeing", "Public speaking", "Campus protocol"],
  },
  {
    organization: "NTHU IBPSA",
    role: "Senior Event Planner",
    period: "Jun 2026 — Present",
    location: "Hsinchu City, Taiwan",
    type: "Full-time",
    description:
      "Spearheaded the end-to-end planning, strategic direction, and execution of large-scale flagship initiatives for NTHU IBPSA.",
    skills: ["Event planning", "Strategic direction", "Execution"],
  },
  {
    organization: "NTHU IBPSA",
    role: "Junior Event Planner",
    period: "Jul 2025 — Jun 2026",
    location: "Hsinchu City, Taiwan",
    type: "Full-time",
    description:
      "Assisted in end-to-end planning, logistics coordination, and execution of campus events, keeping activities aligned with project timelines.",
    skills: ["Logistics", "Coordination", "Project timelines"],
  },
  {
    organization: "National Tsing Hua University · Institute of Anthropology",
    role: "Conservation and Inventory Project (Winter Internship)",
    period: "Dec 2025 — Jan 2026",
    location: "Hsinchu City, Taiwan",
    type: "On-site",
    description:
      "Assisted with inventory, categorization, and digital cataloging of historical artifacts, research specimens, and archival materials.",
    skills: ["Inventory control", "Cataloging", "Research materials"],
  },
];

export const education: EducationEntry[] = [
  {
    organization: "National Tsing Hua University",
    program: "Interdisciplinary Program of Engineering · Undergraduate",
    period: "Degree dates to be added",
    location: "Hsinchu City, Taiwan",
    description:
      "Current undergraduate student building an interdisciplinary foundation across engineering, systems, and applied problem-solving.",
  },
];

export const skillGroups = [
  {
    label: "Operations",
    skills: ["Corporate operations", "Quality control", "Administrative documentation", "Manufacturing workflows"],
  },
  {
    label: "People & events",
    skills: ["Event planning", "Logistics coordination", "Master of Ceremonies", "Public speaking", "Protocol training"],
  },
  {
    label: "Engineering practice",
    skills: ["Chassis systems", "Production processes", "Workshop safety", "Cross-functional teamwork"],
  },
  {
    label: "Research & organization",
    skills: ["Inventory control", "Digital cataloging", "Material categorization", "Project timelines"],
  },
];
