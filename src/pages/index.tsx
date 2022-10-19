import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { CardGrid } from 'components/templates';
import { Footer, Header } from 'components/organisms';
import { Categories } from 'components/molecules';
import { FilterButton, ShowMapButton } from 'components/atoms';
import GoogleMapReact from 'google-map-react';

const Home: NextPage = () => {
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
      <div className="flex px-10 md:px-20 pt-5">
        <Categories
          onClick={(categoryId) => setCategoryId(categoryId)}
          categoryId={categoryId}
        />
        <FilterButton />
      </div>

      {!showMap ? (
        <CardGrid categoryId={categoryId} />
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
