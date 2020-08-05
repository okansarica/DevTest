export interface JobCreateModel {
  jobId: number;
  engineer: string;
  when: Date;
  customerId?: number;
}
