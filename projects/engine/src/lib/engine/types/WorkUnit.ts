import {type UUID} from './index';

export interface WorkUnit {
  readonly id: UUID;
  readonly projectId: UUID | undefined;
  readonly activityId: UUID | undefined;
  readonly description: string;
  readonly startAtUTC: Date;
  readonly endAtUTC: Date | undefined;
}

