export type PlatformLayer = 'Strategy' | 'Service Model' | 'Self-Service' | 'Control' | 'Measurement';

export type PlatformStatus = 'Draft' | 'Active' | 'Planned' | 'Improving';

export interface PlatformService {
  name: string;
  owner: string;
  purpose: string;
  status: PlatformStatus;
}

export interface PlatformLayerEntry {
  layer: PlatformLayer;
  question: string;
  artifact: string;
}

export interface PlatformRegistry {
  repository: string;
  purpose: string;
  layers: PlatformLayerEntry[];
  services: PlatformService[];
  metrics: string[];
  decisionRule: string;
  governanceQuestions: string[];
}

export const platformRegistry: PlatformRegistry = {
  repository: 'Platform Engineering Operating Model',
  purpose:
    'Describe the platform as a product with services, self-service paths, governance, observability, and measurable outcomes.',
  layers: [
    {
      layer: 'Strategy',
      question: 'What is the platform for?',
      artifact: 'Platform engineering strategy',
    },
    {
      layer: 'Service Model',
      question: 'What does the platform offer?',
      artifact: 'Service catalog / operating map',
    },
    {
      layer: 'Self-Service',
      question: 'What can teams do themselves?',
      artifact: 'Self-service engineering',
    },
    {
      layer: 'Control',
      question: 'What requires review?',
      artifact: 'Platform governance',
    },
    {
      layer: 'Measurement',
      question: 'How do we know it is working?',
      artifact: 'Platform KPI dashboard',
    },
  ],
  services: [
    {
      name: 'Environment provisioning',
      owner: 'Platform team',
      purpose: 'Provide standardized cloud and application environments',
      status: 'Active',
    },
    {
      name: 'Service catalog',
      owner: 'Platform product manager',
      purpose: 'Publish what the platform offers and how to consume it',
      status: 'Active',
    },
    {
      name: 'Policy guardrails',
      owner: 'Governance lead',
      purpose: 'Keep delivery safe while reducing friction',
      status: 'Improving',
    },
    {
      name: 'Observability onboarding',
      owner: 'SRE enablement',
      purpose: 'Standardize telemetry and signals across teams',
      status: 'Planned',
    },
  ],
  metrics: [
    'deployment lead time',
    'self-service adoption',
    'manual request reduction',
    'platform availability',
    'developer satisfaction',
  ],
  governanceQuestions: [
    'What should the platform standardize?',
    'What should teams self-serve?',
    'How do we measure platform value?',
  ],
  decisionRule:
    'If a platform capability cannot improve delivery, reduce friction, or clarify ownership, it should not be treated as a first-class platform service.',
};

export function getPlatformOverview() {
  return {
    repository: platformRegistry.repository,
    purpose: platformRegistry.purpose,
    layerCount: platformRegistry.layers.length,
    serviceCount: platformRegistry.services.length,
    activeServices: platformRegistry.services.filter((service) => service.status === 'Active').length,
  };
}
