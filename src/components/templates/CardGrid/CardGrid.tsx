import { Card } from 'components/molecules';
import { useApp } from 'context/AppContext';
import React from 'react';

type Props = {
  categoryId: number;
};

export const CardGrid = ({ categoryId }: Props) => {
  const { listings } = useApp();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-10 mt-5 px-10 md:px-20 overflow-auto">
      {listings
        .find((e) => e.id === categoryId)
        ?.data.map((e) => (
          <Card key={e.id} categoryId={categoryId} {...e} />
        ))}
    </div>
  );
};
