import { Card, Categories } from 'components/molecules';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Footer, Header } from 'components/organisms';
import FilterIcon from 'assets/icons/filter.svg';
import { useApp } from 'context/AppContext';
import { ShowMapButton } from 'components/atoms';
import GoogleMapReact from 'google-map-react';

const Home: NextPage = () => {
  const { listings } = useApp();
  const [categoryId, setCategoryId] = useState(1);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="h-screen relative overflow-hidden flex flex-col">
      <Head>
        <title>Airbnb clone</title>
        <meta name="description" content="Airbnb clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex px-20 pt-5">
        <Categories
          onClick={(categoryId) => setCategoryId(categoryId)}
          categoryId={categoryId}
        />
        <div className="flex items-center h-12 border-solid border-[1px] border-alt-3 rounded-xl px-4 ml-6 text-xs font-semibold text-alt-4 cursor-pointer">
          <FilterIcon />
          <span className="ml-1">Filters</span>
        </div>
      </div>

      {!showMap ? (
        <div className="grid grid-cols-5 gap-x-6 gap-y-10 mt-5 px-20 overflow-auto">
          {listings
            .find((e) => e.id === categoryId)
            ?.data.map((e) => (
              <Card key={e.id} categoryId={categoryId} {...e} />
            ))}
        </div>
      ) : (
        <div className="flex-grow">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
            }}
            defaultCenter={{
              lat: 6.518572387441918,
              lng: 3.372669140201567,
            }}
            defaultZoom={1}
          />
        </div>
      )}
      <div
        className="absolute left-[50%] translate-x-[-50%] bottom-[88px] "
        onClick={() => setShowMap(!showMap)}
      >
        <ShowMapButton showMap={showMap} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
