import { platformRegistry } from './platformRegistry';

export interface PlatformReportRow {
  service: string;
  owner: string;
  purpose: string;
  status: string;
}

export function buildPlatformReport() {
  const rows: PlatformReportRow[] = platformRegistry.services.map((service) => ({
    service: service.name,
    owner: service.owner,
    purpose: service.purpose,
    status: service.status,
  }));

  return {
    title: platformRegistry.repository,
    purpose: platformRegistry.purpose,
    layers: platformRegistry.layers,
    metrics: platformRegistry.metrics,
    governanceQuestions: platformRegistry.governanceQuestions,
    decisionRule: platformRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildPlatformSummary() {
  return {
    totalServices: platformRegistry.services.length,
    activeServices: platformRegistry.services.filter((service) => service.status === 'Active').length,
    improvingServices: platformRegistry.services.filter((service) => service.status === 'Improving').length,
    plannedServices: platformRegistry.services.filter((service) => service.status === 'Planned').length,
  };
}
