import React from 'react'

export default class extends React.Component {
    render() {
        return(
            <div>
                <p>下記必要事項をご記入の上、e-mailにて、下記アドレスまでお問い合わせください。</p>
                <p>* お名前</p>
                <p>* e-mail(返信先の希望アドレス）</p>
                <p>* お問い合わせ内容</p>
                <p>※ e-mailアドレスが間違っていますと、ご回答できなくなりますのでご注意ください。</p>

                <footer>
                <address>
                <a href="mailto:sdc@icloud.com">SDCへのメッセージ</a>
                </address>
                </footer>
            </div>
        )
    }
}
