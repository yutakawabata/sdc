import React from 'react'
import scss from './navigation.scss'

import Link from 'next/link'

export default class extends React.Component{
  render(){
    return(
      <div>
        <Link href="/">
          <div className={scss.title}>
          title
          </div>
        </Link>

        <div className={scss.serch}>
          <h1>スレを検索する</h1>
          <p>キーワード検索</p>

          
          <p>ジャンル検索</p>
          <Link href="/pop">
            <div className={scss.genre}>POP</div>
          </Link>
          <Link href="/idol">
            <div className={scss.genre}>IDOL</div>
          </Link>
          <Link href="/hiphop">
            <div className={scss.genre}>HIPHOP</div>
          </Link>
          <Link href="/rock">
            <div className={scss.genre}>ROCK</div>
          </Link>
        </div>
        
        <Link href="/">
          <div className={scss.footer}>
          <footer>
            {/* <address> */}
              このサイトにご意見ご要望はこちらまで：
              <a href="mailto:kanrinin@icloud.com">管理人</a>
              {/* </address> */}
              </footer>
          </div>
        </Link>
      </div>
    )
  }
}