export interface BenchmarkModel {
  id: string;
  name: string;
  parameters: string;
  accuracyLoss: string;
  ttftPlaintext: number; // ms
  ttftSafeCompute: number; // ms
  tpotPlaintext: number; // ms/tok
  tpotSafeCompute: number; // ms/tok
  recoveryRisk: string; // %
  evalDatasets: string[];
}

export type DeploymentModel = 'saas' | 'appliance';

export interface ActionFirewallEvent {
  id: string;
  prompt: string;
  toolCall: string;
  classification: 'APPROVED' | 'BLOCKED';
  reason: string;
  latencyMs: number;
}
