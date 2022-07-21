import { Link } from '@/components/Link';
import { pagesPath } from '@/lib/$path';
import { dayjs } from '@/lib/dayjs';
import { FaCalendarDay } from 'react-icons/fa';
import type { FC } from 'react';
import type { Event, User } from '@/types/Api';

type Props = {
  event: Event & {
    user: Pick<User, 'name' | 'image'>;
  };
};

export const EventCard: FC<Props> = ({ event }) => {
  return (
    <Link href={pagesPath.events._id(event.id).$url()}>
      <div className='rounded-md bg-white p-4 shadow-md transition-shadow hover:shadow-lg active:shadow-md'>
        <p className='text-lg font-bold' key={event.id}>
          {event.title}
        </p>
        <div className='flex items-end justify-between'>
          <p className='mt-2 flex items-center gap-2'>
            <FaCalendarDay className='text-gray-600' />
            <span className='text-sm'>{dayjs(event.createdAt).format('YYYY.M.D H:mm ~')}</span>
          </p>

          {event.user.name !== null && event.user.image !== null && (
            <div className='flex items-center gap-2'>
              <img className='h-6 w-6 rounded-full' src={event.user.image} alt={event.user.name} />
              <Link href={`/u/${event.user.name}`}>
                <p className='text-sm hover:underline'>{event.user.name}</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
