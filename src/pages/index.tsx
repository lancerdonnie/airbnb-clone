import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { CardGrid } from 'components/templates';
import { Footer, Header } from 'components/organisms';
import { Categories } from 'components/molecules';
import { FilterButton, ShowMapButton } from 'components/atoms';
import GoogleMapReact from 'google-map-react';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  const [categoryId, setCategoryId] = useState(1);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb clone</title>
        <meta name="description" content="Airbnb clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.categories}>
        <Categories
          onClick={(categoryId) => setCategoryId(categoryId)}
          categoryId={categoryId}
        />
        <FilterButton />
      </div>

      {!showMap ? (
        <CardGrid categoryId={categoryId} />
      ) : (
        <div className={styles.map}>
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
      <div className={styles.showmap} onClick={() => setShowMap(!showMap)}>
        <ShowMapButton showMap={showMap} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
