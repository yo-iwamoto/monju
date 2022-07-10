import { Link } from '@/components/Link';
import { pagesPath } from '@/lib/$path';
import { Button } from '@/components/Button';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import axios from 'axios';
import type { Event } from '@/types/Resource';

type Props = {
  events: Event[] | undefined;
};

export const View: FC<Props> = ({ events }) => {
  const [file, setFile] = useState<File | null>(null);
  const onChangeFile = useCallback(({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (!files?.length) return;

    setFile(files[0]);
  }, []);

  return (
    <>
      {events &&
        events.map((event) => (
          <Link key={event.id} href={pagesPath.events._id(event.id).$url()}>
            <p key={event.id}>{event.title}</p>
          </Link>
        ))}
      <div className='h-20'></div>
      <input type='file' accept='image/*' onChange={onChangeFile} />
      <Button
        onClick={async () => {
          const res = await axios.put('https://r2-worker.yoiw-cw-demo.workers.dev/', file);
          console.log(res.data);
        }}
      >
        push!
      </Button>
    </>
  );
};
