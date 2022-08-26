import {Observable} from 'rxjs';
import type {Activity, Project, UUID, WorkUnit} from './types';

export interface Search<T> extends Observable<T> {
  next(filter: string): void;
}

export interface Database {
  getWorkUnit(id: UUID): Promise<WorkUnit | undefined>;

  getActivity(id: UUID): Promise<Activity | undefined>;

  getProject(id: UUID): Promise<Project | undefined>;

  searchActivitiesByName(): { filter$: Search<Record<UUID, Activity>> };

  searchProjectsByName(): { filter$: Search<Record<UUID, Project>> };
}
