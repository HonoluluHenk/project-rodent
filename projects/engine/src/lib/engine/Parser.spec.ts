import {Database, Search} from './Database';
import {Parser} from './Parser';
import {type Activity, Project, UUID, WorkUnit} from './types';

describe('Parser', () => {
  const mockDB: Database = {
    getActivity(id: UUID): Promise<Activity | undefined> {
      throw Error('not implemented: getActivity');
    },
    getProject(id: UUID): Promise<Project | undefined> {
      throw Error('not implemented: getProject');
    },
    getWorkUnit(id: UUID): Promise<WorkUnit | undefined> {
      throw Error('not implemented: getWorkUnit');
    },
    searchActivitiesByName(): { filter$: Search<Record<UUID, Activity>> } {
      throw Error('not implemented: searchActivitiesByName');
    },
    searchProjectsByName(): { filter$: Search<Record<UUID, Project>> } {
      throw Error('not implemented: searchProjectsByName');
    },
  };

  it('creates an instance', () => {
    expect(new Parser(mockDB))
      .toBeTruthy();
  });
});
