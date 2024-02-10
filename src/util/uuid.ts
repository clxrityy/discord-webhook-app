import { v4 as uuidv4 } from 'uuid';

export const uuid = (): string => {
    const id = uuidv4();

    const split = id.split('-')

    return split[0];
}