import {
  getPlatformPriorityMatrix,
  getPlatformReviewCadence,
  getPlatformSummary,
} from "./platformRegistry";

export function buildPlatformReport() {
  return {
    summary: getPlatformSummary(),
    cadence: getPlatformReviewCadence(),
    priorityMatrix: getPlatformPriorityMatrix(),
  };
}
