/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import styles from './mainframe.module.scss'

// Components
import MinframeAnime from './MinframeAnime'

const Mainframe = () => {

  return (
    <div className={styles.mainframe}>
      <MinframeAnime/>
    </div>
  )
}

export default Mainframe
