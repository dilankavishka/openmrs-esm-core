import { type Config, openmrsFetch } from '@openmrs/esm-framework';

export async function saveConfig(config: Config) {
  return openmrsFetch(`/ws/frontend/config.json`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: config,
  });
}