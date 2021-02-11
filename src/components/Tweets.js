import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function Tweets() {
    return (
        <section className="tweets">
             <div className="container">
                 <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <TwitterTweetEmbed tweetId={'1346003783483072512'}/>
                      </div>
                      
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <TwitterTweetEmbed tweetId={'1342908411864870913'}/>
                      </div>
                 </div>
             </div>
        </section>
    )
}
