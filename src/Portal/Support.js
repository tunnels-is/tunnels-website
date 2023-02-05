import React from "react";
import { Timeline } from 'react-twitter-widgets'

import "../assets/js/twitter.min.js";
import BannerSmall from "./BannerSmall.js";

const SupportPage = () => {

    return (
        <>
            <BannerSmall />

            <div className="support-wrapper row">

                <div className="card info-card">
                    <h5 className="card-header">Information</h5>
                    <div className="card-body">
                        Phonelines are open from 09:00 UTC to 17:00 UTC
                    </div>
                </div>

                <div className="card phone-card">
                    <h5 className="card-header">Support Phoneline</h5>
                    <div className="card-body">
                        +354 xxx xxxx
                    </div>
                </div>

                <div className="card email-card">
                    <h5 className="card-header">Support Emails</h5>
                    <div className="card-body">
                        <b className="dimmed">General</b><div className="card-value">support@tunnels.is</div>
                        <b className="dimmed">Technical </b><div className="card-value">support@tunnels.is</div>
                        <b className="dimmed">Sales</b><div className="card-value">support@tunnels.is</div>
                    </div>
                </div>

                <div className="row twitter-info">
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'nicelandvpn',
                        }}
                        options={{
                            // height: '1000',
                            theme: "dark"

                        }}
                    />
                    {/* <a class="twitter-timeline" href="https://twitter.com/keyb1nd?ref_src=twsrc%5Etfw">Tweets by keyb1nd</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                </div>


            </div>
        </>
    )
}

export default SupportPage;