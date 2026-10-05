/* eslint-disable @repo/no-null-render */
/**
 * Simple metadata badges for ObservationDetailView
 * Each badge handles its own null checks and returns null when data is unavailable
 * Metric values render in mono; `contents` keeps the wrapper out of layout.
 */

import { Badge } from "@/src/components/design-system/Badge/Badge";
import { formatIntervalSeconds } from "@/src/utils/dates";

export function LatencyBadge({
  latencySeconds,
}: {
  latencySeconds: number | null;
}) {
  if (latencySeconds == null) return null;

  return (
    <span className="contents font-mono">
      <Badge color="ghost" text={formatIntervalSeconds(latencySeconds)} />
    </span>
  );
}

export function TimeToFirstTokenBadge({
  timeToFirstToken,
}: {
  timeToFirstToken: number | null | undefined;
}) {
  if (timeToFirstToken == null) return null;

  return (
    <span className="contents font-mono">
      <Badge
        color="ghost"
        label="ttft"
        text={formatIntervalSeconds(timeToFirstToken)}
      />
    </span>
  );
}
