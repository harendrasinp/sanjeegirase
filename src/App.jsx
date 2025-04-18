import React from 'react'
import { Layout } from './layout/Layout'
import { Content } from './Content'
export const App = () => {
  return (
    <div className='bg-[url(/images/bg/background.jpg)] bg-fixed bg-cover bg-no-repeat bg-center'>
      <Layout>
          <Content/>
      </Layout>
    </div>
  )
}
