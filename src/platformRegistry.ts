export type PlatformService = {
  id: string;
  name: string;
  purpose: string;
  boundary: string;
  owner: string;
  reviewCadence: string;
  evidence: string[];
  maturity: "Foundational" | "Standardized" | "Managed" | "Optimized";
};

export const platformServices: PlatformService[] = [
  {
    id: "service-catalog",
    name: "Service Catalog",
    purpose: "Describe what the platform offers and how teams consume it.",
    boundary: "Teams can request approved services directly from the catalog.",
    owner: "Platform team",
    reviewCadence: "Monthly",
    evidence: ["Published catalog", "Consumption logs", "Service owner records"],
    maturity: "Standardized",
  },
  {
    id: "self-service",
    name: "Self-Service Engineering",
    purpose: "Allow teams to complete common platform tasks without manual support.",
    boundary: "Automated, low-risk actions are self-service; exceptions require review.",
    owner: "Platform product owner",
    reviewCadence: "Monthly",
    evidence: ["Self-service workflow", "Automation logs", "Exception queue"],
    maturity: "Managed",
  },
  {
    id: "platform-governance",
    name: "Platform Governance",
    purpose: "Define what requires review, exception handling, and priority setting.",
    boundary: "Changes that affect standards or risk posture must be reviewed.",
    owner: "Architecture or control owner",
    reviewCadence: "Quarterly",
    evidence: ["Review notes", "Standards", "Exception log"],
    maturity: "Managed",
  },
  {
    id: "platform-observability",
    name: "Platform Observability",
    purpose: "Track whether platform services are being used and whether they are helping.",
    boundary: "Telemetry is collected for platform health and service feedback.",
    owner: "Platform operations",
    reviewCadence: "Weekly",
    evidence: ["KPI dashboard", "Telemetry views", "Satisfaction signals"],
    maturity: "Managed",
  },
  {
    id: "roadmap-management",
    name: "Roadmap Management",
    purpose: "Show what is improving next and how delivery is sequenced.",
    boundary: "Roadmap changes are tracked and approved through the operating model.",
    owner: "Platform leadership",
    reviewCadence: "Quarterly",
    evidence: ["Roadmap", "Backlog", "Milestone review"],
    maturity: "Standardized",
  },
];

export function getPlatformSummary() {
  return {
    totalServices: platformServices.length,
    managedServices: platformServices.filter((service) => service.maturity === "Managed").length,
    standardizedServices: platformServices.filter(
      (service) => service.maturity === "Standardized"
    ).length,
  };
}

export function getPlatformReviewCadence() {
  return [
    { cadence: "Weekly", focus: "Observability and service health" },
    { cadence: "Monthly", focus: "Service catalog and self-service review" },
    { cadence: "Quarterly", focus: "Governance and roadmap review" },
  ];
}

export function getPlatformPriorityMatrix() {
  return platformServices.map((service) => ({
    service: service.name,
    owner: service.owner,
    maturity: service.maturity,
    reason:
      service.maturity === "Managed"
        ? "Active service with regular review"
        : "Needs clearer standardization",
  }));
}
