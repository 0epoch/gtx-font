<template>
  <div id="app">
    <router-view/>
    <!-- <upload></upload>     -->

<article class="bd-tw bd-is-grey bd-has-drawing">
  <header class="bd-tw-header">
    <a class="bd-tw-author" href="https://twitter.com/RobStuttaford/status/860885116909998080" target="_blank">
      <figure class="bd-tw-avatar">
        <img class="lazyload" src="https://pbs.twimg.com/profile_images/496667049704173569/mXZt999g_normal.jpeg">
      </figure>
      <div class="bd-tw-name">
        <strong class="bd-tw-fullname">
          Robert Stuttaford
        </strong>
        <span class="bd-tw-username">
          @RobStuttaford
        </span>
      </div>
    </a>
  </header>

  <div class="bd-tw-content">
    which means no JS opinions included!
  </div>

  <p class="bd-tw-date">
      4:53 PM - 6 May 2017
  </p>

  <ul class="Tweet-actions">
    <li class="Tweet-action">
      <a class="TweetAction TweetAction--replyEdge web-intent" href="https://twitter.com/intent/tweet?in_reply_to=860885116909998080">
        <div class="Icon Icon--reply TweetAction-icon Icon--replyEdge"></div>
      </a>
    </li>
    <li class="Tweet-action Tweet-action--retweet">
      <a class="TweetAction TweetAction--retweetEdge web-intent" href="https://twitter.com/intent/retweet?tweet_id=860885116909998080">
        <div class="Icon Icon--retweet TweetAction-icon Icon--retweetEdge"></div>
        
          <span class="TweetAction-stat">
            12
          </span>
        
      </a>
    </li>
    <li class="Tweet-action Tweet-action--heart">
      <a class="TweetAction TweetAction--heartEdge web-intent" href="https://twitter.com/intent/like?tweet_id=860885116909998080&amp;ref_src=twsrc%5Etfw&amp;ref_url=http%3A%2F%2Fbulma.io%2F&amp;original_referer=http%3A%2F%2Fbulma.io%2F&amp;tw_i=860885116909998080&amp;tw_p=tweetembed" target="_blank">
        <div class="Icon Icon--heartEdge TweetAction-icon Icon--heartEdge"></div>
        
          <span class="TweetAction-stat">
            34
          </span>
        
      </a>
    </li>
  </ul>

  
    <img class="bd-drawing bd-is-opinion-free" src="https://bulma.io/images/drawing/opinion-free.png" width="152" height="52">

  
</article>

  </div>
</template>

<script>
import Upload from '@/components/Upload'
import Test from '@/components/Test'
export default {
    name: "App",
    data() {
        return {

        }
    },
    components: {
        "upload": Upload,
        "test": Test
    }
};
</script>

<style>
.bd-index-js-tweet .bd-tw {
    margin-left: auto;
    margin-right: auto;
}
.bd-tw {
    background-color: #fafafa;
    border-radius: 6px;
    color: #697882;
    flex-shrink: 0;
    font-family: Helvetica,Roboto,"Segoe UI",Calibri,sans-serif;
    font-size: 16px;
    max-width: 420px;
    padding: 20px;
}

.bd-has-drawing {
    position: relative;
}
article, aside, figure, footer, header, hgroup, section {
    display: block;
}


.bd-tw-header {
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
}

.bd-tw-author {
    align-items: center;
    color: #1c2022;
    display: flex;
    line-height: 1.2;
}

.bd-tw-avatar {
    flex-shrink: 0;
    height: 36px;
    margin-right: 9px;
    width: 36px;
}

.bd-tw-author {
    align-items: center;
    color: #1c2022;
    display: flex;
    line-height: 1.2;
}   

.bd-tw-avatar img {
    border-radius: 290486px;
    display: block;
    height: 36px;
    width: 36px;
}

img {
    height: auto;
    max-width: 100%;
}

.bd-tw-author {
    align-items: center;
    color: #1c2022;
    display: flex;
    line-height: 1.2;
}

a {
    color: #3273dc;
    cursor: pointer;
    text-decoration: none;
}

.bd-tw-content {
    color: #1c2022;
    font-size: 16px;
    line-height: 1.4;
    margin-top: 14px;
}

.bd-tw-date {
    font-size: 14px;
    line-height: 1.4;
    margin-top: 3.2px;
}

.Tweet-actions {
    align-items: center;
    display: flex;
    margin-top: 8.4px;
}
ul {
    list-style: none;
}

.Tweet-action {
    margin-right: 1.25rem;
}
</style>
