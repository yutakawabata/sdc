import React from 'react'
import Navi from "../components/navigation.js"

export default class extends React.Component{
  render() {
    return(
      <div>
        <Navi/>
        <h1>スレを立てる</h1>
        <p>名前：
        <input type="text" name="namae" size="40" maxlength="20" />
        </p>

        <p>
        <input type="checkbox" value="1" checked="checked" />POP
        <input type="checkbox" value="2" />IDOL
        <input type="checkbox" value="3" />HIPHOP
        <input type="checkbox" value="4" />ROCK
        </p>
        <p>
        <input value="選択する" />
        </p>

      </div>
    )
  }
}