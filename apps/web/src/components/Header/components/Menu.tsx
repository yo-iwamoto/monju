import { signOut } from 'next-auth/react';
import type { FC } from 'react';

export const Menu: FC = () => {
  return (
    <div className='whitespace-nowrap rounded-md bg-white shadow-lg'>
      <ul>
        <li>
          <button
            className='rounded-md bg-white p-3 text-sm transition-colors delay-75 hover:bg-gray-100'
            type='button'
            aria-label='ログアウト'
            onClick={() => signOut()}
          >
            ログアウト
          </button>
        </li>
      </ul>
    </div>
  );
};
