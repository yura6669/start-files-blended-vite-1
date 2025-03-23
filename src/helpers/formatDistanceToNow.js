import { formatDistanceNow } from 'date-fns';

const formatDistanceToNow = (date) => {
  return format(new Date(date), { addSuffix: true });
}