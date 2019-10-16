import React from 'react'
import scss from './navigation.scss'

import Link from 'next/link'

export default class extends React.Component{
  render(){
    return(
      <div>
        <Link href="/">
          <div className={scss.footer}>
          <footer>
              このサイトにご意見ご要望はこちらまで：
              <a href="mailto:kanrinin@icloud.com">管理人</a>
              </footer>
          </div>
        </Link>
      </div>
    )
  }
}