import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import { Router } from './route'
import img from './assets/imges/iact-logo.png'
import { memo, useMemo } from 'react';
import TowerUploade from './Component/ViewLayout/TowerUploade';
import { Card } from 'reactstrap';
function App() {
  console.log("======app======");


  return (
    <>
      <div className='flex-direction-column bg-body-secondary'>
        <div>

          <Header logo={img} setting={false} route={Router} />
        </div>

        <Card className='viewArea p-5'>
          <TowerUploade></TowerUploade>
        </Card>

        <div>

          <Footer name="Pro-name" />

        </div>
      </div>

    </>
  )
}

export default memo(App)
