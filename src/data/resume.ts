import resumeAsset from "@/assets/Frederick_WIjaya_CV.pdf.asset.json";

export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  description: string;
  highlights?: string[];
  skills?: string[];
}

export interface ExperienceGroup {
  organization: string;
  entries: ExperienceEntry[];
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
  title: "Engineering student",
  summary:
    "Analytical engineering student at National Tsing Hua University with practical experience in operational workflow optimization, project management, and diplomatic leadership. Proven track record in data cataloging, cross-functional team management, and international stakeholder coordination.",
  location: "Hsinchu City, Taiwan",
  phone: "+886-970-019-931",
  email: "frederickwijaya1688@gmail.com",
  linkedin: "linkedin.com/in/frederick-wijaya",
  instagram: "instagram.com/frederick_wijaya168",
  tinyUrl: "instagram.com/frederick_wijaya168",
  resumeUrl: resumeAsset.url,
};

export const experience: ExperienceEntry[] = [
  {
    organization: "Taiwan Felt Co., Ltd.",
    role: "Rotational Intern (Corporate Operations & Manufacturing)",
    period: "Jun 2026 — Aug 2026",
    location: "Bade District, Taoyuan City, Taiwan",
    type: "On-site",
    description:
      "Rotated across corporate divisions and manufacturing floors to standardize operations, document workflows, and identify production bottlenecks.",
    highlights: [
      "Standardized administrative workflows and operational documentation across 3 corporate divisions, reducing internal document processing time by 15%.",
      "Analyzed end-to-end production lines and machinery workflows across 4 manufacturing shop floors to identify and eliminate process bottlenecks.",
    ],
    skills: ["Operations", "Process optimization", "Documentation"],
  },
  {
    organization: "NTHU Racing",
    role: "Engineering Member (Chassis Division)",
    period: "Mar 2026 — Present",
    location: "Hsinchu City, Taiwan",
    type: "On-site",
    description:
      "Active chassis division member applying CAD-based design and engineering teamwork to develop competition vehicle systems.",
    highlights: [
      "Utilized Autodesk Inventor to design high-performance chassis systems, optimizing structural integrity and vehicle safety frame specs.",
    ],
    skills: ["Autodesk Inventor", "CAD drawing", "Engineering teamwork"],
  },
  {
    organization: "NTHU Student Ambassadors (ERSA)",
    role: "Chief Trainer & Diplomatic Protocol Lead",
    period: "Jul 2025 — Present",
    location: "Hsinchu City, Taiwan",
    type: "Part-time",
    description:
      "Protocol lead and chief trainer for NTHU’s diplomatic ambassador team, designing curricula and hosting high-profile ceremonies for international delegations.",
    highlights: [
      "Promoted to Chief Trainer (Jul 2026); designed and delivered a comprehensive 6-week training curriculum on diplomatic protocol and public speaking to 12 trainees.",
      "Served as primary English Master of Ceremonies (MC) for 8+ high-profile university ceremonies hosting VIP international delegations.",
    ],
    skills: ["Public speaking", "Protocol training", "MC"],
  },
  {
    organization: "NTHU IBPSA",
    role: "Senior Event Planner",
    period: "Jul 2025 — Present",
    location: "Hsinchu City, Taiwan",
    type: "Full-time",
    description:
      "Senior planner directing logistics, cross-departmental teams, and event budgets for international flagship campus events.",
    highlights: [
      "Advanced to Senior Planner to direct end-to-end logistics, cross-departmental teams of 15+ members, and more than NT$75,000 budget for international flagship campus events.",
    ],
    skills: ["Event planning", "Logistics", "Budget coordination"],
  },
  {
    organization: "NTHU Institute of Anthropology",
    role: "Conservation & Inventory Project Intern",
    period: "Dec 2025 — Jan 2026",
    location: "Hsinchu City, Taiwan",
    type: "On-site",
    description:
      "Winter intern supporting the systematic inventory, categorization, and digital archiving of historical and research artifacts.",
    highlights: [
      "Executed systematic data cataloging, categorization, and digital archiving for 500+ historical artifacts, improving database search efficiency and ensuring data integrity.",
    ],
    skills: ["Data cataloging", "Database archiving", "Inventory control"],
  },
];

export const experienceByOrganization: ExperienceGroup[] = experience.reduce<ExperienceGroup[]>(
  (groups, entry) => {
    const existingGroup = groups.find((group) => group.organization === entry.organization);

    if (existingGroup) {
      existingGroup.entries.push(entry);
    } else {
      groups.push({ organization: entry.organization, entries: [entry] });
    }

    return groups;
  },
  [],
);

export const education: EducationEntry[] = [
  {
    organization: "National Tsing Hua University (NTHU)",
    program: "B.S. in Power Mechanical Engineering & Industrial Engineering",
    period: "2024 – 2028",
    location: "Hsinchu City, Taiwan",
    description:
      "Currently in 3rd year. GPA: 3.6 / 4.3. University Scholarship recipient since enrollment. Relevant coursework: Engineering Economics, Manufacturing Processes, Computer-Aided Drawing, Energy Engineering.",
  },
];

export const skillGroups = [
  {
    label: "Data & Analytics",
    skills: [
      "Data cataloging",
      "Database archiving",
      "Advanced Microsoft Excel (VLOOKUP, Pivot Tables)",
      "Process optimization",
      "Vibe coding",
    ],
  },
  {
    label: "Engineering & Software",
    skills: ["Autodesk Inventor", "CAD drawing", "Microsoft Office (PowerPoint, Word)"],
  },
  {
    label: "Languages",
    skills: ["English (Fluent)", "Chinese (Working proficiency)"],
  },
];
